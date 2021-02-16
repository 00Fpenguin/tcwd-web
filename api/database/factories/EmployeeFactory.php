<?php

namespace Database\Factories;

use App\Models\Department;
use App\Models\Employee;
use App\Models\Occupation;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Collection;

class EmployeeFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Employee::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $gender = $this->faker->randomElement([User::MALE, User::FEMALE]);
        return [
            'first_name' => $gender === User::MALE ?  $this->faker->firstNameMale : $this->faker->firstNameFemale,
            'last_name' => $this->faker->lastName,
            'middle_name' => $this->faker->lastName,
            'employment_date' => $this->faker->dateTimeBetween(),
            'is_validated' => $this->faker->randomElement([TRUE, FALSE]),
            'is_active' => $this->faker->randomElement([TRUE, FALSE]),
            'birth_date' => $this->faker->dateTimeBetween("-60 days", "-30 days"),
            'account_name' => $this->faker->name,
            'contact_number' => $this->faker->phoneNumber,
            'civil_status' => $this->faker->randomElement([User::SINGLE, User::MARRIED, User::WIDOWED]),
            'gender' => $gender,
            'spouse_name' => $this->faker->name,
            'ownership_details' => $this->faker->randomElement([1, 2]),
            'is_admin' => $this->faker->randomElement([TRUE, FALSE]),
            'occupation_id' => Occupation::all()->first()->id,
            'department_id' => Department::all()->first()->id,
        ];
    }
}
