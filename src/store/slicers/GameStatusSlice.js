import { createSlice } from '@reduxjs/toolkit'
import script_1 from '../../script/scene_1.json'
import script_2 from '../../script/scene_2.json'
import script_3 from '../../script/scene_3.json'
import script_4 from '../../script/scene_4.json'
import script_5 from '../../script/scene_5.json'


const scripts = [script_1, script_2, script_3, script_4, script_5]

const getScriptScenes = (act) => {
    if (1 <= act && act <= scripts.length) {
        return scripts[act - 1].scenes
    }
}

// const initialState = {
//     actualScriptScenes: getScriptScenes(2),
//     act: 2,
//     actualContent: { is3D: false },
//     is3D: false,
//     isBifurcation: false,
//     bifurcation: 1,
//     finishedScript: false,
//     finishedScene: false,
//     finishedContent: false,
//     actualSceneIndex: 0,
//     actualContentIndex: 0,
//     scenario: '',
//     playerBifurcations: [0, 0, 0],
//     npcInteractions: [0, 0, 0, 0], // Utaha, Eriri, Megumi, Tomoya
// }

const initialState = {
    actualScriptScenes: getScriptScenes(1),
    act: 1,
    actualContent: { is3D: false },
    is3D: false,
    isBifurcation: false,
    bifurcation: 1,
    finishedScript: false,
    finishedScene: false,
    finishedContent: false,
    actualSceneIndex: 0,
    actualContentIndex: 0,
    close3DPanel: false,
    scenario: '',
    npcInteractionsFinished: false,
    playerBifurcations: [0, 0, 0, 0, 0, 50],
    npcInteractions: [0, 0, 0, 0], // Utaha, Eriri, Megumi, Tomoya
    npcMaxInteractions: [0, 0, 0, 0], // Utaha, Eriri, Megumi, Tomoya
}

export const gameStatusSlice = createSlice({
    name: 'gameStatus',
    initialState,
    reducers: {
        nextScene: (state) => {
            if (!state.scriptFinished) {
                state.finishedScene = false
                const nextScene = state.actualSceneIndex + 1

                if (!(state.actualScriptScenes[nextScene] == undefined)) {
                    state.actualSceneIndex = nextScene
                    state.actualContentIndex = 0

                    if (state.isBifurcation) {
                        state.isBifurcation = false
                        state.bifurcation = state.bifurcation + 1
                    }

                } else {
                    state.finishedScript = true
                    state.act = state.act + 1
                    state.actualSceneIndex = 0
                    state.actualContentIndex = 0
                }
            }
        },

        nextContent: (state) => {
            if (!state.scriptFinished) {
                if (!state.finishedScene) {
                    const nextContent = state.actualContentIndex + 1

                    if (state.isBifurcation) {
                        const playerChoice = state.playerBifurcations[state.bifurcation - 1]

                        if (state.actualScriptScenes[state.actualSceneIndex].content[playerChoice][nextContent]) state.actualContentIndex = nextContent
                        else state.finishedScene = true
                    } else {
                        if (state.actualScriptScenes[state.actualSceneIndex].content[nextContent]) state.actualContentIndex = nextContent
                        else state.finishedScene = true
                    }
                }
            }
        },

        setDev: (state, action) => {
            state.dev = action.payload
        },

        setScenario: (state, action) => {
            state.scenario = action.payload
        },

        setIs3D:(state, action) => {
            state.is3D = action.payload
        },

        setAct:(state, action) => {
            state.act = action.payload
            state.getScriptScenes = getScriptScenes(state.act)
        },

        is3D:(state) =>{
            return state.is3D
        },

        updateActualContent: (state) => {
            state.actualScriptScenes = getScriptScenes(state.act)

            if ('bifurcation' in state.actualScriptScenes[state.actualSceneIndex]) {
                const playerChoice = state.playerBifurcations[state.bifurcation - 1]

                state.isBifurcation = true
                state.actualContent = state.actualScriptScenes[state.actualSceneIndex].content[playerChoice][state.actualContentIndex]

                if ('npc_max_interactions' in state.actualScriptScenes[state.actualSceneIndex]) {
                    state.npcMaxInteractions = state.actualScriptScenes[state.actualSceneIndex].npc_max_interactions[playerChoice]
                }
            } else {
                state.isBifurcation = false
                state.actualContent = state.actualScriptScenes[state.actualSceneIndex].content[state.actualContentIndex]

                if ('npc_max_interactions' in state.actualScriptScenes[state.actualSceneIndex]) {
                    state.npcMaxInteractions = state.actualScriptScenes[state.actualSceneIndex].npc_max_interactions
                }
            }
        },

        setActualSceneIndex: (state, action) => {
            state.actualSceneIndex = action.payload
        },

        setActualContentIndex: (state, action) => {
            state.actualContentIndex = action.payload
        },

        setPlayerBifurcation: (state, action) => {
            const { bifurcationNumber, bifurcationOption } = action.payload

            state.playerBifurcations[bifurcationNumber] = bifurcationOption
        },

        setStatus: (state, action) => {
            const { act, is3D, isBifurcation, actualSceneIndex, bifurcation, playerBifurcations } = action.payload

            state.act = act
            state.is3D = is3D
            state.isBifurcation = isBifurcation
            state.actualSceneIndex = actualSceneIndex
            state.bifurcation = bifurcation
            state.playerBifurcations = playerBifurcations
        },

        increaseNPCInteraction: (state, action) => {
            state.npcInteractions[action.payload] = state.npcInteractions[action.payload] + 1
        },

        resetNpcInteractions: (state) => {
            state.npcInteractions = [0, 0, 0, 0]
        },
        setFinishedScript: (state,action) => {
            state.finishedScript = action.payload
        },
        setFinishedScene: (state,action) => {
            state.finishedScene = action.payload
        },
        setNpcInteractionsFinished: (state,action) => {
            state.npcInteractionsFinished = action.payload
        },
    }
})

export const {
    nextScene,
    nextContent,
    setDev, setScenario,
    setIs3D,
    is3D,
    updateActualContent,
    setAct,
    setActualContentIndex,
    setActualSceneIndex,
    setStatus,
    increaseNPCInteraction,
    setFinishedScene,
    setFinishedScript,
    setPlayerBifurcation,
    setNpcInteractionsFinished,
    resetNpcInteractions,
} = gameStatusSlice.actions

export default gameStatusSlice.reducer
