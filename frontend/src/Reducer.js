import { createReducer } from "@reduxjs/toolkit"
const initialState = {};

export const getDataReducer = createReducer(initialState, {
    dataRequest: (state) => { state.loading = true },
    dataSuccess: (state, action) => {
        state.loading = false;
        state.data = action.payload;
    },
    dataFailure: (state) => { state.loading = false },
    clearError: (state) => { state.error = null }
});