import React, {useEffect, useState, Fragment} from "react";

//server state not updating immediatley

const ServerStatus = (data) => {
    const [statusData, setStatusData] = useState([]);
    const serverData = data.data;

    const handleOnChange = (event) => {
        console.log(event.target.value);

        if (event.target.value == "EA Status") {
            setStatusData(serverData.EA_accounts);
            console.log(statusData);

        } else if (event.target.value == "Origin Status") {
            setStatusData(serverData.Origin_login);
            console.log(statusData);

        } else if (event.target.value == "Playstation Status") {
            setStatusData(serverData.otherPlatforms["Playstation-Network"]);
            console.log(statusData);

        } else if (event.target.value == "Xbox Status") {
            setStatusData(serverData.otherPlatforms["Xbox-Live"]);
            console.log(statusData);
        }
    }

    return (
        <Fragment>
            <h1> ServerStatus </h1> 
            <select onChange = {event => {handleOnChange(event)}}>
                <option> Select a platform </option>
                <option> EA Status </option>
                <option> Origin Status </option>
                <option> Playstation Status</option>
                <option> Xbox Status </option> 
            </select>
        </Fragment>
    )
}

export default ServerStatus;