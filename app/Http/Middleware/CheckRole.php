<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     * @param  string  ...$roles
     */
    public function handle(Request $request, Closure $next, string ...$roles): Response
    {
        if (!$request->user()) {
            return redirect()->route('login');
        }

        if (!in_array($request->user()->role, $roles)) {
            // Redirect ke dashboard sesuai role jika tidak punya akses
            return redirect()->route($this->getDashboardRoute($request->user()->role));
        }

        return $next($request);
    }

    /**
     * Get dashboard route based on user role.
     */
    protected function getDashboardRoute(string $role): string
    {
        return match ($role) {
            'admin', 'teller', 'credit_analyst', 'collector', 'management' => 'admin.dashboard',
            default => 'member.dashboard',
        };
    }
}
