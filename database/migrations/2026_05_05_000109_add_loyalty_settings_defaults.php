<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        $defaults = [
            ['key' => 'loyalty_enable_earn', 'value' => '1', 'description' => 'Enable loyalty point earning'],
            ['key' => 'loyalty_enable_redeem', 'value' => '1', 'description' => 'Enable loyalty point redemption'],
            ['key' => 'loyalty_earn_rate_amount', 'value' => '10000', 'description' => 'Spend amount required to earn 1 point'],
            ['key' => 'loyalty_redeem_point_value', 'value' => '100', 'description' => 'Sri Lankan rupee value for 1 redeemed point'],
            ['key' => 'loyalty_tier_regular_threshold', 'value' => '0', 'description' => 'Regular tier total spend threshold'],
            ['key' => 'loyalty_tier_silver_threshold', 'value' => '500000', 'description' => 'Silver tier total spend threshold'],
            ['key' => 'loyalty_tier_gold_threshold', 'value' => '1500000', 'description' => 'Gold tier total spend threshold'],
            ['key' => 'loyalty_tier_platinum_threshold', 'value' => '3000000', 'description' => 'Platinum tier total spend threshold'],
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

    public function down(): void
    {
        DB::table('settings')
            ->whereIn('key', [
                'loyalty_enable_earn',
                'loyalty_enable_redeem',
                'loyalty_earn_rate_amount',
                'loyalty_redeem_point_value',
                'loyalty_tier_regular_threshold',
                'loyalty_tier_silver_threshold',
                'loyalty_tier_gold_threshold',
                'loyalty_tier_platinum_threshold',
            ])
            ->delete();
    }
};
