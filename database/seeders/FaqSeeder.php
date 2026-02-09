<?php

namespace Database\Seeders;

use App\Models\Faq;
use Illuminate\Database\Seeder;

class FaqSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faqs = [
            // Account
            [
                'category' => 'account',
                'question' => 'Bagaimana cara mendaftar menjadi anggota koperasi?',
                'answer' => 'Anda dapat mendaftar dengan mengisi formulir pendaftaran online di website kami, kemudian upload dokumen pendukung (KTP, foto selfie dengan KTP). Tim kami akan memverifikasi dalam 1-3 hari kerja.',
                'order' => 1,
            ],
            [
                'category' => 'account',
                'question' => 'Apa saja syarat menjadi anggota?',
                'answer' => 'Syarat menjadi anggota: (1) WNI berusia minimal 17 tahun, (2) Memiliki KTP yang masih berlaku, (3) Menyetor simpanan pokok sebesar Rp 1.000.000, (4) Menyetujui AD/ART koperasi.',
                'order' => 2,
            ],
            [
                'category' => 'account',
                'question' => 'Bagaimana cara mengubah password?',
                'answer' => 'Masuk ke menu Profil > Keamanan Akun > Ubah Password. Masukkan password lama dan password baru Anda.',
                'order' => 3,
            ],

            // Savings
            [
                'category' => 'savings',
                'question' => 'Apa perbedaan simpanan pokok, wajib, dan sukarela?',
                'answer' => 'Simpanan Pokok: dibayar satu kali saat mendaftar (Rp 1.000.000). Simpanan Wajib: dibayar rutin setiap bulan (Rp 100.000). Simpanan Sukarela: dapat disetor kapan saja sesuai kemampuan dan dapat ditarik sewaktu-waktu.',
                'order' => 1,
            ],
            [
                'category' => 'savings',
                'question' => 'Berapa bunga simpanan yang diberikan?',
                'answer' => 'Bunga simpanan: Simpanan Pokok 3% per tahun, Simpanan Wajib 3% per tahun, Simpanan Sukarela 5% per tahun. Bunga dihitung dan dibayarkan setiap akhir tahun.',
                'order' => 2,
            ],
            [
                'category' => 'savings',
                'question' => 'Bagaimana cara melakukan setoran simpanan?',
                'answer' => 'Setoran dapat dilakukan melalui: (1) Transfer bank ke rekening koperasi, (2) Payment gateway (kartu kredit/debit), (3) E-wallet (OVO, Dana, QRIS), (4) Langsung ke kantor koperasi.',
                'order' => 3,
            ],

            // Loan
            [
                'category' => 'loan',
                'question' => 'Berapa plafon pinjaman yang bisa saya ajukan?',
                'answer' => 'Plafon pinjaman minimal Rp 1.000.000 dan maksimal Rp 100.000.000. Besaran pinjaman disesuaikan dengan kemampuan bayar (DTI ratio maksimal 40%) dan riwayat keanggotaan Anda.',
                'order' => 1,
            ],
            [
                'category' => 'loan',
                'question' => 'Berapa lama proses persetujuan pinjaman?',
                'answer' => 'Proses review dan persetujuan pinjaman memakan waktu 3-7 hari kerja. Setelah disetujui, pencairan dana dilakukan dalam 1-2 hari kerja.',
                'order' => 2,
            ],
            [
                'category' => 'loan',
                'question' => 'Apa saja jenis pinjaman yang tersedia?',
                'answer' => 'Tersedia 2 jenis pinjaman: (1) Pinjaman Produktif untuk modal usaha, (2) Pinjaman Konsumtif untuk kebutuhan pribadi. Keduanya dengan bunga flat 12% per tahun.',
                'order' => 3,
            ],
            [
                'category' => 'loan',
                'question' => 'Apakah harus ada jaminan untuk pinjaman?',
                'answer' => 'Jaminan diperlukan untuk pinjaman di atas Rp 10.000.000. Jaminan dapat berupa kendaraan (BPKB), properti (sertifikat), atau aset berharga lainnya.',
                'order' => 4,
            ],

            // Payment
            [
                'category' => 'payment',
                'question' => 'Bagaimana cara membayar angsuran pinjaman?',
                'answer' => 'Pembayaran angsuran dapat dilakukan melalui: (1) Potong otomatis dari simpanan sukarela, (2) Transfer bank, (3) Payment gateway, (4) E-wallet, (5) Bayar langsung di kantor.',
                'order' => 1,
            ],
            [
                'category' => 'payment',
                'question' => 'Apa sanksi jika terlambat bayar angsuran?',
                'answer' => 'Denda keterlambatan sebesar Rp 5.000 per hari. Jika menunggak lebih dari 90 hari, status pinjaman akan menjadi bermasalah dan akan dilakukan penagihan intensif.',
                'order' => 2,
            ],

            // SHU
            [
                'category' => 'shu',
                'question' => 'Apa itu SHU dan kapan dibagikan?',
                'answer' => 'SHU (Sisa Hasil Usaha) adalah pembagian keuntungan koperasi kepada anggota. Dibagikan setiap tahun setelah RAT (Rapat Anggota Tahunan). Besaran SHU berdasarkan partisipasi simpanan dan transaksi pinjaman.',
                'order' => 1,
            ],
            [
                'category' => 'shu',
                'question' => 'Bagaimana cara menghitung SHU yang saya terima?',
                'answer' => 'SHU dihitung berdasarkan: (1) Jasa Modal (dari total simpanan), (2) Jasa Transaksi (dari bunga pinjaman yang dibayar). Semakin aktif bertransaksi, semakin besar SHU yang diterima.',
                'order' => 2,
            ],

            // General
            [
                'category' => 'general',
                'question' => 'Bagaimana cara menghubungi customer service?',
                'answer' => 'Anda dapat menghubungi kami melalui: (1) Fitur Tiket Bantuan di aplikasi, (2) Email: info@kspsejahtera.com, (3) Telepon: 021-12345678 (Senin-Jumat, 08:00-17:00), (4) Datang langsung ke kantor.',
                'order' => 1,
            ],
            [
                'category' => 'general',
                'question' => 'Apakah data saya aman?',
                'answer' => 'Keamanan data adalah prioritas kami. Sistem kami menggunakan enkripsi SSL, autentikasi 2 faktor, dan audit log yang ketat. Data pribadi Anda tidak akan dibagikan kepada pihak ketiga tanpa izin.',
                'order' => 2,
            ],
        ];

        foreach ($faqs as $faq) {
            Faq::create($faq);
        }

        $this->command->info('Created ' . count($faqs) . ' FAQs');
    }
}
