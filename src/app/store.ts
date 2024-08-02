import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../slices/userSlice';

const store = configureStore({
    reducer: {
        users: userSlice,
    },
});

export type AppStore = typeof store;

export type RootState = ReturnType<AppStore['getState']>;

export default store;
