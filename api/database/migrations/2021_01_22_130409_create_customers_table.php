<?php

use App\Models\User;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCustomersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->id();
            $table->string('first_name');
            $table->string('last_name');
            $table->string('middle_name')->nullable();
            $table->string('account_number')->nullable();
            $table->string('account_name')->nullable();
            $table->string('user_count')->default(0);
            $table->enum('type_of_water_service', [1, 2, 3]);
            $table->string('block_number')->nullable();
            $table->string('barangay')->nullable();
            $table->string('city')->nullable();
            $table->string('route')->nullable();
            $table->string('nearest_neighbor')->nullable();
            $table->boolean('is_active')->default(User::INACTIVE);
            $table->date('birth_date');
            $table->string('contact_number')->nullable();
            $table->enum('civil_status', [User::SINGLE, User::MARRIED, User::WIDOWED]);
            $table->enum('gender', [User::MALE, User::FEMALE]);
            $table->string('spouse_name')->nullable();
            $table->enum('ownership_details', [1, 2])->nullable(); // owned, unowned
            $table->tinyInteger('is_applicant')->default(0); // 1 or 0
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('customers');
    }
}
