import React, {useState, useEffect} from "react";

const Legends = (props) => {

    const [legendStats, setLegendStats] = useState([]);
    const [legendImageURLS, setLegndImageURLS] = useState([]);
    let data = props.data;
    let legendArray = [];

    const legendsIcons = () => {
        
        setLegendStats([data.legends.all]);
        let legendObj = Object.values(legendStats[0]);
        
        for (var i = 0; i < legendObj.length; i++) {

            if (legendObj[i].hasOwnProperty("data")) {

                legendArray.push(legendObj[i].ImgAssets.icon);
            }
            setLegndImageURLS(legendArray);
        }
    }

    useEffect(() => {
        setLegendStats([data.legends.all]);

        if (legendStats.length > 0) {
            
            legendsIcons();
        }
    }, [props]);

    return (
        <div>
            <h1> Legends Used </h1>
            {legendImageURLS.map((img, key) => {
                return <img className = "legend-icons" key = {key} src = {img} />
            })}
        </div>
    )
}

export default Legends;