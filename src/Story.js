import { Avatar } from "@mui/material";
import React from "react";
import "./Story.css";
function Story({image, profileSrc, title}) {
  return (
  <div className="story" style={{backgroundImage: `url(${image})`}}>
    <Avatar src= {profileSrc} className="story__avatar" />
    <h4>{title}</h4>
  </div>
  );
}

export default Story;
