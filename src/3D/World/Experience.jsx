//Models
import Login from './Scenes/Login/Login'
import {Room} from './Scenes/Room/Room'
import { Minigame1 } from './Scenes/Word_Minigame/Minigame1'
import {Lights} from './Staging/Lights'
import { useGame } from '../../Context/GameContext'
//Libraries


const Experience = () => {
  const { getActualContent, nextContent, nextScene } = useGame();

  const getScenario = () => {
    const { is3D, content } = getActualContent()
    console.log(content)
    if (is3D) {
      switch (content) {
        case "room":
          return (<Room/>);
          break;
        case "Minijuego-guion":
          // return (<Room/>); // this have to change
          return (<Minigame1/>);
          break;
        default:
          return (<Login/>);
          break;
      }
    }
    return (<Minigame1/>);
  }
  return (
  <>
    {getScenario()}
  </>
  )
}

export default Experience