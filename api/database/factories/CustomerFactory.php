<?php

namespace Database\Factories;

use App\Models\Customer;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class CustomerFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Customer::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $fistname = $this->faker->firstName;
        $lastname = $this->faker->lastName;
        $name = $fistname . ' ' . $lastname;

        return [
            'first_name' => $fistname,
            'last_name' => $lastname,
            'middle_name' => $this->faker->lastName,
            'account_number' => null,
            'account_name' => $name,
            'user_count' => rand(1, 10),
            'type_of_water_service' => 1,
            'block_number' => rand(1000, 10000),
            'barangay' => $this->faker->state,
            'city' => $this->faker->city,
            'route' => $this->faker->address,
            'nearest_neighbor' => $this->faker->firstName . ' ' . $this->faker->lastName,
            'is_active' => 1,
            'birth_date' => $this->faker->date(),
            'contact_number' => $this->faker->phoneNumber,
            'civil_status' => $this->faker->randomElement([User::MARRIED, User::SINGLE]),
            'gender' => $this->faker->randomElement([1, 2]),
            'spouse_name' => $this->faker->firstName . ' ' . $this->faker->lastName,
            'ownership_details' => rand(1, 2),
            'is_applicant' => rand(0, 1),
        ];
    }
}
