import React, { FC } from "react";
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Spacer } from "../../App.style";
import ContactForm from "./ContactForm";

const Contact: FC = () => {
  return (
    <div>
      <Spacer />
      <ContactForm />
      <a href="https://www.linkedin.com/in/indigorinearson/">
        <AiFillLinkedin color="white" size={50} />
      </a>
      <a href="https://github.com/indi-rin">
        <AiOutlineGithub color="white" size={50} />
      </a>
      <a href="https://twitter.com/indi_rin">
        <AiOutlineTwitter color="white" size={50} />
      </a>
    </div>
  );
};

export default Contact;
