import './Menu.css';
import { useDispatch } from 'react-redux';
import robot from '../assets/robot.png';
import team from '../assets/team.png';

const Menu = () => {

  const dispatch = useDispatch()

  return (
    <div className = "menu">
      <div className = "menu_row" onClick={() => dispatch({type: 'main/updateScreen', payload: 'robot'})}>
        <img className = "menu_row_icon" alt = "Robot Icon" src = {robot}/>

        <div className = "menu_row_text"> Robot </div>
      </div>

      <div className = "menu_row" onClick={() => dispatch({type: 'main/updateScreen', payload: 'team'})}>
        <img className = "menu_row_icon" alt = "Team Icon" src = {team}/>

        <div className = "menu_row_text"> Equipo </div>
      </div>
    </div>
  );
}

export default Menu;