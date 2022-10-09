import { React, Fragment } from "react";
import ContactMe from "../Components/ContactMe";
import Navbar from "../Components/Navbar";
import "../styles/Contato.scss";

export default function Contato() {
  return (
    <Fragment>
      <Navbar />
      <div id="items">
          <div id="item1"><ContactMe/></div>
      </div>
    </Fragment>
  );
}
