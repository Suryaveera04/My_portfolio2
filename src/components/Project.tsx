import React from "react";
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import mock07 from '../assets/images/mock07.png';
import mock06 from '../assets/images/mock06.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://suryaveera-portfolio.netlify.app/" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://suryaveera-portfolio.netlify.app/" target="_blank" rel="noreferrer"><h2>My Portfolio</h2></a>
                <p>my first project is to develop my portfolio using react and TypeScript</p>
            </div>
            <div className="project">
                <a href="https://weather-app-msv.netlify.app/" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%" /></a>
                <a href="https://weather-app-msv.netlify.app/" target="_blank" rel="noreferrer"><h2>Weather App</h2></a>
                <p>A clean weather web app built with React that displays real-time temperature and conditions for any city using an interactive search interface.</p>
            </div>
            <div className="project">
                <a href="https://amigo-glow-chat.lovable.app/" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://amigo-glow-chat.lovable.app/" target="_blank" rel="noreferrer"><h2>Amigo's Chat</h2></a>
                <p>A real-time chat web app built with React that allows users to connect, add friends, and communicate instantly through a clean dark-themed interface.</p>
            </div>
            <div className="project">
                <a href="https://ai-fraud-detection-msv.netlify.app/" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://ai-fraud-detection-msv.netlify.app/" target="_blank" rel="noreferrer"><h2>ScamShield - AI-Powered Real-Time Fraud Detection</h2></a>
                <p> A Real time AI call Fraud Detection application which helps to detect the scam calls in real time.</p>
            </div>
            <div className="project">
                <a href="https://mits-results-msv.netlify.app/" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://mits-results-msv.netlify.app/" target="_blank" rel="noreferrer"><h2>Result showing application </h2></a>
                <p> A Result website which gives a platform to the students to get their result without crashing the server with multiple requestes ant same time, by solving this problem this application will set the students in queue and allow the students in order.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;