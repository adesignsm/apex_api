import React, { useState, useEffect, Fragment } from "react";
import Legends from "./Legends";

//add in a full profile card
//image of selected legend
//rank badge and rank info
//special event stats
//realtime data

const PlayerCard = (props) => {

    const [playerName, setPlayerName] = useState("");
    const [playerStatus, setPlayerStatus] = useState("No data available");
    const [playerRealTimeInGame, setPlayerRealTimeInGame] = useState("No data available");
    const [playerRank, setPlayerRank] = useState("");
    const [playerArenas, setPlayerArenas] = useState("");
    const [playerLegend, setPlayerLegend] = useState("");

    const [totalStats, setTotalStats] = useState([]);

    let data = props.data;

    useEffect(() => {

        if (data.length <= 0) {
            return false;

        } else {
            setPlayerName(data.global.name);
            setPlayerRealTimeInGame(data.realtime.isInGame);
            setPlayerRank(data.global.rank.rankImg);
            setPlayerArenas(data.global.arena.rankImg);
            setPlayerLegend(data.legends.selected.ImgAssets.icon);
            setTotalStats(Object.values(data.total));
            // setLegendStats(data.legends.all);

            if (data.realtime.isOnline === 1) {
                setPlayerStatus("Player is online");
                setPlayerRealTimeInGame(props.data.realtime.currentStateAsText);
            } else {
                setPlayerStatus("Player is offline");
                setPlayerRealTimeInGame("Not in a match");
            }
        }
    }, [data]);

    return (
        <Fragment>
            <h1> {playerName} </h1> 
            <div className = "primary-card">
                <div> <img alt = "arenas Badge" style = {{width: "30%"}} src = {playerArenas} /></div>       
                <div> <img alt = "rank Badge" style = {{width: "30%"}} src = {playerRank}/></div>
                <div> <img alt = "recent Legend" style = {{width: "30%"}} src = {playerLegend}/></div>
            </div>
            <ul>
                <h2> Online and Match status: </h2>
                <li> Online status: {playerStatus} </li>
                <li> Match status: {playerRealTimeInGame} </li>
            </ul>

            <ul>
                <h2> Performance Stats </h2>
                {totalStats.map((stat, key) => {
                    if (stat.name === "KD" && stat.value === "-1") return <li key = {key}> KD: Data not available </li>
                    return <li key = {key}> {stat.name}: {stat.value.toLocaleString("en-us")} </li>
                })}
            </ul>

            <Legends data = {data}/>
        </Fragment>
    )
}

export default PlayerCard;