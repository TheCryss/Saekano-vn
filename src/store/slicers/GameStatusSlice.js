import { createSlice } from "@reduxjs/toolkit";
import data from '../../script/scene_1.json'

const scenes = data.scenes

const initialState = {
    finishedScript: false,
    finishedScene: false,
    actualSceneIndex: 0,
    finishedContent: false,
    actualContentIndex: 0,
    scenario: 0,
    dev: false,
}

export const gameStatusSlice = createSlice({
    name: "gameStatus",
    initialState,
    reducers: {
        nextScene: (state) => {
            if (!state.scriptFinished) {
                state.finishedScene = false;
                const nextScene = state.actualSceneIndex + 1
                console.log(scenes[nextScene])

                if (!(scenes[nextScene] == undefined)) {
                    state.actualSceneIndex = nextScene
                    state.actualContentIndex = 0
                } else state.finishedScript = true
            }
        },

        nextContent: (state) => {
            if (!state.scriptFinished) {
                if (!state.finishedScene) {
                    const nextContent = state.actualContentIndex + 1;

                    if (!(scenes[state.actualSceneIndex].content[nextContent] == undefined)) {
                        state.actualContentIndex = nextContent
                    } else state.finishedScene = true
                }
            }
        },

        setDev: (state, action) => {
            state.dev = action.payload
        }
    }
})

export const { nextScene, nextContent, setDev } = gameStatusSlice.actions
export default gameStatusSlice.reducer
