import React from "react";
import './top.css';
import Work from "./GoogleSign";




const Top = ()=>{
    return(
        <div className="backgroundBar">
                <img className="logo" id='logo'src={require('./assets/logo.png')} alt="Logo png"></img>
                <Work/>
                <h1 className="title ">Daily Productivity App</h1>
        </div>
    )
};

export default Top