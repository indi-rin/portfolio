import React, { FC } from "react";
import { Spacer } from "../../App.style";
import { Container, Header, ProjectList, Project } from "./Projects.style";
import Rumble from "./Rumble";
import GamelanLegacy from "./GamelanLegacy";

const Projects: FC = () => {
  return (
    <div>
      <Spacer />
      <Container>
        <Header>Projects</Header>
        <ProjectList>
          <Project>
            <Rumble />
          </Project>
          <Project>
            <GamelanLegacy />
          </Project>
        </ProjectList>
      </Container>
    </div>
  );
};

export default Projects;
