<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $male_profile_pic = "https://st2.depositphotos.com/5682790/10456/v/450/depositphotos_104564156-stock-illustration-male-user-icon.jpg";
        $female_profile_pic = "https://st2.depositphotos.com/3250055/8394/v/950/depositphotos_83944630-stock-illustration-female-avatar-profile-picture.jpg";

        return [
            'first_name' => $this->faker->first,
            'last_name' => $this->faker->unique()->safeEmail,
            'middle_name' => $this->faker->first,
            'profile_picture' => $male_profile_pic,
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
        ];
    }
}
