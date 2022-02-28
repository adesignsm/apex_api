import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import PlayerCard from "./components/PlayerCard";

import "./styles.css";
 
const App = () => {
    const [playerData, setPlayerData] = useState([]);
    const [userName, setUserName] = useState("");
    const [platform, setPlatform] = useState("X1");
    const [showStats, setShowStats] = useState(false);
    
    const key = process.env.REACT_APP_APEX;

    useEffect(() => {
        console.log(userName);
        console.log(platform);

        queryData();

    }, [userName]);

    const queryData = () => {

        try {
            axios.get(`https://api.mozambiquehe.re/bridge?version=5&platform=${platform}&player=${userName}&auth=${key}`)
            .then(res => {
                const data = res.data;
                console.log(data);

                if (data.global.name === "") return false;

                setPlayerData(data);
            })
        } catch (error) {

            console.error();
        }
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
                <option> Xbox </option>
                <option> PlayStation </option>
                <option> PC </option>
            </select>
            <input type = "text" id = "username-input" placeholder = "Search here" onKeyPress = {event => {EditUserName(event)}}/>

            <div className = "player-card">
                {showStats ? <PlayerCard data = {playerData}/> : null}
            </div>
        </div>
    )
}

export default App;