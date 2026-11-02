import {configureStore} from '@reduxjs/toolkit';
import CounterReducer from '../features/Counter/CounterSlice'
import userReducer from '../features/User/userSlice'

export const store = configureStore({
    reducer: {
        Counter : CounterReducer,
        user : userReducer
    }
})