import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';
import { add, format, getWeek, startOfWeek, sub, startOfMonth, endOfMonth, eachDayOfInterval, getDay } from 'date-fns';
import { cn } from '@/lib/utils';
import { useSelector } from 'react-redux';
import type { RootState } from '@/store';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

// Mock data for demonstration purposes
const weeklyMealPlan: { [key: string]: { days: DayData[] } } = {
  '25': {
    // Week 25 of the year
    days: [
      {
        day: 'Monday',
        date: '17',
        meals: {
          breakfast: { name: 'Oatmeal with Berries', calories: 350 },
          lunch: { name: 'Grilled Chicken Salad', calories: 450 },
          dinner: { name: 'Salmon with Quinoa & Asparagus', calories: 550 },
          snacks: { name: 'Greek Yogurt', calories: 150 },
        },
        totalCalories: 1500,
      },
      {
        day: 'Tuesday',
        date: '18',
        meals: {
          breakfast: { name: 'Scrambled Eggs & Avocado Toast', calories: 400 },
          lunch: { name: 'Lentil Soup', calories: 400 },
          dinner: { name: 'Beef Stir-fry with Brown Rice', calories: 600 },
          snacks: { name: 'Apple with Peanut Butter', calories: 200 },
        },
        totalCalories: 1600,
      },
      {
        day: 'Wednesday',
        date: '19',
        meals: {
          breakfast: { name: 'Oatmeal with Berries', calories: 350 },
          lunch: { name: 'Grilled Chicken Salad', calories: 450 },
          dinner: { name: 'Salmon with Quinoa & Asparagus', calories: 550 },
          snacks: { name: 'Greek Yogurt', calories: 150 },
        },
        totalCalories: 1500,
      },
      {
        day: 'Thursday',
        date: '20',
        meals: {
          breakfast: { name: 'Scrambled Eggs & Avocado Toast', calories: 400 },
          lunch: { name: 'Lentil Soup', calories: 400 },
          dinner: { name: 'Beef Stir-fry with Brown Rice', calories: 600 },
          snacks: { name: 'Apple with Peanut Butter', calories: 200 },
        },
        totalCalories: 1600,
      },
      {
        day: 'Friday',
        date: '21',
        meals: {
          breakfast: { name: 'Oatmeal with Berries', calories: 350 },
          lunch: { name: 'Grilled Chicken Salad', calories: 450 },
          dinner: { name: 'Salmon with Quinoa & Asparagus', calories: 550 },
          snacks: { name: 'Greek Yogurt', calories: 150 },
        },
        totalCalories: 1500,
      },
      {
        day: 'Saturday',
        date: '22',
        meals: {
          breakfast: { name: 'Scrambled Eggs & Avocado Toast', calories: 400 },
          lunch: { name: 'Lentil Soup', calories: 400 },
          dinner: { name: 'Beef Stir-fry with Brown Rice', calories: 600 },
          snacks: { name: 'Apple with Peanut Butter', calories: 200 },
        },
        totalCalories: 1600,
      },
      {
        day: 'Sunday',
        date: '23',
        meals: {
          breakfast: { name: 'Oatmeal with Berries', calories: 350 },
          lunch: { name: 'Grilled Chicken Salad', calories: 450 },
          dinner: { name: 'Salmon with Quinoa & Asparagus', calories: 550 },
          snacks: { name: 'Greek Yogurt', calories: 150 },
        },
        totalCalories: 1500,
      },
    ],
  },
  '26': {
    // Week 26 of the year
    days: [
      {
        day: 'Monday',
        date: '24',
        meals: {
          breakfast: { name: 'Smoothie with Protein Powder', calories: 400 },
          lunch: { name: 'Turkey Wrap', calories: 500 },
          dinner: { name: 'Chicken Fajitas', calories: 600 },
          snacks: { name: 'Mixed Nuts', calories: 200 },
        },
        totalCalories: 1700,
      },
      // ... (data for other days of week 26)
      {
        day: 'Tuesday',
        date: '25',
        meals: {
          breakfast: { name: 'Pancakes', calories: 500 },
          lunch: { name: 'Leftover Fajitas', calories: 600 },
          dinner: { name: 'Spaghetti', calories: 700 },
          snacks: { name: 'Fruit Salad', calories: 150 },
        },
        totalCalories: 1950,
      },
      {
        day: 'Wednesday',
        date: '26',
        meals: {
          breakfast: { name: 'Smoothie with Protein Powder', calories: 400 },
          lunch: { name: 'Turkey Wrap', calories: 500 },
          dinner: { name: 'Chicken Fajitas', calories: 600 },
          snacks: { name: 'Mixed Nuts', calories: 200 },
        },
        totalCalories: 1700,
      },
      {
        day: 'Thursday',
        date: '27',
        meals: {
          breakfast: { name: 'Pancakes', calories: 500 },
          lunch: { name: 'Leftover Fajitas', calories: 600 },
          dinner: { name: 'Spaghetti', calories: 700 },
          snacks: { name: 'Fruit Salad', calories: 150 },
        },
        totalCalories: 1950,
      },
      {
        day: 'Friday',
        date: '28',
        meals: {
          breakfast: { name: 'Smoothie with Protein Powder', calories: 400 },
          lunch: { name: 'Turkey Wrap', calories: 500 },
          dinner: { name: 'Chicken Fajitas', calories: 600 },
          snacks: { name: 'Mixed Nuts', calories: 200 },
        },
        totalCalories: 1700,
      },
      {
        day: 'Saturday',
        date: '29',
        meals: {
          breakfast: { name: 'Pancakes', calories: 500 },
          lunch: { name: 'Leftover Fajitas', calories: 600 },
          dinner: { name: 'Spaghetti', calories: 700 },
          snacks: { name: 'Fruit Salad', calories: 150 },
        },
        totalCalories: 1950,
      },
      {
        day: 'Sunday',
        date: '30',
        meals: {
          breakfast: { name: 'Smoothie with Protein Powder', calories: 400 },
          lunch: { name: 'Turkey Wrap', calories: 500 },
          dinner: { name: 'Chicken Fajitas', calories: 600 },
          snacks: { name: 'Mixed Nuts', calories: 200 },
        },
        totalCalories: 1700,
      },
    ],
  },
};

