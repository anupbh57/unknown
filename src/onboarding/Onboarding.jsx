import React from "react";
import './onboarding.css';
import Button from '@mui/material/Button';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import RemoveIcon from '@material-ui/icons/Remove';
import OnboardImg from "../images/img_mob_dev.png";


export default function Onboarding() {
    return (
        <div className="main">
            <div className="onboard-nav">
                <div className="onboard-logo">
                    GradConnect
                </div>
                <button className="onboard-button">
                    Login
                </button>
            </div>

            <div className="main-onboard">
                <img className="onboard-img"
                    src={OnboardImg}></img>
                <h2 className="onboard-heading">
                    Get Inspired
                </h2>
                <div className="onboard-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea fuga consequatur id exercitationem quos facilis quibusdam, nam voluptatum adipisci deleniti!</div>
                <div className="onboard-ico"><span className="onboard-ind onboard-active"> </span><span className="onboard-ind"> </span><span className="onboard-ind"> </span></div>
                <div className="onboard-footer">
                    <button className="onboard-skip">Skip</button>
                    <button className="onboard-next">Next</button>
                    
                </div>
            </div>


        </div>
    )
}
