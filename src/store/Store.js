import { configureStore } from "@reduxjs/toolkit";
import roomReducer from "./slicers/RoomSlicers";
import gameStatusReducer from "./slicers/GameStatusSlice";


export const store = configureStore({
    reducer: {
        room: roomReducer,
        gameStatus: gameStatusReducer
    }
});