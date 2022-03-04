import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import PlayerCard from "./components/PlayerCard";
import MapRotation from "./components/MapRotation";
import ServerStatus from "./components/ServerStatus";

import "./styles.css";
 
const App = () => {
    const [playerData, setPlayerData] = useState([]);
    const [mapData, setMapData] = useState([]);
    const [serverData, setServerData] = useState([]);
    const [userName, setUserName] = useState("heyimlifeline");
    const [platform, setPlatform] = useState("PS4");
    const [showStats, setShowStats] = useState(false);
    // const [showErrorBox, setShowErrorBox] = useState(false); error handler state

    const key = process.env.REACT_APP_APEX;

    useEffect(() => {
        queryData();
    }, [userName]);

    const queryData = async () => {

        await axios.get(`https://api.mozambiquehe.re/bridge?version=5&platform=${platform}&player=${userName}&auth=${key}`)
            .then(res => {

                let data = res.data;
                setPlayerData(data);

                if (data.global.name === "") return false;
            }, reason => {
                console.error(reason);
            })

        await axios.get(`https://api.mozambiquehe.re/maprotation?version=2&auth=${key}`)
            .then(res => {

                let data = res.data;
                setMapData(data);

            }, reason => {
                console.error(reason);
                window.location.reload();

            })

        await axios.get(`https://api.mozambiquehe.re/servers?auth=${key}`)
            .then(res => {

                let data = res.data;
                setServerData(data);
                console.log(serverData);
            })
    }

    const EditUserName = (event) => {

        if (event.key === "Enter") {

            setUserName(event.target.value);

            console.log(userName);
            console.log(platform);

            setShowStats(true);
        }
    }

    return (
        <div className = "home-container">
            <h1> Apex Tracker </h1>
            <h3> Search for a player </h3>
            <select onChange = {event => {
                if (event.target.value === "PlayStation") {
                    setPlatform("PS4");
                
                } else if (event.target.value === "Xbox") {
                    setPlatform("X1");
                
                } else if (event.target.value === "PC") {
                    setPlatform("PC");
                }

                }}>
                <option> PlayStation </option>
                <option> Xbox </option>
                <option> PC </option>
            </select>
            <input type = "text" id = "username-input" placeholder = "Search here" onKeyPress = {event => {EditUserName(event)}}/>

            <div className = "player-card">{showStats ? <PlayerCard data = {playerData}/> : null}</div>
            <div className = "map-rotations">{mapData.hasOwnProperty("arenas") && <MapRotation data = {mapData}/>}</div>
            <div className = "server-status"> <ServerStatus data = {serverData}/> </div>
        </div>
    )
}

export default App;