// src/pages/Profile.tsx
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '@/store';
import {
  setName,
  setEmail,
  setAge,
  setWeight,
  setHeight,
  setPhone,
  setHealthGoal,
} from '@/store/profileSlice';

export default function Profile() {
  const dispatch = useDispatch<AppDispatch>();
  const { name, email, age, weight, height, phone, healthGoal } = useSelector((state: RootState) => state.profile);

  // Calculate BMI
  const bmi = weight && height ? (parseFloat(weight) / Math.pow(parseFloat(height) / 100, 2)).toFixed(1) : 0;
  const getBMIStatus = (bmi: number) => {
    if (bmi < 18.5) return { text: 'Underweight', color: 'text-yellow-600', bg: 'bg-yellow-50' };
    if (bmi < 25) return { text: 'Normal', color: 'text-green-600', bg: 'bg-green-50' };
    if (bmi < 30) return { text: 'Overweight', color: 'text-orange-600', bg: 'bg-orange-50' };
    return { text: 'Obese', color: 'text-red-600', bg: 'bg-red-50' };
  };

  const bmiStatus = getBMIStatus(parseFloat(bmi.toString()));

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-emerald-50 p-4">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-200/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-200/20 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <Card className="bg-white/80 backdrop-blur-sm border-white/40 shadow-xl mb-6">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Health Profile</h1>
                <p className="text-gray-600">Manage personal information and health goals</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Profile Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white/80 backdrop-blur-sm border-white/40 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-800 flex items-center">
                  <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-0">

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 font-medium mb-2 block">
                      Full Name
                    </Label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => dispatch(setName(e.target.value))}
                        className="pl-10 h-12 border-gray-200 focus:border-green-400 focus:ring-green-400 rounded-xl"
                      />
                    </div>
                  </div>

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
                        value={email}
                        onChange={(e) => dispatch(setEmail(e.target.value))}
                        className="pl-10 h-12 border-gray-200 focus:border-green-400 focus:ring-green-400 rounded-xl"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-gray-700 font-medium mb-2 block">
                      Phone Number
                    </Label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={phone}
                        onChange={(e) => dispatch(setPhone(e.target.value))}
                        className="pl-10 h-12 border-gray-200 focus:border-green-400 focus:ring-green-400 rounded-xl"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="age" className="text-gray-700 font-medium mb-2 block">
                      Age
                    </Label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <Input
                        id="age"
                        type="number"
                        value={age}
                        onChange={(e) => dispatch(setAge(e.target.value))}
                        className="pl-10 h-12 border-gray-200 focus:border-green-400 focus:ring-green-400 rounded-xl"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="weight" className="text-gray-700 font-medium mb-2 block">
                      Weight (kg)
                    </Label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                          />
                        </svg>
                      </div>
                      <Input
                        id="weight"
                        type="number"
                        value={weight}
                        onChange={(e) => dispatch(setWeight(e.target.value))}
                        className="pl-10 h-12 border-gray-200 focus:border-green-400 focus:ring-green-400 rounded-xl"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="height" className="text-gray-700 font-medium mb-2 block">
                      Height (cm)
                    </Label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0h4a1 1 0 011 1v4a1 1 0 01-1 1h-1m-4-6H7m10 0v6m0 0v8a1 1 0 01-1 1H8a1 1 0 01-1-1v-8m10 0H7m0 0V9a1 1 0 00-1-1H2a1 1 0 00-1 1v4a1 1 0 001 1h4m0-6h8"
                          />
                        </svg>
                      </div>
                      <Input
                        id="height"
                        type="number"
                        value={height}
                        onChange={(e) => dispatch(setHeight(e.target.value))}
                        className="pl-10 h-12 border-gray-200 focus:border-green-400 focus:ring-green-400 rounded-xl"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="health-goal" className="text-gray-700 font-medium mb-2 block">
                    Health Goal
                  </Label>
                  <Select value={healthGoal} onValueChange={(value: 'lose' | 'maintain' | 'gain') => dispatch(setHealthGoal(value))}>
                    <SelectTrigger className="w-full h-12 border-gray-200 focus:border-green-400 focus:ring-green-400 rounded-xl">
                      <SelectValue placeholder="Select health goal" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lose">
                        <div className="flex items-center space-x-2">
                          <span className="text-red-600">📉</span>
                          <span>Lose weight</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="gain">
                        <div className="flex items-center space-x-2">
                          <span className="text-blue-600">📈</span>
                          <span>Gain weight</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="maintain">
                        <div className="flex items-center space-x-2">
                          <span className="text-green-600">⚖️</span>
                          <span>Maintain weight</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="muscle">
                        <div className="flex items-center space-x-2">
                          <span className="text-orange-600">💪</span>
                          <span>Build muscle</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="fitness">
                        <div className="flex items-center space-x-2">
                          <span className="text-purple-600">🏃</span>
                          <span>Improve fitness</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full h-12 bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-200 transform hover:scale-[1.02] cursor-pointer">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Save Changes
                </Button>
              </form>
              </CardContent>
            </Card>
          </div>

          {/* Side Panel - Health Stats */}
          <div className="space-y-6">
            {/* BMI Card */}
            <Card className="bg-white/80 backdrop-blur-sm border-white/40 shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-800 flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  BMI Index
                </CardTitle>
              </CardHeader>
              <CardContent>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800 mb-2">{bmi}</div>
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${bmiStatus.bg} ${bmiStatus.color}`}>
                  {bmiStatus.text}
                </div>
              </div>
              </CardContent>
            </Card>

            {/* Health Tips */}
            <Card className="bg-white/80 backdrop-blur-sm border-white/40 shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-800 flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Today's Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-xl">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <p className="text-sm text-green-800">Drink at least 8 glasses of water daily to maintain optimal hydration.</p>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-teal-50 rounded-xl">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                  <p className="text-sm text-teal-800">Exercise at least 30 minutes daily to improve cardiovascular health.</p>
                </div>
              </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-white/80 backdrop-blur-sm border-white/40 shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-800 flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start text-left border-green-200 hover:bg-green-50 cursor-pointer"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Record weight
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start text-left border-teal-200 hover:bg-teal-50 cursor-pointer"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Schedule workout
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
