import React from "react";
import './onboarding.css';
import Button from '@mui/material/Button';

export default function Onboarding() {
    return(
    <div className="main">
        <div className="onboard-nav">
            <div className="onboard-logo">
                GradConnect
            </div>
            <button className="onboard-button">
                Login
            </button>
        </div>
    </div>)
} 