//Models
import Login from './Scenes/Login/Login'
import {Room} from './Scenes/Room/Room'
import {Lights} from './Staging/Lights'
import { useGame } from '../../context/GameContext'
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
          return (<Room/>); // this have to change
          break;
        default:
          return (<Login/>);
          break;
      }
    }
    return (<Login/>);
  }
  return (
  <>

    {getScenario()}
    
  </>
  )
}

export default Experience