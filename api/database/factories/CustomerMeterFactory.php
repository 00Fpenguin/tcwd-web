<?php

namespace Database\Factories;

use App\Models\CustomerMeter;
use Illuminate\Database\Eloquent\Factories\Factory;

class CustomerMeterFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = CustomerMeter::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            // 'customer_id' => factory()
        ];
    }
}
