//Models
import Login from './Scenes/Login/Login'
import {Room} from './Scenes/Room/Room'
import {Lights} from './Staging/Lights'
import { useGame } from '../../context/GameContext'
//Libraries


const Experience = () => {
  const { getActualContent, nextContent, nextScene, getScenario } = useGame();
  return (
  <>

    {getScenario() == 0 ? <Room></Room> : <Login/>}

  </>
  )
}

export default Experience