import React, { FC } from "react";
import { Spacer } from "../../App.style";
import { Container, Header } from "./Projects.style";
import Rumble from "./Rumble";

const Projects: FC = () => {
  return (
    <div>
      <Spacer />
      <Container>
        <Header>Projects</Header>
        <Rumble />
      </Container>
    </div>
  );
};

export default Projects;
