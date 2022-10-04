import { React, Fragment } from "react"


import Navbar from "../Components/Navbar";
import Profile from "../Components/Profile";
import AboutMe from "../Components/AboutMe";


import "../styles/Inicio.scss"


export default function Inicio() {
    return (
      <Fragment>
        <Navbar />
        <div id="Inicio">
          <Profile />
          <AboutMe/>
        </div>
      </Fragment>
    );
}