import { React, Fragment } from "react"


import Navbar from "../Components/Navbar";
import Profile from "../Components/Profile";
import AboutMe from "../Components/AboutMe";
import ContactMe from "../Components/ContactMe"


import "../styles/Inicio.scss"


export default function Inicio() {
    return (
      <Fragment>
        <Navbar/>
        <div id="Inicio">
          <Profile id="Profile"/>
          <ContactMe id="ContactMe"/>
          <AboutMe id="AboutMe"/>
        </div>
      </Fragment>
    );
}