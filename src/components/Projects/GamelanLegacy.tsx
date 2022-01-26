import React, { FC } from "react";
import { Name, Descript, Links, ProjectImg } from "./Projects.style";

const GamelanLegacy: FC = () => {
  return (
    <>
      <ProjectImg src="gamelan-legacy.png" />
      <Name>Gamelan Legacy</Name>
      <Descript>
        A very basic platformer game about wearing gamelans for armor and
        creating music when you jump and run into your enemies.
      </Descript>
      <Descript>
        <b>Tech Stack:</b> JavaScript, Phaser
      </Descript>
      <Descript>
        <Links href="https://github.com/indi-rin/Gamelan">GitHub Repo</Links> •{" "}
        <Links href="https://www.youtube.com/watch?v=8RUn3GSJvDI">
          Video Demo
        </Links>
      </Descript>
    </>
  );
};

export default GamelanLegacy;
