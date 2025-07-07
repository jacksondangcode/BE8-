import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type HealthGoal = 'lose' | 'maintain' | 'gain';

interface ProfileState {
  name: string;
  email: string;
  age: string;
  weight: string;
  height: string;
  phone: string;
  healthGoal: HealthGoal;
}

const initialState: ProfileState = {
  name: 'John Doe',
  email: 'john@example.com',
  age: '25',
  weight: '70',
  height: '170',
  phone: '',
  healthGoal: 'maintain',
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setAge: (state, action: PayloadAction<string>) => {
      state.age = action.payload;
    },
    setWeight: (state, action: PayloadAction<string>) => {
      state.weight = action.payload;
    },
    setHeight: (state, action: PayloadAction<string>) => {
      state.height = action.payload;
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setHealthGoal: (state, action: PayloadAction<HealthGoal>) => {
      state.healthGoal = action.payload;
    },
  },
});

export const {
  setName,
  setEmail,
  setAge,
  setWeight,
  setHeight,
  setPhone,
  setHealthGoal,
} = profileSlice.actions;

export default profileSlice.reducer; 