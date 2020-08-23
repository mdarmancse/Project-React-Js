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


$router->get('/chartData','ChartDataController@onSelect');
$router->get('/clientReview','ClientReviewController@onSelect');
$router->post('/contactSend','ContactController@onContactSend');

$router->get('/courseHome','CourseController@onSelectFour');
$router->get('/courseAll','CourseController@onSelectAll');
$router->post('/courseDetails','CourseController@onSelectDetails');

$router->get('/footer','FooterController@onSelect');
$router->get('/information','InformationController@onSelect');
$router->get('/services','ServiceController@onSelect');


$router->get('/projectHome','ProjectController@onSelectThree');
$router->get('/projectAll','ProjectController@onSelectAll');
$router->post('/projectDetails','ProjectController@onSelectDetails');


$router->get('/video','HomeEtcController@video');
$router->get('/homeTop','HomeEtcController@homeTop');
$router->get('/techDes','HomeEtcController@techDes');
$router->get('/projectClient','HomeEtcController@projectClient');
