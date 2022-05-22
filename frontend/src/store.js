import { configureStore } from '@reduxjs/toolkit'
import { getDataReducer } from './Reducer'

export const store = configureStore({
    reducer: {
        apiData: getDataReducer
    }
})