import React,{useEffect} from "react";

const MapRotation = ({data}) => {

    console.log(data);

    return (
        <div className = "map-rotations">
            <h1> UNRANKED MAP ROTATION </h1>
            <div className = "battle-royale">
                <h2> Battle Royale</h2>
                <ul style = {{position: "absolute", color: "#fff"}}>
                    <li> Current Map: {data && data.battle_royale.current.map}</li>
                    <li> Time Remaining: {data && data.battle_royale.current.remainingTimer}</li>
                    <li> Next Map: {data && data.battle_royale.next.map} </li>
                </ul>
                <img alt = "current map image" src = {data ? data.battle_royale.current.asset : undefined} style = {{width: "100%"}}/>
            </div>
            <div className = "arena">
                <h2> Arenas </h2>
                <ul style = {{position: "absolute", color: "#fff"}}>
                    <li> Current Map: {data && data.arenas.current.map}</li>
                    <li> Time Remaining: {data && data.arenas.current.remainingTimer}</li>
                    <li> Next Map: {data && data.arenas.next.map} </li>
                </ul>
                <img alt = "current map image" src = {data ? data.arenas.current.asset : undefined} style = {{width: "100%"}}/>
            </div>

            <br />
            <br />

            <h1> RANKED MAP ROTATION </h1>
            <div className = "ranked-battle-royale">
                <h2> Ranked Battle Royale </h2>
                <ul style = {{position: "absolute", color: "#fff"}}>
                    <li> Current Map: {data && data.ranked.current.map}</li>
                    <li> Time Remaining: {data ? data.ranked.current.remainingTimer : 0}</li>
                    <li> Next Map: {data && data.ranked.next.map} </li>
                </ul>
                <img alt = "current map image" src = {data ? data.ranked.current.asset : undefined} style = {{width: "100%"}}/>
            </div>  
            <div className = "ranked-arenas">
                <h2> Ranked Arenas </h2>
                <ul style = {{position: "absolute", color: "#fff"}}>
                    <li> Current Map: {data && data.arenasRanked.current.map}</li>
                    <li> Time Remaining: {data && data.arenasRanked.current.remainingTimer}</li>
                    <li> Next Map: {data && data.arenasRanked.next.map} </li>
                </ul>
                <img alt = "current map image" src = {data ? data.arenasRanked.current.asset : undefined} style = {{width: "100%"}}/>
            </div>                 
        </div>
    )
}

export default MapRotation;