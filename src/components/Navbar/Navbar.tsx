import React, { FC } from "react";
import { Link } from "react-router-dom";
import {
  Navback,
  NameHeader,
  InnerDiv,
  TabHeader,
  PageTabs,
  WholeNav,
} from "./Navbar.style";

const Navbar: FC = () => {
  return (
    <WholeNav>
      <Navback>
        <NameHeader>Indigo Rinearson</NameHeader>
      </Navback>
      <TabHeader>
        <Link to="/">
          <PageTabs>HOME</PageTabs>
        </Link>
        <Link to="/about">
          <PageTabs>ABOUT</PageTabs>
        </Link>
        <Link to="/projects">
          <PageTabs>PROJECTS</PageTabs>
        </Link>
        <Link to="/contact">
          <PageTabs>CONTACT</PageTabs>
        </Link>
      </TabHeader>
    </WholeNav>
  );
};

export default Navbar;
