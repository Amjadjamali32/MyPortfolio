import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../app/features/themeSlice.js';

export const store = configureStore({
    reducer: {
        theme: themeReducer, 
    },
});
