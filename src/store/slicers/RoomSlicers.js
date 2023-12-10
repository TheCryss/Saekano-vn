import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    room: {
        utahaInteraction: false,
        eririInteraction: false,
        megumiInteraction: false,
        tomoyaInteraction: false,
    },
    objects:{
      hook: false,
      paint_palette: false,
      pencil: false
    },
    interaction: false,
};

const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    setUtahaInteraction: (state, action) => {
      state.room.utahaInteraction = action.payload;
    },
    setEririInteraction: (state, action) => {
      state.room.eririInteraction = action.payload;
    },
    setMegumiInteraction: (state, action) => {
      state.room.megumiInteraction = action.payload;
    },
    setTomoyaInteraction: (state, action) => {
      state.room.tomoyaInteraction = action.payload;
    },
    setInteraction: (state, action) => {
      state.interaction = action.payload;
    },
  },
});

export const { setUtahaInteraction, setEririInteraction, setMegumiInteraction, setTomoyaInteraction, setInteraction } = roomSlice.actions;
export default roomSlice.reducer;
