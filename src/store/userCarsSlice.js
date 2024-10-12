import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userCars: null
};

const userCarsSlice = createSlice({
    name: 'userCars',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.userCars = action.payload.userCars;
        },
        clearCredentials: (state) => {
            state.userCars = null;
        },
    },
});

export const { setCredentials, clearCredentials } = userCarsSlice.actions;
export default userCarsSlice.reducer;
