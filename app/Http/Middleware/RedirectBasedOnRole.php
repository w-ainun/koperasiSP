<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RedirectBasedOnRole
{
    /**
     * Handle an incoming request.
     * Redirect authenticated users to their respective dashboards.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if ($request->user()) {
            $role = $request->user()->role;

            // Staff roles go to admin dashboard
            if (in_array($role, ['admin', 'teller', 'credit_analyst', 'collector', 'management'])) {
                return redirect()->route('admin.dashboard');
            }

            // Members go to member dashboard
            return redirect()->route('member.dashboard');
        }

        return $next($request);
    }
}
