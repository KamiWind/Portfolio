import { React,Fragment } from "react";

import { FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"


import "../styles/ContactMe.scss"


export default function ContactMe() {
    return (
      <Fragment>
        <div id="ContactMe">
          <h1>Entre em Contato comigo</h1>
          <div id="Contatos">
            <span>
              <a href="https://api.whatsapp.com/send?phone=5521995138527&text=Ol%C3%A1!%20eu%20venho%20pelo%20seu%20portfolio%20e%20tenho%20interesse%20em%20contrata-lo!" type="_blank"><FaWhatsapp/>Whatsapp</a>
              <a href="mailto:kamiwind@outlook.com?subject=%22Digite%20o%20Assunto%20aqui%22&body=%22Digite%20sua%20Menssagem%20Aqui%22" title="kamiwind@outlook.com"><HiOutlineMail/>Email</a>
            </span>
            <span>
              <a href="https://www.linkedin.com/in/glaucio-castilho-361505242/" target="_blank"><FaLinkedin/>LinkedIn</a>
              <a href="https://www.instagram.com/glauciocastilho1/" target="_blank"><FaInstagram/>Instagram</a>
            </span>
          </div>
        </div>
      </Fragment>
    );
}