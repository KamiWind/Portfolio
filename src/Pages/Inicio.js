import { React, Fragment } from "react"


import Navbar from "../Components/Navbar";
import Profile from "../Components/Profile";
import AboutMe from "../Components/AboutMe";
import ContactMe from "../Components/ContactMe"


import "../styles/Inicio.scss"


export default function Inicio() {
    return (
      <div class="flex flex-col h-screen justify-between">
        <Navbar />
        <section class="Inicio">
          <div id="items1">
            <Profile/>
            <ContactMe/>
          </div>
          <div id="items2">
            <AboutMe/>
          </div>
        </section>
        <footer class="flex justify-center items-end text-center x:invisible sm:visible">
          <p>Desenvolvido por mim (Glaucio Castilho)
            <br/>
            Tecnologias ultilizadas: React / JavaScript / Css / Sass / Tailwind
          </p>
        </footer>
      </div>
    );
}