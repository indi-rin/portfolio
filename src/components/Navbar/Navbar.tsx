import React, { FC } from "react";
import { Link } from "react-router-dom";
import {
  Navback,
  NameHeader,
  InnerDiv,
  TabHeader,
  PageTabs,
} from "./Navbar.style";
// import { GiCompass } from "react-icons/gi";

const Navbar: FC = () => {
  return (
    <>
      <Navback>
        {/* <InnerDiv>
        <GiCompass color="#1A4860" size={40} />
      </InnerDiv> */}
        <NameHeader>Indigo Rinearson</NameHeader>
        {/* <InnerDiv>
        <GiCompass color="#8FB8DE" size={40} />
      </InnerDiv> */}
      </Navback>
      <TabHeader>
        <Link to="/">
          <PageTabs>HOME</PageTabs>
        </Link>
        <PageTabs>|</PageTabs>
        <Link to="/about">
          <PageTabs>ABOUT</PageTabs>
        </Link>
        <PageTabs>|</PageTabs>
        <Link to="/projects">
          <PageTabs>PROJECTS</PageTabs>
        </Link>
        <PageTabs>|</PageTabs>
        <Link to="/contact">
          <PageTabs>CONTACT</PageTabs>
        </Link>
      </TabHeader>
    </>
  );
};

export default Navbar;
