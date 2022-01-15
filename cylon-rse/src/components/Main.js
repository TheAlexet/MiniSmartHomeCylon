import './Main.css';
import { useSelector } from 'react-redux';
import Menu from './Menu.js'
import House from './House';
import Team from './Team';

const Main = () => {

  const state = useSelector(state => state.main)

  return (
    <div className = "main_background">
      <div className = "main_background_2">
        <div className = "main">
          {state.screen === "house" && <House/>}
          {state.screen === "team" && <Team/>}
        </div>
      </div>

      {state.menuOpen && <Menu/>}
    </div>
  );
}

export default Main;