type Meal = {
  name: string;
  calories: number;
};

type DayData = {
  day: string;
  date: string;
  meals: {
    breakfast: Meal;
    lunch: Meal;
    dinner: Meal;
    snacks: Meal;
  };
  totalCalories: number;
};

export default function MealPlan() {
  const [view, setView] = useState('weekly'); // weekly or monthly
  const [currentDate, setCurrentDate] = useState(new Date());
  const { healthGoal, name } = useSelector((state: RootState) => state.profile);

  const goalMessages = {
    lose: `Here is a suggested meal plan to help you with your weight loss goal, ${name}. It focuses on nutrient-dense, lower-calorie foods.`,
    maintain: `This plan is designed to help you maintain your current weight, ${name}. It provides a balanced intake of all macronutrients.`,
    gain: `To support your weight gain goal, ${name}, this plan includes higher-calorie meals and sufficient protein for muscle growth.`,
  };

  // --- WEEKLY LOGIC ---
  const currentWeek = getWeek(currentDate, { weekStartsOn: 1 });
  const weekData = weeklyMealPlan[currentWeek] || weeklyMealPlan['25']; // Fallback to week 25
  const startOfCurrentWeek = startOfWeek(currentDate, { weekStartsOn: 1 });
  const endOfCurrentWeek = add(startOfCurrentWeek, { days: 6 });

  // --- MONTHLY LOGIC ---
  const firstDayOfMonth = startOfMonth(currentDate);
  const lastDayOfMonth = endOfMonth(currentDate);
  const daysInMonth = eachDayOfInterval({ start: firstDayOfMonth, end: lastDayOfMonth });
  const startingDayIndex = getDay(firstDayOfMonth) === 0 ? 6 : getDay(firstDayOfMonth) - 1; // Adjust for Monday start

  const handlePrevious = () => {
    if (view === 'weekly') {
      setCurrentDate(sub(currentDate, { weeks: 1 }));
    } else {
      setCurrentDate(sub(currentDate, { months: 1 }));
    }
  };

  const handleNext = () => {
    if (view === 'weekly') {
      setCurrentDate(add(currentDate, { weeks: 1 }));
    } else {
      setCurrentDate(add(currentDate, { months: 1 }));
    }
  };

  const MealCard = ({ mealType, meal }: { mealType: string; meal: Meal }) => (
    <div className="p-3 bg-gray-50/50 rounded-lg flex justify-between items-center transition-all hover:bg-gray-100/80">
      <div>
        <p className="font-semibold text-gray-700 capitalize">{mealType}</p>
        <p className="text-sm text-gray-500">{meal.name}</p>
      </div>
      <p className="font-bold text-green-700">
        {meal.calories} <span className="text-xs font-normal text-gray-400">kcal</span>
      </p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-emerald-50 p-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-200/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-200/20 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <Card className="bg-white/80 backdrop-blur-sm border-white/40 shadow-xl mb-6">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v11.494m-9-5.747h18"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 21.75c-5.385 0-9.75-4.365-9.75-9.75S6.615 2.25 12 2.25s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z"
                  ></path>
                </svg>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Your Meal Plan</h1>
                <p className="text-gray-600">Customized meals to help you reach your health goals.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Suggestion Card */}
        <Card className="bg-green-50/80 border-green-200 shadow-lg mb-6 p-5">
          <div className="flex items-start gap-4">
            <div className="text-green-600 mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <p className="text-green-800">{goalMessages[healthGoal]}</p>
          </div>
        </Card>

        {/* Controls */}
        <Card className="bg-white/80 backdrop-blur-sm border-white/40 shadow-xl mb-6 p-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* View Toggles */}
            <div className="p-1 bg-gray-200/80 rounded-lg flex items-center">
              <Button
                onClick={() => setView('weekly')}
                variant={view === 'weekly' ? 'default' : 'ghost'}
                className="rounded-md"
              >
                Weekly
              </Button>
              <Button
                onClick={() => setView('monthly')}
                variant={view === 'monthly' ? 'default' : 'ghost'}
                className="rounded-md"
              >
                Monthly
              </Button>
              <Button
                onClick={() => setView('custom')}
                variant={view === 'custom' ? 'default' : 'ghost'}
                className="rounded-md"
              >
                Custom
              </Button>
            </div>

            {/* Date Navigation */}
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" onClick={handlePrevious}>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </Button>
              <span className="font-semibold text-gray-700 text-center w-48">
                {view === 'weekly'
                  ? `${format(startOfCurrentWeek, 'MMM d')} - ${format(endOfCurrentWeek, 'MMM d, yyyy')}`
                  : format(currentDate, 'MMMM yyyy')}
              </span>
              <Button variant="outline" size="icon" onClick={handleNext}>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Button>
            </div>
          </div>
        </Card>

        {/* Weekly View */}
        {view === 'weekly' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {weekData.days.map((dayData: DayData, index) => (
              <Card
                key={index}
                className="bg-white/80 backdrop-blur-sm border-white/40 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader className="bg-gray-50/50 rounded-t-lg p-4">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg font-bold text-gray-800">{dayData.day}</CardTitle>
                    <span className="font-mono text-sm text-gray-500">{dayData.date}</span>
                    <span className="text-sm font-semibold text-green-800 bg-green-100/80 px-2 py-1 rounded-full">
                      {dayData.totalCalories} kcal
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="p-4 space-y-3">
                  <MealCard mealType="breakfast" meal={dayData.meals.breakfast} />
                  <MealCard mealType="lunch" meal={dayData.meals.lunch} />
                  <MealCard mealType="dinner" meal={dayData.meals.dinner} />
                  <MealCard mealType="snacks" meal={dayData.meals.snacks} />
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Monthly View */}
        {view === 'monthly' && (
          <Card className="bg-white/80 backdrop-blur-sm border-white/40 shadow-xl p-4">
            <div className="grid grid-cols-7 text-center font-bold text-gray-600 mb-2">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                <div key={day}>{day}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: startingDayIndex }).map((_, index) => (
                <div key={`empty-${index}`} className="border rounded-lg bg-gray-50/60 h-28"></div>
              ))}
              {daysInMonth.map((day, index) => {
                const dayPlan = weekData.days.find((d) => parseInt(d.date) === day.getDate());
                const isToday = format(day, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd');

                if (!dayPlan) {
                  return (
                    <div
                      key={index}
                      className={cn(
                        'border rounded-lg p-2 h-28 flex flex-col',
                        isToday ? 'bg-green-100/80 border-green-300' : 'bg-white/70'
                      )}
                    >
                      <span className={cn('font-semibold', isToday ? 'text-green-800' : 'text-gray-700')}>
                        {format(day, 'd')}
                      </span>
                    </div>
                  );
                }

                return (
                  <HoverCard key={index}>
                    <HoverCardTrigger asChild>
                      <div
                        className={cn(
                          'border rounded-lg p-2 h-28 flex flex-col cursor-pointer',
                          isToday ? 'bg-green-100/80 border-green-300' : 'bg-white/70 hover:bg-gray-50'
                        )}
                      >
                        <span className={cn('font-semibold', isToday ? 'text-green-800' : 'text-gray-700')}>
                          {format(day, 'd')}
                        </span>
                        <div className="mt-2 text-xs text-center p-1 rounded-md bg-green-100 text-green-800 font-semibold">
                          {dayPlan.totalCalories} kcal
                        </div>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="space-y-3">
                        <h4 className="font-bold text-center mb-2">{format(day, 'eeee, MMMM d')}</h4>
                        <MealCard mealType="breakfast" meal={dayPlan.meals.breakfast} />
                        <MealCard mealType="lunch" meal={dayPlan.meals.lunch} />
                        <MealCard mealType="dinner" meal={dayPlan.meals.dinner} />
                        <MealCard mealType="snacks" meal={dayPlan.meals.snacks} />
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                );
              })}
            </div>
          </Card>
        )}

        {/* Custom View */}
        {view === 'custom' && (
          <Card className="bg-white/80 backdrop-blur-sm border-white/40 shadow-xl p-4">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Custom Meal Plan</h1>
            <div>Content Here</div>
          </Card>
        )}
      </div>
    </div>
  );
}
