import { createSlice } from "@reduxjs/toolkit";
import data1 from '../../script/scene_1.json';
import data2 from '../../script/scene_2.json';

const getScenes = (acto) => {
    switch(acto) {
        case 1:
            return data1.scenes;
        case 2:
            return data2.scenes;
        // Add more cases as needed
        default:
            return [];
    }
}
// const scenes = data.scenes

const initialState = {
    finishedScript: false,
    finishedScene: false,
    actualSceneIndex: 0,
    finishedContent: false,
    actualContentIndex: 0,
    scenario: "",
    acto:1,
    is3D: false,
    scenes: getScenes(1),
    actualContent: {is3D:false},
}

export const gameStatusSlice = createSlice({
    name: "gameStatus",
    initialState,
    reducers: {
        nextScene: (state) => {
            if (!state.scriptFinished) {
                state.finishedScene = false;
                const nextScene = state.actualSceneIndex + 1
                console.log(state.scenes[nextScene])

                if (!(state.scenes[nextScene] == undefined)) {
                    state.actualSceneIndex = nextScene
                    state.actualContentIndex = 0
                } else {
                    state.finishedScript = true
                    state.acto = state.acto + 1
                    state.scenes = getScenes(state.acto);
                    state.actualSceneIndex = 0
                    state.actualContentIndex = 0
                }
            }
        },

        nextContent: (state) => {
            if (!state.scriptFinished) {
                if (!state.finishedScene) {
                    const nextContent = state.actualContentIndex + 1;

                    if (!(state.scenes[state.actualSceneIndex].content[nextContent] == undefined)) {
                        state.actualContentIndex = nextContent
                    } else state.finishedScene = true
                }
            }
        },

        setDev: (state, action) => {
            state.dev = action.payload
        },
        setScenario: (state, action) => {
            state.scenario = action.payload
        },
        setIs3D:(state,action) =>{
            state.is3D = action.payload
        },
        setActo:(state,action) =>{
            state.acto = action.payload;
            state.scenes = getScenes(state.acto);
        },
        is3D:(state) =>{
            return state.is3D
        }        ,
        setActualContent: (state) => {
            if (!state.is3D) {
                state.actualContent = state.scenes[state.actualSceneIndex].content[state.actualContentIndex]
            } else{
                state.actualContent = state.scenes[state.actualSceneIndex].scenario
            }
        },
        setActualSceneIndex: (state, action) => {
            state.actualSceneIndex = action.payload
        },
        setActualContentIndex: (state, action) => {
            state.actualContentIndex = action.payload
        },  

    }
})

export const { nextScene, nextContent, setDev,setScenario,setIs3D, is3D ,setActualContent,setActo, setActualContentIndex, setActualSceneIndex } = gameStatusSlice.actions
export default gameStatusSlice.reducer
