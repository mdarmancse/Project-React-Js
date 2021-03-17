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

//Home
Route::get('/countSummary',[\App\Http\Controllers\HomeController::class,'countSummery'])->middleware('loginCheck');

//Admin Login
Route::get('/login',[\App\Http\Controllers\AdminLoginController::class,'LoginPage']);
Route::get('/logout',[\App\Http\Controllers\AdminLoginController::class,'onLogout']);
Route::get('/onLogin/{UserName}/{Password}',[\App\Http\Controllers\AdminLoginController::class,'onLogin']);

//contact list
Route::get('/contactList', [\App\Http\Controllers\ContactController::class, 'ContactList'])->middleware('loginCheck');
Route::post('/contactDelete', [\App\Http\Controllers\ContactController::class, 'ContactDelete'])->middleware('loginCheck');

//course list
Route::get('/courseList', [\App\Http\Controllers\CourseController::class, 'CourseList'])->middleware('loginCheck');
Route::post('/courseDelete', [\App\Http\Controllers\CourseController::class, 'CourseDelete'])->middleware('loginCheck');
Route::post('/courseAdd', [\App\Http\Controllers\CourseController::class, 'AddCourse'])->middleware('loginCheck');
//service list
Route::get('/serviceList', [\App\Http\Controllers\ServiceController::class, 'ServiceList'])->middleware('loginCheck');
Route::post('/serviceDelete', [\App\Http\Controllers\ServiceController::class, 'ServiceDelete'])->middleware('loginCheck');
Route::post('/serviceAdd', [\App\Http\Controllers\ServiceController::class, 'AddService'])->middleware('loginCheck');

//project list
Route::get('/projectList', [\App\Http\Controllers\ProjectController::class, 'ProjectList'])->middleware('loginCheck');
Route::post('/projectDelete', [\App\Http\Controllers\ProjectController::class, 'ProjectDelete'])->middleware('loginCheck');
Route::post('/projectAdd', [\App\Http\Controllers\ProjectController::class, 'AddProject'])->middleware('loginCheck');
//review list
Route::get('/reviewList', [\App\Http\Controllers\ReviewController::class, 'ReviewList'])->middleware('loginCheck');
Route::post('/reviewDelete', [\App\Http\Controllers\ReviewController::class, 'ReviewDelete'])->middleware('loginCheck');
Route::post('/reviewAdd', [\App\Http\Controllers\ReviewController::class, 'AddReview'])->middleware('loginCheck');


Route::get('/', function () {
    return view('welcome');
})->middleware('loginCheck');

Route::get('{AnyRoute}', function () {
    return view('welcome');
})->where('AnyRoute','.*')->middleware('loginCheck');
