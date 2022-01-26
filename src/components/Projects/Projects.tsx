import React, { FC } from "react";
import { Spacer } from "../../App.style";
import { Container, Header } from "./Projects.style";
import Rumble from "./Rumble";
import GamelanLegacy from "./GamelanLegacy";

const Projects: FC = () => {
  return (
    <div>
      <Spacer />
      <Container>
        <Header>Projects</Header>
        <Rumble />
        <GamelanLegacy />
      </Container>
    </div>
  );
};

export default Projects;
