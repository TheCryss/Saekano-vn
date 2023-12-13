import { useEffect, useState } from 'react'

const ACTIONS_KEYBOARD_MAP = {
    Enter: 'continueKey',
    ArrowUp: 'up',
    ArrowDown: 'down'
}

export const useKeyboard = () => {
    const [actionsGame, setActionsGame] = useState({
        continue: false,
        up: false,
        down: false
    })

    useEffect(() => {
        const handleKeyDown = event => {
            const { code } = event
            const action = ACTIONS_KEYBOARD_MAP[code]

            if (action) {
                // if (actionsGame[action]) return

                setActionsGame(prevActions => ({
                    ...prevActions,
                    [action]: true
                }))
            }
        }

        const handleKeyUp = event => {
            const { code } = event
            const action = ACTIONS_KEYBOARD_MAP[code]

            if (action) {
                // if (!actionsGame[action]) return

                setActionsGame(prevActions => ({
                    ...prevActions,
                    [action]: false
                }))
            }
        }

        document.addEventListener('keydown', handleKeyDown)
        document.addEventListener('keyup', handleKeyUp)

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.removeEventListener('keyup', handleKeyUp)
        }
    }, [])

    return actionsGame
}