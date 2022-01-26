import styled from "styled-components";
import { colors } from "../../App.style";

export const Container = styled.div`
  background-color: white;
  width: 75%;
  margin: 50px auto;
  text-align: center;
  border-radius: 20px;
  padding: 10px 30px 10px 30px;
`;

export const Header = styled.h2`
  font-family: Didot, serif;
  font-weight: bold;
  color: ${colors.raisinBlack};
`;

export const Name = styled.h2`
  font-family: Didot, serif;
  color: ${colors.indigoDye};
  font-size: 20px;
  text-align: center;
  margin-top: 30px;
`;

export const Descript = styled.p`
  color: ${colors.raisinBlack};
  text-align: justify;
`;

export const LinkSection = styled.div`
  color: ${colors.indigoDye};
  text-align: center;
  margin-top: 20px;
`;

export const Dates = styled(Descript)`
  font-style: italic;
  text-align: center;
`;

export const Links = styled.a`
  color: ${colors.indigoDye};
  text-decoration: underline;
  &:hover {
    color: ${colors.aero};
  }
`;

export const ProjectList = styled.div`
  display: flex;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const Project = styled.div`
  width: 50%;
  padding: 30px;
  margin: auto;

  @media (max-width: 700px) {
    width: 90%;
    padding: 10px;
  }
`;

export const ProjectImg = styled.img`
  width: 60%;
  height: auto;
  border-radius: 50%;
`;
