<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

// Dashboard redirect - akan redirect ke dashboard sesuai role user
Route::get('dashboard', function () {
    $user = auth()->user();
    
    if ($user->isStaff()) {
        return redirect()->route('admin.dashboard');
    }
    
    return redirect()->route('member.dashboard');
})->middleware(['auth', 'verified', 'active'])->name('dashboard');

/*
|--------------------------------------------------------------------------
| Admin Routes (Staff: admin, teller, credit_analyst, collector, management)
|--------------------------------------------------------------------------
*/
Route::middleware(['auth', 'verified', 'active', 'role:admin,teller,credit_analyst,collector,management'])
    ->prefix('admin')
    ->name('admin.')
    ->group(function () {
        // Dashboard Admin
        Route::get('dashboard', function () {
            return Inertia::render('dashboard-admin');
        })->name('dashboard');

        // Manajemen Anggota
        Route::get('anggota', function () {
            return Inertia::render('manajemen-anggota-admin');
        })->name('anggota');

        // Manajemen Simpanan
        Route::get('simpanan', function () {
            return Inertia::render('manajemen-simpanan-admin');
        })->name('simpanan');

        // Manajemen Pinjaman
        Route::get('pinjaman', function () {
            return Inertia::render('manajemen-pinjaman-admin');
        })->name('pinjaman');

        // Manajemen SHU
        Route::get('shu', function () {
            return Inertia::render('manajemen-shu-admin');
        })->name('shu');

        // Laporan
        Route::get('laporan', function () {
            return Inertia::render('laporan-admin');
        })->name('laporan');
    });

/*
|--------------------------------------------------------------------------
| Member Routes (role: member)
|--------------------------------------------------------------------------
*/
Route::middleware(['auth', 'verified', 'active', 'role:member'])
    ->prefix('member')
    ->name('member.')
    ->group(function () {
        // Dashboard Anggota
        Route::get('dashboard', function () {
            return Inertia::render('dashboard');
        })->name('dashboard');

        // Profil Anggota
        Route::get('profil', function () {
            return Inertia::render('profil-user');
        })->name('profil');

        // SHU Anggota
        Route::get('shu', function () {
            return Inertia::render('shu-user');
        })->name('shu');

        // Simulasi Pinjaman
        Route::get('simulasi', function () {
            return Inertia::render('simulasi-user');
        })->name('simulasi');

        // Notifikasi
        Route::get('notifikasi', function () {
            return Inertia::render('notifikasi-user');
        })->name('notifikasi');
    });

/*
|--------------------------------------------------------------------------
| Shared Routes (Authenticated users - any role)
|--------------------------------------------------------------------------
*/
Route::middleware(['auth', 'verified', 'active'])->group(function () {
    // FAQ / Bantuan
    Route::get('faq', function () {
        return Inertia::render('faq');
    })->name('faq');
});

require __DIR__.'/settings.php';

