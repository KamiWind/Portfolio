import { React, Fragment } from "react"
import Navbar from "../Components/Navbar";
import Profile from "../Components/Profile";

import "../styles/Inicio.scss"


export default function Inicio() {
    return (
      <Fragment>
        <Navbar />
        <div id="Inicio">
          <Profile />
          <Profile />
        </div>
      </Fragment>
    );
}