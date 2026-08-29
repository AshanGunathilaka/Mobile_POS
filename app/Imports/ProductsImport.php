<?php

namespace App\Imports;

use App\Models\Category;
use App\Models\Product;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithBatchInserts;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithValidation;

class ProductsImport implements ToModel, WithBatchInserts, WithChunkReading, WithHeadingRow, WithValidation
{
    private int $rowCount = 0;

    public function model(array $row)
    {
        $this->rowCount++;
        $categoryName = trim($row['category'] ?? $row['kategori'] ?? 'General');
        $category = Category::firstOrCreate(
            ['name' => $categoryName],
            ['description' => '', 'image' => 'default.png']
        );

        $barcode = (string) ($row['barcode'] ?? '');

        return Product::updateOrCreate(
            ['barcode' => $barcode],
            [
                'sku' => $row['sku'] ?? $barcode,
                'title' => $row['name'] ?? $row['nama'] ?? '',
                'description' => $row['description'] ?? $row['deskripsi'] ?? '',
                'category_id' => $category->id,
                'buy_price' => (int) ($row['buy_price'] ?? $row['harga_beli'] ?? 0),
                'sell_price' => (int) ($row['sell_price'] ?? $row['harga_jual'] ?? 0),
                'stock' => (int) ($row['stock'] ?? 0),
                'min_stock' => (int) ($row['min_stock'] ?? 0),
                'max_stock' => (int) ($row['max_stock'] ?? 0),
                'tax_type' => $row['tax_type'] ?? $row['tipe_tax'] ?? 'exclusive',
                'tax_rate' => (float) ($row['tax_rate'] ?? $row['tarif_tax'] ?? 11.00),
            ]
        );
    }

    public function rules(): array
    {
        return [
            'barcode' => ['required'],
            'name' => ['required', 'string', 'max:255'],
            'buy_price' => ['nullable', 'numeric', 'min:0'],
            'sell_price' => ['nullable', 'numeric', 'min:0'],
        ];
    }

    public function customValidationMessages()
    {
        return [
            'barcode.required' => 'Barcode is required.',
            'barcode.unique' => 'Barcode is already registered.',
            'name.required' => 'Product name is required.',
        ];
    }

    public function batchSize(): int
    {
        return 100;
    }

    public function chunkSize(): int
    {
        return 100;
    }

    public function getRowCount(): int
    {
        return $this->rowCount;
    }
}
