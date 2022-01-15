import React from "react";
import { Link } from "react-router-dom";
import { Navback, NameHeader, InnerDiv } from "./Navbar.style";
import { GiCompass } from "react-icons/gi";

const Navbar = () => {
  return (
    <Navback>
      <InnerDiv>
        <GiCompass color="#1A4860" size={40} />
      </InnerDiv>
      <NameHeader>Indigo Rinearson</NameHeader>
      <InnerDiv>
        <GiCompass color="#8FB8DE" size={40} />
      </InnerDiv>
    </Navback>
  );
};

export default Navbar;
