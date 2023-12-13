import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    room: {
        utahaInteraction: false,
        eririInteraction: false,
        megumiInteraction: false,
        tomoyaInteraction: false,
        watermelonInteraction: false,
    },
    objectsColliders: {
      hookCollider: false,
      paint_paletteCollider: false,
      pencilCollider: false
    },
    deliveredObjects: {
      hookDelivered: false,
      paint_paletteDelivered: false,
      pencilDelivered: false
    },
    objects: {
      hook: false,
      paint_palette: false,
      pencil: false
    },
    watermelonCut: false,
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
    setHookDelivered: (state, action) => {
      state.deliveredObjects.hookDelivered = action.payload;
    },
    setPaintPaletteDelivered: (state, action) => {
      state.deliveredObjects.paint_paletteDelivered = action.payload;
    },
    setPencilDelivered: (state, action) => {
      state.deliveredObjects.pencilDelivered = action.payload;
    },
    setWatermelonCut: (state, action) => {
      state.watermelonCut = action.payload;
    },
    setWatermelonInteraction: (state, action) => {
      state.room.watermelonInteraction = action.payload;
    }

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
  setPencil,
  setHookDelivered,
  setPencilDelivered,
  setPaintPaletteDelivered,
  setWatermelonCut,
  setWatermelonInteraction,
} = roomSlice.actions;
export default roomSlice.reducer;
