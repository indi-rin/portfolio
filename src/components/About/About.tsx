import React, { FC } from "react";
import {
  Container,
  Name,
  Bio,
  LinkedIn,
  GitHub,
  Twit,
  Links,
} from "./About.style";
import { Spacer } from "../../App.style";

const About: FC = () => {
  return (
    <>
      <Spacer />
      <Container>
        <Name>About Indi</Name>
        <Bio>
          I'm a full-stack software developer based out of the Greater Seattle
          Area. A long-time lover of logic puzzles, pattern-matching, and
          storytelling, I bring strong backend capabilities and a keen eye for
          frontend design to every project I create.
        </Bio>
        <Bio>
          My intro to programming began with courses in Lua and Java in high
          school (Lakeside School in Seattle, WA) and continued with C++ in
          college (Kenyon College in Gambier, OH), where I majored in Medieval
          History and minored in English. Most recently, I graduated the Grace
          Hopper Program (Fullstack Academy in New York, NY), an immersive
          software engineering program centered on full-stack JavaScript web
          development where I took on the additional challenge of teaching
          myself TypeScript to build a mobile app for my capstone project.
        </Bio>
        <Bio>
          Outside of programming, I enjoy baking (pies are my speciality),
          ballroom dancing, creating art, and doing crossword puzzles.
        </Bio>
        <Links>
          <a href="https://www.linkedin.com/in/indigorinearson/">
            <LinkedIn size={40} />
          </a>
          <a href="https://github.com/indi-rin">
            <GitHub size={50} />
          </a>
          <a href="https://twitter.com/indi_rin">
            <Twit size={50} />
          </a>
        </Links>
      </Container>
    </>
  );
};

export default About;
