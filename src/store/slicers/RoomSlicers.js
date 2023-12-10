import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    room: {
        utahaInteraction: false,
        eririInteraction: false,
        megumiInteraction: false,
        tomoyaInteraction: false,
    },
    objectsColliders: {
      hookCollider: false,
      paint_paletteCollider: false,
      pencilCollider: false
    },
    objects: {
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
    setHookCollider: (state, action) => {
      state.objectsColliders.hookCollider = action.payload;
    },
    setPaintPaletteCollider: (state, action) => {
      state.objectsColliders.paint_paletteCollider = action.payload;
    },
    setPencilCollider: (state, action) => {
      state.objectsColliders.pencilCollider = action.payload;
    },
    setHook: (state, action) => {
      state.objects.hook = action.payload;
    },
    setPaintPalette: (state, action) => {
      state.objects.paint_palette = action.payload;
    },
    setPencil: (state, action) => {
      state.objects.pencil = action.payload;
    },
  },
});

export const { 
  setUtahaInteraction, 
  setEririInteraction, 
  setMegumiInteraction, 
  setTomoyaInteraction, 
  setInteraction, 
  setPaintPaletteCollider,
  setPaintPalette,
  setHookCollider,
  setHook,
  setPencilCollider, 
  setPencil } = roomSlice.actions;
export default roomSlice.reducer;
