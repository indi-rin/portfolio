import React, { FC } from "react";
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Spacer } from "../../App.style";

const Contact: FC = () => {
  return (
    <div>
      <Spacer />
      <AiFillLinkedin />
      <AiOutlineGithub />
      <AiOutlineTwitter />
    </div>
  );
};

export default Contact;
