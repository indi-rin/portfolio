import React, { FC } from "react";
import {
  Name,
  Descript,
  Links,
  ProjectImg,
  LinkSection,
  Dates,
} from "./Projects.style";

const GamelanLegacy: FC = () => {
  return (
    <>
      <ProjectImg src="gamelan-legacy.png" />
      <Name>Gamelan Legacy</Name>
      <Dates>Dec. 2021</Dates>
      <Descript>
        When I was in college, a friend of mine was in our school's gamelan
        ensemble. While looking up videos of gamelan music to explain to me what
        a gamelan, she encountered one titled "Gamelan Legacy." At the time, I
        commented that it sounded like a video game. Three years later, I solo
        developed this basic platformer game about wearing gamelans for armor
        and creating music when you jump and run into your enemies.
      </Descript>
      <Descript>
        <b>Tech Stack:</b> JavaScript, Phaser, and Webpack
      </Descript>
      <LinkSection>
        <Links href="https://github.com/indi-rin/Gamelan">GitHub Repo</Links> •{" "}
        <Links href="https://www.youtube.com/watch?v=8RUn3GSJvDI">
          Video Demo
        </Links>
      </LinkSection>
    </>
  );
};

export default GamelanLegacy;
