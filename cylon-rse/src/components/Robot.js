import React, { useState } from 'react';
import './Robot.css';
import robot from '../assets/robot.png';

const Robot = () => {

  const [apiResponse, setApiResponse] = useState("Robot esperando órdenes...")

  const button1Handler = () => {
    fetch("http://localhost:9000/cylonRoute/redLed")
      .then((res) => res.text())
      .then((res) => setApiResponse(res))
  }

  const button2Handler = () => {
    fetch("http://localhost:9000/cylonRoute/blueLed")
      .then((res) => res.text())
      .then((res) => setApiResponse(res))
  }

  const button3Handler = () => {
    fetch("http://localhost:9000/cylonRoute/greenLed")
      .then((res) => res.text())
      .then((res) => setApiResponse(res))
  }

  const button4Handler = () => {
    fetch("http://localhost:9000/cylonRoute/motor")
      .then((res) => res.text())
      .then((res) => setApiResponse(res))
  }

  return (
    <div className = "robot">
      <img className = "robot_image" alt = "Robot Icon" src = {robot}/>

      <div className = "robot_button_1" onClick = {() => button1Handler()}>
        <div className = "robot_button_text"> LED Roja </div>
      </div>

      <div className = "robot_button_2" onClick = {() => button2Handler()}>
        <div className = "robot_button_text"> LED Azul </div>
      </div>

      <div className = "robot_button_3" onClick = {() => button3Handler()}>
        <div className = "robot_button_text"> LED Verde </div>
      </div>

      <div className = "robot_button_4" onClick = {() => button4Handler()}>
        <div className = "robot_button_text"> Motor </div>
      </div>

      <div className = "robot_response"> {apiResponse} </div>
    </div>
  );
}

export default Robot;