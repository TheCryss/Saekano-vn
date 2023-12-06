import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    end: false,
    half: false,
    interaction: false,
    winner: null,
};

const minigame1Slice = createSlice({
    name: 'minigame1',
    initialState,
    reducers: {
        setEnd : (state, action) => {
            state.end = action.payload
        },
        setHalf : (state, action) => {
            state.half = action.payload
        },
        setInteraction : (state, action) => {
            state.interaction = action.payload
        },
    },
});

export const { setEnd,setHalf,setInteraction } = minigame1Slice.actions;
export default minigame1Slice.reducer;
