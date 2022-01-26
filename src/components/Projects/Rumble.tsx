import React, { FC } from "react";
import { Name, Descript, Links } from "./Projects.style";

const Rumble: FC = () => {
  return (
    <>
      <Name>Rumble</Name>

      <Descript>
        A mobile app where users can find, match, and chat with rivals so help
        challenge them to reach new heights, cross-developed for both iOS and
        Android. Built with TypeScript, React Native, Expo, Styled-Components,
        Firebase, and Firestore.
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
