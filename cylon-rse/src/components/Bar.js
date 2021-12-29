import './Bar.css';
import { useSelector, useDispatch } from 'react-redux';
import logo from '../assets/logo.png';
import menu from '../assets/menu.png';

const Bar = () => {

  const state = useSelector(state => state.main)
  const dispatch = useDispatch()

  return (
    <div className = "bar_background">
      <div className = {state.menuOpen ? "bar_menu_open" : "bar"}>
        <img className = "bar_menu" alt = "Menu Icon" src = {menu} onClick = {() => dispatch({type: 'main/toggleMenu'})}/>

        <div className = "bar_welcome">
          Bienvenido al proyecto de RSE 2021-2022
        </div>

        <div className = "bar_title">
          Cylon para RSE
        </div>
        
        <img className = "bar_logo" alt = "Logo Icon" src = {logo}/>
      </div>
    </div>
  );
}

export default Bar;