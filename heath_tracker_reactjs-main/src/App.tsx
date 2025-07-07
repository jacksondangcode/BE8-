import { Route, Routes, Navigate } from 'react-router';
import MainLayout from './components/shared/MainLayout';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';
import MealPlan from './pages/MealPlan';

function App() {
  return (
    <Routes>
      {/* Routes without Navbar */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Routes with Navbar */}
      <Route element={<MainLayout />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/meal-plan" element={<MealPlan />} />
      </Route>

      {/* Default route */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
