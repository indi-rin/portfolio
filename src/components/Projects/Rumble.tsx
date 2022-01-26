import React, { FC } from "react";
import { Name, Descript, Links, ProjectImg } from "./Projects.style";

const Rumble: FC = () => {
  return (
    <>
      <ProjectImg src="rumble.png" />
      <Name>Rumble</Name>
      <Descript>
        A mobile app where users can find, match, and chat with rivals so help
        challenge them to reach new heights, cross-developed for both iOS and
        Android.
      </Descript>
      <Descript>
        <b>Tech Stack:</b> TypeScript, React Native, Expo, Firebase + Firestore,
        and Styled-Components
      </Descript>
      <Descript>
        <Links href="https://github.com/Team-Rumble/rumble">GitHub Repo</Links>{" "}
        •{" "}
        <Links href="https://www.youtube.com/watch?v=vZ7tQsjeJM4">
          Video Demo
        </Links>
      </Descript>
    </>
  );
};

export default Rumble;
