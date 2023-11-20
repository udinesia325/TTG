<?php

use App\Http\Controllers\TodoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('cors')->group(function () {

    Route::get('/GetAll', [TodoController::class, 'index']);
    Route::post('/Create', [TodoController::class, 'create']);

    function missing()
    {

        return fn () => response()->json([
            "message" => "Not Found"
        ]);
    }
    Route::get('/GetOne/{todo}', [TodoController::class, 'show'])->missing(missing());
    Route::patch('/Update/{todo}', [TodoController::class, 'update'])->missing(missing());
    Route::delete('/Delete/{todo}', [TodoController::class, 'delete'])->missing(missing());
});
