import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import userCarsReducer from './userCarsSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        userCars: userCarsReducer,
    },
});

export default store;
