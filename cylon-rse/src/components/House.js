import React, { useState } from 'react';
import './House.css';
import house from '../assets/house.png';

const House = () => {

  const [apiResponse, setApiResponse] = useState("Esperando respuesta...")
  const [blueLightsOn, setBlueLightsOn] = useState(false)
  const [blueLightsIntensity, setBlueLightsIntensity] = useState(0)
  const [yellowLightsOn, setYellowLightsOn] = useState(false)
  const [yellowLightsIntensity, setYellowLightsIntensity] = useState(0)
  const [multicolorLightOn, setMulticolorLightOn] = useState(false)
  const [buzzerOn, setBuzzerOn] = useState(false)
  const [motorOn, setMotorOn] = useState(false)

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

  const yellowLightsHandler = () => {
    if(!yellowLightsOn) {
      setYellowLightsIntensity(5)
      fetch("http://localhost:9000/cylonRoute/yellowLightsOn")
      .then((res) => res.text())
      .then((res) => setApiResponse(res))
    } else {
      setYellowLightsIntensity(0)
      fetch("http://localhost:9000/cylonRoute/yellowLightsOff")
      .then((res) => res.text())
      .then((res) => setApiResponse(res))
    }
    setYellowLightsOn(!yellowLightsOn)
  }

  const yellowLightsRaiseIntensity = () => {
    setYellowLightsIntensity(yellowLightsIntensity === 9 ? 0 : yellowLightsIntensity + 1)
    fetch("http://localhost:9000/cylonRoute/yellowLightsRaiseIntensity")
    .then((res) => res.text())
    .then((res) => setApiResponse(res))
  }

  const yellowLightsLowerIntensity = () => {
    setYellowLightsIntensity(yellowLightsIntensity === 0 ? 9 : yellowLightsIntensity -1)
    fetch("http://localhost:9000/cylonRoute/yellowLightsLowerIntensity")
    .then((res) => res.text())
    .then((res) => setApiResponse(res))
  }

  const multicolorLightHandler = () => {
    if(!multicolorLightOn) {
      fetch("http://localhost:9000/cylonRoute/multicolorLightOn")
      .then((res) => res.text())
      .then((res) => setApiResponse(res))
    } else {
      fetch("http://localhost:9000/cylonRoute/multicolorLightOff")
      .then((res) => res.text())
      .then((res) => setApiResponse(res))
    }
    setMulticolorLightOn(!multicolorLightOn)
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

  const motorHandler = () => {
    if(!motorOn) {
      fetch("http://localhost:9000/cylonRoute/motorOn")
      .then((res) => res.text())
      .then((res) => setApiResponse(res))
    } else {
      fetch("http://localhost:9000/cylonRoute/motorOff")
      .then((res) => res.text())
      .then((res) => setApiResponse(res))
    }
    setMotorOn(!motorOn)
  }

  return (
    <div className = "house">
      <img className = "house_image" alt = "house Icon" src = {house}/>

      <div className = {blueLightsOn ? "button_1_on" : "button_1_off"} onClick = {() => blueLightsHandler()}>
        <div className = "button_text"> Luces Azules </div>
      </div>
      {blueLightsOn && <div className = "button_1_intensity"> 
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

      <div className = {yellowLightsOn ? "button_2_on" : "button_2_off"} onClick = {() => yellowLightsHandler()}>
        <div className = "button_text"> Luces Amarillas </div>
      </div>
      {yellowLightsOn && <div className = "button_2_intensity"> 
        <div className = "button_intensity_left" onClick = {() => yellowLightsLowerIntensity()}>
          <div className = "lights_intensity_text_2"> - </div>
        </div>
        <div className = "button_intensity_middle"> 
          <div className = "lights_intensity_text"> {yellowLightsIntensity} </div>
        </div>
        <div className = "button_intensity_right" onClick = {() => yellowLightsRaiseIntensity()}> 
          <div className = "lights_intensity_text_2"> + </div>
        </div>
      </div>}

      <div className = {multicolorLightOn ? "button_3_on" : "button_3_off"} onClick = {() => multicolorLightHandler()}>
        <div className = "button_text"> Luz multicolor </div>
      </div>

      <div className = {buzzerOn ? "button_4_on" : "button_4_off"} onClick = {() => buzzerHandler()}>
        <div className = "button_text"> Música </div>
      </div>

      <div className = {motorOn ? "button_5_on" : "button_5_off"} onClick = {() => motorHandler()}>
        <div className = "button_text"> Motor </div>
      </div>

      <div className = "response"> {apiResponse} </div>
    </div>
  );
}

export default House;