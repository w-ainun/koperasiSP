# Activity Diagrams - KSP Sejahtera Abadi

Folder ini berisi activity diagram dalam format PlantUML untuk Sistem Koperasi Simpan Pinjam (KSP) Sejahtera Abadi.

## Daftar Activity Diagram

| No | File | Modul | Deskripsi |
|----|------|-------|-----------|
| 1 | `01_activity_keanggotaan.puml` | Keanggotaan | Proses registrasi anggota baru, manajemen profil, keamanan akun, dan kelola status keanggotaan |
| 2 | `02_activity_simpanan.puml` | Simpanan | Proses setoran simpanan, penarikan dana, batch processing bunga, dan dashboard saldo |
| 3 | `03_activity_pinjaman.puml` | Pinjaman | Proses pengajuan pinjaman, pencairan, pembayaran angsuran, penagihan, dan pelunasan |
| 4 | `04_activity_laporan_transaksi.puml` | Laporan Transaksi | Proses lihat riwayat transaksi, generate e-statement, dashboard rekapitulasi, dan laporan NPL |
| 5 | `05_activity_manajemen_shu.puml` | Manajemen SHU | Proses tarik data partisipasi, konfigurasi alokasi, perhitungan SHU, dan distribusi SHU |
| 6 | `06_activity_pengaturan_konfigurasi.puml` | Pengaturan & Konfigurasi | Proses kelola parameter keuangan, tenor, plafon, simpanan, dan audit log |
| 7 | `07_activity_pusat_bantuan.puml` | Pusat Bantuan | Proses broadcast pengumuman, tiket bantuan, FAQ, dan preferensi notifikasi |
| 8 | `08_activity_jaminan.puml` | Jaminan Barang | Proses input jaminan, digitalisasi dokumen, serah terima, kontrol inventaris, dan pelepasan jaminan |

## Cara Membuka/Render Diagram

### Menggunakan VS Code
1. Install extension **PlantUML** dari marketplace
2. Buka file `.puml`
3. Tekan `Alt + D` untuk preview

### Menggunakan PlantUML Online
1. Kunjungi [PlantUML Web Server](http://www.plantuml.com/plantuml/uml/)
2. Copy-paste kode dari file `.puml`
3. Klik "Submit" untuk melihat diagram

### Menggunakan Command Line
```bash
java -jar plantuml.jar *.puml
```

## Struktur Activity Diagram

Setiap activity diagram menggunakan **swimlane** untuk membedakan aktor yang terlibat:

- **Anggota/Calon Anggota**: Pengguna sistem (member)
- **Admin**: Administrator back-office
- **Pengurus**: Pengurus koperasi (approval level tinggi)
- **Teller**: Petugas kasir
- **Analis Kredit**: Petugas analisa kelayakan kredit
- **Petugas Jaminan**: Petugas pengelola jaminan barang
- **Collection**: Tim penagihan
- **Sistem**: Proses otomatis oleh sistem

## Notasi yang Digunakan

| Simbol | Keterangan |
|--------|------------|
| ○→ | Start (titik awal) |
| ◉ | Stop (titik akhir) |
| ▭ | Activity (aktivitas) |
| ◇ | Decision (percabangan) |
| ═══ | Fork/Join (parallel activities) |
| |swimlane| | Swimlane (pembagian aktor) |

## Relasi dengan Use Case Diagram

Activity diagram ini merupakan penjabaran detail dari use case diagram yang terdapat di folder `../usecase-diagrams/`. Setiap activity diagram menggambarkan alur proses (workflow) dari use case yang berkaitan.
