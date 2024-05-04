import * as React from "react";
// import CircularProgress from "@mui/material/CircularProgress";
// import Box from "@mui/material/Box";

const Shimmer = () =>{
    return <div className="shimmer-container">
        {Array.from(Array(20)).map((record, index) => {
           return <div className="shimmer-card" key={index}></div>
        })}
    </div>
}

export default Shimmer;
