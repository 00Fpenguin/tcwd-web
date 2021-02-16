<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\User;

class CreateEmployeesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->id();
            $table->string('first_name');
            $table->string('last_name');
            $table->string('middle_name')->nullable();
            $table->date('employment_date');
            $table->boolean('is_validated')->default(FALSE);
            $table->boolean('is_active')->default(User::INACTIVE);
            $table->date('birth_date');
            $table->string('account_name')->nullable();
            $table->string('contact_number')->nullable();
            $table->enum('civil_status', [User::SINGLE, User::MARRIED, User::WIDOWED]);
            $table->enum('gender', [User::MALE, User::FEMALE]);
            $table->string('spouse_name')->nullable();
            $table->enum('ownership_details', [1, 2])->nullable(); // owned, unowned
            $table->boolean('is_admin', \App\Models\Employee::REGULAR);
            $table->timestamps();

            $table->foreignId('occupation_id')->nullable();
            $table->foreignId('department_id')->nullable();

            $table->foreign('occupation_id')->references('id')->on('occupations');
            $table->foreign('department_id')->references('id')->on('departments');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('employees');
    }
}
