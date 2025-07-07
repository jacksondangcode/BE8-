// src/pages/Login.tsx
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';
import { Link } from 'react-router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-green-50 via-blue-50 to-teal-50">
      {/* Decorative health-related background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-200/20 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-blue-200/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 left-20 w-36 h-36 bg-teal-200/20 rounded-full blur-xl"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        <Card className="bg-white/80 backdrop-blur-sm border-white/40 shadow-xl">
          <CardHeader className="text-center">
            {/* Health App Logo */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
            </div>

            <CardTitle className="text-3xl font-bold text-gray-800 mb-2">Health Tracker</CardTitle>
            <p className="text-gray-600">Track your health daily</p>
          </CardHeader>
          <CardContent>

          <form className="space-y-6">
            <div>
              <Label htmlFor="email" className="text-gray-700 font-medium mb-2 block">
                Email
              </Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </div>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-12 border-gray-200 focus:border-green-400 focus:ring-green-400 rounded-xl"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="password" className="text-gray-700 font-medium mb-2 block">
                Password
              </Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 h-12 border-gray-200 focus:border-green-400 focus:ring-green-400 rounded-xl"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" className="data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600" />
                <label 
                  htmlFor="remember" 
                  className="text-sm text-gray-700 hover:text-gray-800 transition-colors duration-200 cursor-pointer"
                >
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-green-600 hover:text-green-700 font-medium transition-colors duration-200">
                Forgot password?
              </a>
            </div>

            <Button className="w-full h-12 bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-200 transform hover:scale-[1.02] cursor-pointer">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
              Sign In
            </Button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-center text-gray-600 text-sm">
              Don't have an account?{' '}
              <Link to="/register" className="text-green-600 hover:text-green-700 font-semibold">
                Sign up now
              </Link>
            </p>
          </div>

          {/* Health tips */}
          <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-100">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm text-green-800 font-medium">Health Tip</p>
                <p className="text-sm text-green-700 mt-1">Drink at least 8 glasses of water daily to maintain good health!</p>
              </div>
            </div>
          </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
