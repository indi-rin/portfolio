import styled from "styled-components";
import { colors } from "../../App.style";
import { Linkedin, Github, Twitter } from "@styled-icons/simple-icons";

export const Container = styled.div`
  background-color: white;
  width: 75%;
  margin: auto;
  margin-top: 50px;
  text-align: center;
  border-radius: 20px;
  padding: 10px 30px 10px 30px;
`;

export const Name = styled.h2`
  font-family: Didot, serif;
  text-align: left;
  color: ${colors.raisinBlack};
`;

export const Bio = styled.p`
  text-align: left;
  color: ${colors.raisinBlack};
`;

export const LinkedIn = styled(Linkedin)`
  color: ${colors.aero};
  margin: 5px;
  &:hover {
    color: ${colors.indigoDye};
  }
`;

export const GitHub = styled(Github)`
  color: ${colors.aero};
  margin: 5px;
  &:hover {
    color: ${colors.indigoDye};
  }
`;

export const Twit = styled(Twitter)`
  color: ${colors.aero};
  margin: 5px;
  &:hover {
    color: ${colors.indigoDye};
  }
`;

export const Links = styled.div`
  margin-top: 30px;
  margin-bottom: 15px;
`;
