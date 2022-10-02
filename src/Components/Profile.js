import React from "react";
import "../styles/Profile.scss"
import Perfil from "../Images/Perfil.webp"


import { DiCss3, DiSass, DiReact } from "react-icons/di"
import { SiJavascript, SiHtml5, SiTailwindcss } from "react-icons/si"
import { IoHardwareChip } from "react-icons/io5"



export default function Profile(){
    return (
      <div id="Profile">
        <div id="Card">
          <img src={Perfil} />
          <p>
            Glaucio Castilho
            <br />
            Dev. Web
          </p>
        </div>
        <div id="Skills">
          <h3>Tecnologias<IoHardwareChip/></h3>
          <br />
          <div id="Tecnologias">
            <p><SiHtml5/>HTML</p>
            <p><DiCss3/>CSS</p>
            <p><SiJavascript/>JAVASCRIPT</p>
            <p><DiReact/>REACT</p>
            <p><DiSass/>SASS</p>
            <p><SiTailwindcss/>TAILWIND</p>
          </div>
        </div>
      </div>
    );
}