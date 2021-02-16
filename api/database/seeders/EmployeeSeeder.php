<?php

namespace Database\Seeders;

use App\Models\Customer;
use App\Models\Department;
use App\Models\Employee;
use App\Models\Meter;
use App\Models\Occupation;
use App\Models\PaymentMethod;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class EmployeeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // DEPARTMENTS
        Department::firstOrCreate(['name' => 'Engineering']);
        Department::firstOrCreate(['name' => 'ITO']);
        Department::firstOrCreate(['name' => 'Account']);
        Department::firstOrCreate(['name' => 'Production']);

        // DEPARTMENTS
        Occupation::firstOrCreate(['name' => 'Software Engineer']);
        Occupation::firstOrCreate(['name' => 'Accountant']);
        Occupation::firstOrCreate(['name' => 'Electrical Engineer']);
        Occupation::firstOrCreate(['name' => 'Plumber']);

        PaymentMethod::firstOrCreate(['name' => 'GCash']);

        // ADMIN USER
        $employee = Employee::factory()->createOne(['is_admin' => Employee::ADMIN]);
        $employee->user()->firstOrCreate([
            'username' => 'admin',
            'password' => Hash::make("password")
        ]);

        // REGULAR EMPLOYEES
        $regular_employees = Employee::factory()->count(250)->create(['is_admin' => Employee::REGULAR]);

        $regular_employees->random(70)->each(function ($employee) {
            $employee->user()->firstOrCreate([
                'username' => strtolower(Str::random(10)) . "@tcwd.org",
                'password' => Hash::make("password")
            ]);
        });
        $meters = Meter::factory()->count(500)->create();
        $customers = Customer::factory()->count(10000)->create();

        $customers->each(function ($customer) use ($meters) {
            if ($customer->is_applicant === 0) {
                $customer->update(['account_number' => 'AC-' . sprintf('%07d', $customer->id)]);
            }

            $numberOfMeters = rand(1, 5);
            for ($i = 0; $i <= $numberOfMeters; $i++) {
                $m =  Meter::inRandomOrder()->first();
                $customer->meters()->attach($m->id, [
                    'date_from' => '1991-01-01',
                    'date_to' => '2040-01-01',
                ]);
            }

            $customer->meters->each(function ($meter) {
                $employee =  Employee::inRandomOrder()->first();

                $meter->readings()->create([
                    'employee_id' => $employee->id,
                    'date_of_reading' => now(),
                    'reading_value' => rand(1000, 10000),
                ]);

                // attach billing
                $meter->readings->each(function ($reading) {
                    $reading->billing()->create([
                        'status_code' => rand(1, 4),
                        'date_period_from' => Carbon::now()->addMonth(-1),
                        'date_period_to' => Carbon::now(),
                        'date_payment_due' => Carbon::now()->addMonth(1),
                        'amount_due' => $reading->reading_value,
                    ]);

                    if (rand(0, 1) === 1) {
                        $reading->billing
                            ->payment()
                            ->create([
                                'status' => rand(1, 2),
                                'type_code' => rand(1, 2),
                                'date_of_payment' => now(),
                                'amount_of_payment' => $reading->reading_value,
                                'payment_method_id' => 1,
                            ]);
                    }
                });
            });
        });
    }
}
