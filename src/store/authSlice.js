import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userId: null,
    accessToken: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.userId = action.payload.userId;
            state.accessToken = action.payload.accessToken;
        },
        clearCredentials: (state) => {
            state.userId = null;
            state.accessToken = null;
        },
    },
});

export const { setCredentials, clearCredentials } = authSlice.actions;
export default authSlice.reducer;
