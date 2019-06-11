<?php

namespace App\Traits\Auth;

use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails as OriginalSendsPasswordResetEmails;

trait SendsPasswordResetEmails
{
    use OriginalSendsPasswordResetEmails;

    /* Sobre escribir logica original del trait */

    /**
     * Get the response for a successful password reset link.
     *
     * @param  string  $response
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Http\JsonResponse
     */
    protected function sendResetLinkResponse($response)
    {
        if(request()->wantsJson()){
            return response()->json([
                'message' => trans($response),
            ], 200);
        }
        return back()->with('status', trans($response));
    }

    /**
     * Get the response for a failed password reset link.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  string  $response
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Http\JsonResponse
     */
    protected function sendResetLinkFailedResponse(Request $request, $response)
    {
        if($request->wantsJson()){
            return response()->json([
                'message' => trans($response),
            ], 404);
            //return trans($response);
        }
        return back()->withErrors(
            ['email' => trans($response)]
        );
    }
}
