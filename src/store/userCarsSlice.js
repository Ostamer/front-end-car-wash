<<<<<<< HEAD
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
=======
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
>>>>>>> 4cc566cdd9ac3d76d4ead5bf60aaf41a3a742873
