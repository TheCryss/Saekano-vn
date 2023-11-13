import { createContext, useContext, useEffect, useState } from "react";
import data from '../script/scene_1.json'

export const gameContext = createContext();

export const useGame = () => {
    const context = useContext(gameContext);
    if (!context) {
        console.log("Error creating game context");
    }
    return context;
}

export function GameProvider({ children }) {
    const scenes = data.scenes;
    const [gameState, setGameState] = useState({
        actualScene: 0,
        actualContentIndex: 0,
        scenario: 0,
        // Here you can add more game states
    });

    // This useEffect is for initialize the game state
    // with the state of the user in db
    // useEffect(() => {}, []);

    const nextScene = () => {
        const nextScene = gameState.actualScene + 1;

        if (scenes[nextScene] == undefined) {
            return { success: false, error: "No more scenes" }
        };

        setGameState({ ...gameState, actualScene: nextScene, actualContentIndex: 0 });
        return { success: true, scene: nextScene };

    }

    const nextContent = () => {
        const nextContent = gameState.actualContentIndex + 1;
        if (scenes[gameState.actualScene].content[nextContent] == undefined) {
            return { success: false, error: "No more contents" }
        }
        setGameState({ ...gameState, actualContentIndex: nextContent });
        return { success: true, content: nextContent };
    }

    const getActualContent = () => {
        const { actualScene, actualContentIndex } = gameState;
        if (scenes[actualScene]["3d"]) {
            return { is3D: true, content: scenes[actualScene].scenario};
        }
        return { is3D: false, content: scenes[actualScene].content[actualContentIndex] };
    }

    return (
        <gameContext.Provider value={{ getActualContent, nextScene, nextContent }}>
            {children}
        </gameContext.Provider>
    );
}