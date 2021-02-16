<?php

namespace App\Traits;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

trait JsonResponser
{
    public function errorResponse($message, $statusCode, $errors = null)
    {
        $data = [
            'message' => $message
        ];

        if ($errors) {
            $data['errors'] = $errors;
        }

        return response()->json($data, $statusCode);
    }

    public function successResponse($data, $statusCode = Response::HTTP_OK)
    {
        return response()->json($data, $statusCode);
    }

    public function showAll($data, $statusCode = Response::HTTP_OK)
    {
        return response()->json([
            'status' => $statusCode,
            'data' => $data
        ], $statusCode);
    }

    public function showOne($instance, $statusCode = Response::HTTP_OK)
    {
        return response()->json([
            'status' => $statusCode,
            'data' => $instance
        ], $statusCode);
    }
}
