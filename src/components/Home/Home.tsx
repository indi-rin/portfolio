import React, { FC } from "react";
import { Spacer } from "../../App.style";
import { HomeImg } from "./Home.style";

const Home: FC = () => {
  return (
    <>
      <Spacer />
      <HomeImg src="home.png" />
    </>
  );
};

export default Home;
