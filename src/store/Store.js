import { configureStore } from "@reduxjs/toolkit";
import roomReducer from "./slicers/RoomSlicers";
import GameStatusReducer from "./slicers/GameStatusSlice";


export const store = configureStore({
    reducer: {
        room: roomReducer,
        gameStatus: GameStatusReducer
    }
});