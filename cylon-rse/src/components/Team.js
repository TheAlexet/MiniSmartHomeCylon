import './Team.css';
import robot from '../assets/robot.png';

const Team = () => {
  return (
    <div className = "team">
      <img className = "robot_image_left" alt = "Robot Icon" src = {robot}/>

      <div className = "team_group_background">
        <div className = "team_group">
          <div className = "team_text"> Trabajo realizado por: </div>
          <div className = "team_text"> Alejandro Vicent Micó </div>
          <div className = "team_text"> Jose Francisco Gómez Alemany </div>
          <div className = "team_text"> Marc Garcia Ferrer </div>
        </div>  
      </div>

      <img className = "robot_image_right" alt = "Robot Icon" src = {robot}/>  
    </div>
  );
}

export default Team;