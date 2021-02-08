<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
//Route::put('user/{id}', [UserController::class, 'update']);

Route::get('/contactList', [\App\Http\Controllers\ContactController::class, 'ContactList']);
Route::post('/contactDelete', [\App\Http\Controllers\ContactController::class, 'ContactDelete']);






Route::get('/', function () {
    return view('welcome');
});

Route::get('{AnyRoute}', function () {
    return view('welcome');
})->where('AnyRoute','.*');
