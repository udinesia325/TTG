<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTodoRequest;
use App\Http\Resources\TodoResource;
use App\Models\Todo;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;

class TodoController extends Controller
{
    //
    function index():JsonResponse {
        $todos = Todo::latest()->paginate(10);
        return response()->json([
            "todo" => new TodoResource($todos)
        ]);
    }

    function show(Todo $todo):JsonResponse {
        return response()->json($todo);
    }

    function create(StoreTodoRequest $request):JsonResponse {
        $todo = new Todo();
        $todo->title = $request->input('title');
        $todo->description = $request->input('description');

        $todo->save();
        
        return response()->json($todo);
    }
    
    function update(Request $request,Todo $todo):JsonResponse {
        $todo->title = $request->input('title');
        $todo->description = $request->input('description');
        $todo->save();
        return response()->json($todo);
    }
    
    function delete(Todo $todo):JsonResponse {
        $todo->delete();
        return response()->json($todo);
    }
}
