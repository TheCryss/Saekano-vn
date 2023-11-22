import { configureStore } from "@reduxjs/toolkit";
import roomReducer from "./slicers/RoomSlicers";


export const store = configureStore({
    reducer: {
        room: roomReducer,
    }
});