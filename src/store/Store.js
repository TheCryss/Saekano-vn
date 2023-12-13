import { configureStore } from '@reduxjs/toolkit';
import roomReducer from './slicers/RoomSlicers';
import gameStatusReducer from './slicers/GameStatusSlice';
import minigame1Reducer from './slicers/Minigame1Slice';


export const store = configureStore({
    reducer: {
        room: roomReducer,
        minigame1: minigame1Reducer,
        gameStatus: gameStatusReducer
    }
});