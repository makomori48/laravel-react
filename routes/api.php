<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/', 'playerController@index');
Route::get('/{id}', 'playerController@show');
Route::post('/player', 'playerController@create');
Route::put('/update/{id}', 'playerController@update');
Route::delete('/delete/{id}', 'playerController@destroy');