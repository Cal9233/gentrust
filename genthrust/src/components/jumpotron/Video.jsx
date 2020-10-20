import React from "react";
import "../../App.css";
import { Button } from "../button/Button";
import "./Video.css";
import Airplane from "../../videos/Airplane.mp4";

const Video = () => {
  return (
    <div className="video-container">
      <video src={Airplane} autoPlay loop muted />
      <h1>Evolution awaits</h1>
      <p>What are you waiting for?</p>
      <div className="video-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Example 1
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Example 2 <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
};

export default Video;
