import React, { FC } from "react";
import {
  Name,
  Descript,
  Links,
  ProjectImg,
  LinkSection,
  Dates,
} from "./Projects.style";

const Rumble: FC = () => {
  return (
    <>
      <ProjectImg src="rumble.png" />
      <Name>Rumble</Name>
      <Dates>Nov. 2021 - current</Dates>
      <Descript>
        A mobile app where users can find, match, and chat with rivals to help
        challenge them to reach new heights, cross-developed with three other
        engineers for both iOS and Android. I built the filtering and matching
        algorithms and front-end, styled the home screen and user profile
        modals, and helped implement the database structure and secure
        authorization.
      </Descript>
      <Descript>
        <b>Tech Stack:</b> TypeScript, React Native, Expo, Firebase + Firestore,
        and Styled-Components
      </Descript>
      <LinkSection>
        <Links href="https://github.com/Team-Rumble/rumble">GitHub Repo</Links>{" "}
        •{" "}
        <Links href="https://www.youtube.com/watch?v=vZ7tQsjeJM4">
          Video Demo
        </Links>
      </LinkSection>
    </>
  );
};

export default Rumble;
