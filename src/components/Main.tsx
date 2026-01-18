import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://avatars.githubusercontent.com/u/178275163?s=400&u=a74a57e8e72a6152df96dcf712aaed03875177b0&v=4" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Suryaveera04/" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/suryaveera-msv/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>M Suryaveera</h1>
          <p></p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Suryaveera04" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/suryaveera-msv/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
