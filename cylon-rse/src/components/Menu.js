import './Menu.css';
import { useDispatch } from 'react-redux';
import house from '../assets/house.png';
import team from '../assets/team.png';

const Menu = () => {

  const dispatch = useDispatch()

  return (
    <div className = "menu">
      <div className = "menu_row" onClick={() => dispatch({type: 'main/updateScreen', payload: 'house'})}>
        <img className = "menu_row_icon" alt = "House Icon" src = {house}/>

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