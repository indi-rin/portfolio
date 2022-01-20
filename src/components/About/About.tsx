import React, { FC } from "react";
import { Container, BioContainer, ProfilePic, Name, Bio } from "./About.style";
import { Spacer } from "../../App.style";

const About: FC = () => {
  return (
    <>
      <Spacer />
      <Container>
        <ProfilePic src="profile.jpg" />
        <BioContainer>
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
            Always eager to continue learning and growing, I'm currently in the
            process of learning Ruby on Rails.
          </Bio>
        </BioContainer>
      </Container>
    </>
  );
};

export default About;
