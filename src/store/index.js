import { configureStore } from '@reduxjs/toolkit';
import reducers from '../reducers'

const store = configureStore({
    reducer: {reducers},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;
