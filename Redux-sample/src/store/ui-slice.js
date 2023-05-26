import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
    name:'ui',
    initialState: { castIsVisible: false },
    reducers : {
        toggle(state) {
            state.castIsVisible = !state.castIsVisible;
        }
    }
});

export const uiActions = uiSlice.actions;
export default uiSlice;