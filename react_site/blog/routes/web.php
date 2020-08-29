<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/


$router->get('/', function () use ($router) {
    return $router->app->version();
});


$router->get('/chartData',['middleware'=>'auth','uses'=>'ChartDataController@onSelect']);
$router->get('/clientReview',['middleware'=>'auth','uses'=>'ClientReviewController@onSelect']);
$router->post('/contactSend',['middleware'=>'auth','uses'=>'ContactController@onContactSend']);

$router->get('/courseHome',['middleware'=>'auth','uses'=>'CourseController@onSelectFour']);
$router->get('/courseAll',['middleware'=>'auth','uses'=>'CourseController@onSelectAll']);
$router->post('/courseDetails',['middleware'=>'auth','uses'=>'CourseController@onSelectDetails']);

$router->get('/footer',['middleware'=>'auth','uses'=>'FooterController@onSelect']);
$router->get('/information',['middleware'=>'auth','uses'=>'InformationController@onSelect']);
$router->get('/services',['middleware'=>'auth','uses'=>'ServiceController@onSelect']);


$router->get('/projectHome',['middleware'=>'auth','uses'=>'ProjectController@onSelectThree']);
$router->get('/projectAll',['middleware'=>'auth','uses'=>'ProjectController@onSelectAll']);
$router->post('/projectDetails',['middleware'=>'auth','uses'=>'ProjectController@onSelectDetails']);


$router->get('/video',['middleware'=>'auth','uses'=>'HomeEtcController@video']);
$router->get('/techDes',['middleware'=>'auth','uses'=>'HomeEtcController@techDes']);

$router->get('/homeTop',['middleware'=>'auth','uses'=>'HomeEtcController@homeTop']);
$router->get('/projectClient',['middleware'=>'auth','uses'=>'HomeEtcController@projectClient']);




