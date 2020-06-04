<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Routing\Exceptions\InvalidSignatureException;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Illuminate\Validation\ValidationException;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Support\Facades\Lang;
use Throwable;

class Handler extends ExceptionHandler
{
  /**
   * A list of the exception types that are not reported.
   *
   * @var array
   */
  protected $dontReport = [
    //
  ];

  /**
   * A list of the inputs that are never flashed for validation exceptions.
   *
   * @var array
   */
  protected $dontFlash = ['password', 'password_confirmation'];

  /**
   * Report or log an exception.
   *
   * @param  \Exception  $exception
   * @return void
   */
  public function report(Throwable $exception)
  {
    parent::report($exception);
  }

  /**
   * Render an exception into an HTTP response.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \Exception  $exception
   * @return \Illuminate\Http\Response
   */
  public function render($request, Throwable $exception)
  {
    if ($exception instanceof InvalidSignatureException) {
      $exception = new HttpException(
        403,
        __($exception->getMessage()),
        $exception
      );
    }
    return parent::render($request, $exception);
  }

  protected function unauthenticated(
    $request,
    AuthenticationException $exception
  ) {
    return response()->json(['message' => Lang::get('Unauthenticated.')], 401);
  }

  protected function invalidJson($request, ValidationException $exception)
  {
    return response()->json(
      [
        'message' => __('validation.exception.message'),
        'errors' => $exception->errors()
      ],
      $exception->status
    );
  }
}
