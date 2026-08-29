<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        $defaults = [
            ['key' => 'store_name', 'value' => 'Your Store', 'description' => 'Store name'],
            ['key' => 'store_logo', 'value' => null, 'description' => 'Store logo'],
            ['key' => 'store_address', 'value' => 'Address not set', 'description' => 'Full store address'],
            ['key' => 'store_phone', 'value' => '', 'description' => 'Store phone number'],
            ['key' => 'store_email', 'value' => '', 'description' => 'Store email'],
            ['key' => 'store_website', 'value' => '', 'description' => 'Website or social media'],
            ['key' => 'store_city', 'value' => '', 'description' => 'Store city/regency'],
        ];

        foreach ($defaults as $row) {
            DB::table('settings')->updateOrInsert(
                ['key' => $row['key']],
                [
                    'value' => $row['value'],
                    'description' => $row['description'],
                    'created_at' => now(),
                    'updated_at' => now(),
                ]
            );
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::table('settings')
            ->whereIn('key', [
                'store_name',
                'store_logo',
                'store_address',
                'store_phone',
                'store_email',
                'store_website',
                'store_city',
            ])
            ->delete();
    }
};
