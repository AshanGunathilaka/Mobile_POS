<?php

namespace Database\Seeders;

use App\Models\Setting;
use Illuminate\Database\Seeder;

class DineInSettingsSeeder extends Seeder
{
    public function run(): void
    {
        Setting::setMany([
            'dine_in_enabled' => [
                'value' => '1',
                'description' => 'Enable dine-in QR menu feature',
            ],
            'dine_in_self_order_enabled' => [
                'value' => '1',
                'description' => 'Allow customers to order directly from the QR menu',
            ],
            'dine_in_pay_online_enabled' => [
                'value' => '1',
                'description' => 'Allow online payments through the QR menu',
            ],
        ]);
    }
}
