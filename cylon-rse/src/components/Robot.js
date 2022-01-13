import React, { useState } from 'react';
import './Robot.css';
import robot from '../assets/robot.png';

const Robot = () => {

  const [apiResponse, setApiResponse] = useState("Robot esperando órdenes...")
  const [redLightsOn, setRedLightsOn] = useState(false)
  const [redLightsIntensity, setRedLightsIntensity] = useState(0)
  const [blueLightsOn, setBlueLightsOn] = useState(false)
  const [blueLightsIntensity, setBlueLightsIntensity] = useState(0)
  const [buzzerOn, setBuzzerOn] = useState(false)

  const redLightsHandler = () => {
    if(!redLightsOn) {
      setRedLightsIntensity(5)
      fetch("http://localhost:9000/cylonRoute/redLightsOn")
      .then((res) => res.text())
      .then((res) => setApiResponse(res))
    } else {
      setRedLightsIntensity(0)
      fetch("http://localhost:9000/cylonRoute/redLightsOff")
      .then((res) => res.text())
      .then((res) => setApiResponse(res))
    }
    setRedLightsOn(!redLightsOn)
  }

  const redLightsRaiseIntensity = () => {
    setRedLightsIntensity(redLightsIntensity === 9 ? 0 : redLightsIntensity + 1)
    fetch("http://localhost:9000/cylonRoute/redLightsRaiseIntensity")
    .then((res) => res.text())
    .then((res) => setApiResponse(res))
  }

  const redLightsLowerIntensity = () => {
    setRedLightsIntensity(redLightsIntensity === 0 ? 9 : redLightsIntensity -1)
    fetch("http://localhost:9000/cylonRoute/redLightsLowerIntensity")
    .then((res) => res.text())
    .then((res) => setApiResponse(res))
  }

  const blueLightsHandler = () => {
    if(!blueLightsOn) {
      setBlueLightsIntensity(5)
      fetch("http://localhost:9000/cylonRoute/blueLightsOn")
      .then((res) => res.text())
      .then((res) => setApiResponse(res))
    } else {
      setBlueLightsIntensity(0)
      fetch("http://localhost:9000/cylonRoute/blueLightsOff")
      .then((res) => res.text())
      .then((res) => setApiResponse(res))
    }
    setBlueLightsOn(!blueLightsOn)
  }

  const blueLightsRaiseIntensity = () => {
    setBlueLightsIntensity(blueLightsIntensity === 9 ? 0 : blueLightsIntensity + 1)
    fetch("http://localhost:9000/cylonRoute/blueLightsRaiseIntensity")
    .then((res) => res.text())
    .then((res) => setApiResponse(res))
  }

  const blueLightsLowerIntensity = () => {
    setBlueLightsIntensity(blueLightsIntensity === 0 ? 9 : blueLightsIntensity -1)
    fetch("http://localhost:9000/cylonRoute/blueLightsLowerIntensity")
    .then((res) => res.text())
    .then((res) => setApiResponse(res))
  }

  const buzzerHandler = () => {
    if(!buzzerOn) {
      fetch("http://localhost:9000/cylonRoute/buzzerOn")
      .then((res) => res.text())
      .then((res) => setApiResponse(res))
    } else {
      fetch("http://localhost:9000/cylonRoute/buzzerOff")
      .then((res) => res.text())
      .then((res) => setApiResponse(res))
    }
    setBuzzerOn(!buzzerOn)
  }

  const button4Handler = () => {
    fetch("http://localhost:9000/cylonRoute/motor")
      .then((res) => res.text())
      .then((res) => setApiResponse(res))
  }

  return (
    <div className = "robot">
      <img className = "robot_image" alt = "Robot Icon" src = {robot}/>

      <div className = {redLightsOn ? "button_1_on" : "button_1_off"} onClick = {() => redLightsHandler()}>
        <div className = "button_text"> Luces Rojas </div>
      </div>
      {redLightsOn && <div className = "button_1_intensity"> 
        <div className = "button_intensity_left" onClick = {() => redLightsLowerIntensity()}>
          <div className = "lights_intensity_text_2"> - </div>
        </div>
        <div className = "button_intensity_middle"> 
          <div className = "lights_intensity_text"> {redLightsIntensity} </div>
        </div>
        <div className = "button_intensity_right" onClick = {() => redLightsRaiseIntensity()}> 
          <div className = "lights_intensity_text_2"> + </div>
        </div>
      </div>}

      <div className = {blueLightsOn ? "button_2_on" : "button_2_off"} onClick = {() => blueLightsHandler()}>
        <div className = "button_text"> Luces Azules </div>
      </div>
      {blueLightsOn && <div className = "button_2_intensity"> 
        <div className = "button_intensity_left" onClick = {() => blueLightsLowerIntensity()}>
          <div className = "lights_intensity_text_2"> - </div>
        </div>
        <div className = "button_intensity_middle"> 
          <div className = "lights_intensity_text"> {blueLightsIntensity} </div>
        </div>
        <div className = "button_intensity_right" onClick = {() => blueLightsRaiseIntensity()}> 
          <div className = "lights_intensity_text_2"> + </div>
        </div>
      </div>}

      <div className = {buzzerOn ? "button_3_on" : "button_3_off"} onClick = {() => buzzerHandler()}>
        <div className = "button_text"> Música </div>
      </div>

      <div className = {false ? "button_4_on" : "button_4_off"}onClick = {() => button4Handler()}>
        <div className = "button_text"> Motor </div>
      </div>

      <div className = "response"> {apiResponse} </div>
    </div>
  );
}

export default Robot;