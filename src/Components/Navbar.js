import { React, Fragment } from "react";
import { BiCodeAlt } from "react-icons/bi"
import { AiFillHome, AiOutlineCode, AiOutlineMail } from "react-icons/ai"

import "../styles/Navbar.scss";

export default function Navbar() {
  return (
    <Fragment>
      <header id="navbar">
        <h3 id="logo"><BiCodeAlt/> Portfolio</h3>
        <div id="menu">
          <a href="/"><AiFillHome/>Inicio</a>
          <a href="Projetos"><AiOutlineCode/>Projetos</a>
          <a href="Contato"><AiOutlineMail/>Contato</a>
        </div>
      </header>
    </Fragment>
  );
}
