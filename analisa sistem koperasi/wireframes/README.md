# Wireframes - KSP Sejahtera Abadi

Folder ini berisi wireframe/mockup tampilan sistem Koperasi Simpan Pinjam (KSP) Sejahtera Abadi dalam format PlantUML Salt.

## Daftar Wireframe

### Halaman Umum
| No | File | Deskripsi |
|----|------|-----------|
| 00 | `00_wireframe_login.puml` | Halaman Login |
| 00b | `00b_wireframe_dashboard_anggota.puml` | Dashboard Anggota |
| 00c | `00c_wireframe_dashboard_admin.puml` | Dashboard Admin |

### Modul Keanggotaan
| No | File | Deskripsi |
|----|------|-----------|
| 01 | `01_wireframe_keanggotaan.puml` | Form Registrasi Anggota Baru |
| 01b | `01b_wireframe_profil_anggota.puml` | Halaman Profil Anggota |
| 01c | `01c_wireframe_keamanan_akun.puml` | Pengaturan Keamanan Akun |

### Modul Simpanan
| No | File | Deskripsi |
|----|------|-----------|
| 02 | `02_wireframe_simpanan.puml` | Dashboard Simpanan |
| 02b | `02b_wireframe_setoran_simpanan.puml` | Form Setoran Simpanan |
| 02c | `02c_wireframe_penarikan_dana.puml` | Form Penarikan Dana |

### Modul Pinjaman
| No | File | Deskripsi |
|----|------|-----------|
| 03 | `03_wireframe_pinjaman.puml` | Dashboard Pinjaman |
| 03b | `03b_wireframe_pengajuan_pinjaman.puml` | Form Pengajuan Pinjaman + Simulasi |
| 03c | `03c_wireframe_pembayaran_angsuran.puml` | Form Pembayaran Angsuran |

### Modul Laporan Transaksi
| No | File | Deskripsi |
|----|------|-----------|
| 04 | `04_wireframe_laporan_transaksi.puml` | Riwayat Transaksi + Filter |
| 04b | `04b_wireframe_e_statement.puml` | E-Statement / E-Passbook |

### Modul Manajemen SHU
| No | File | Deskripsi |
|----|------|-----------|
| 05 | `05_wireframe_manajemen_shu.puml` | SHU Anggota |
| 05b | `05b_wireframe_manajemen_shu_admin.puml` | Konfigurasi SHU (Admin) |

### Modul Pengaturan & Konfigurasi
| No | File | Deskripsi |
|----|------|-----------|
| 06 | `06_wireframe_pengaturan.puml` | Parameter Keuangan |
| 06b | `06b_wireframe_pengaturan_plafon.puml` | Pengaturan Plafon & Tenor |

### Modul Pusat Bantuan
| No | File | Deskripsi |
|----|------|-----------|
| 07 | `07_wireframe_pusat_bantuan.puml` | Pusat Bantuan + FAQ |
| 07b | `07b_wireframe_ajukan_tiket.puml` | Form Ajukan Tiket Bantuan |
| 07c | `07c_wireframe_kelola_tiket_admin.puml` | Daftar Tiket (Admin) |
| 07d | `07d_wireframe_detail_tiket_admin.puml` | Detail Tiket (Admin) |

### Modul Jaminan Barang
| No | File | Deskripsi |
|----|------|-----------|
| 08 | `08_wireframe_jaminan.puml` | Jaminan Barang (Anggota) |
| 08b | `08b_wireframe_input_jaminan_admin.puml` | Input Jaminan Baru (Admin) |
| 08c | `08c_wireframe_pelepasan_jaminan.puml` | Proses Pelepasan Jaminan |

### Modul Broadcast
| No | File | Deskripsi |
|----|------|-----------|
| 09 | `09_wireframe_broadcast_admin.puml` | Kirim Pengumuman Massal |

## Cara Membuka/Render Wireframe

### Menggunakan VS Code
1. Install extension **PlantUML** dari marketplace
2. Buka file `.puml`
3. Tekan `Alt + D` untuk preview

### Menggunakan PlantUML Online
1. Kunjungi [PlantUML Web Server](http://www.plantuml.com/plantuml/uml/)
2. Copy-paste kode dari file `.puml`
3. Klik "Submit" untuk melihat wireframe

## Komponen UI yang Digunakan

| Komponen | Notasi Salt | Keterangan |
|----------|-------------|------------|
| Button | `[ Text ]` | Tombol aksi |
| Text Input | `" text "` | Input field |
| Dropdown | `^Option^` | Dropdown select |
| Checkbox | `[X]` atau `[ ]` | Checkbox |
| Radio | `(X)` atau `( )` | Radio button |
| Table | `{#...}` | Tabel dengan header |
| Tab | `{/...}` | Tab navigation |
| Panel | `{+...}` | Panel dengan border |
| Textarea | `{SI...}` | Multi-line input |
| Separator | `--` atau `==` | Garis pemisah |

## Catatan Desain

- Wireframe dibuat dalam format **low-fidelity** untuk fokus pada struktur dan alur
- Warna menggunakan tag HTML sederhana (`<color:green>`, `<color:red>`, dll)
- Icon menggunakan OpenIconic dengan format `<&icon-name>`
- Layout responsive tidak termasuk dalam wireframe PlantUML
