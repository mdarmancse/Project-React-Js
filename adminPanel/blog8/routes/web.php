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
//contact list
Route::get('/contactList', [\App\Http\Controllers\ContactController::class, 'ContactList']);
Route::post('/contactDelete', [\App\Http\Controllers\ContactController::class, 'ContactDelete']);

//course list
Route::get('/courseList', [\App\Http\Controllers\CourseController::class, 'CourseList']);
Route::post('/courseDelete', [\App\Http\Controllers\CourseController::class, 'CourseDelete']);

//service list
Route::get('/serviceList', [\App\Http\Controllers\ServiceController::class, 'ServiceList']);
Route::post('/serviceDelete', [\App\Http\Controllers\ServiceController::class, 'ServiceDelete']);

//project list
Route::get('/projectList', [\App\Http\Controllers\ProjectController::class, 'ProjectList']);
Route::post('/projectDelete', [\App\Http\Controllers\ProjectController::class, 'ProjectDelete']);

//review list
Route::get('/reviewList', [\App\Http\Controllers\ReviewController::class, 'ReviewList']);
Route::post('/reviewDelete', [\App\Http\Controllers\ReviewController::class, 'ReviewDelete']);


Route::get('/', function () {
    return view('welcome');
});

Route::get('{AnyRoute}', function () {
    return view('welcome');
})->where('AnyRoute','.*');
