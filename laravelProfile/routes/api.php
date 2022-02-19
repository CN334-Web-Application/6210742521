<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProfileController;

// Public Routes
Route::get('/profile', [ProfileController::class, 'index']);
