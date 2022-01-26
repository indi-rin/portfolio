import styled from "styled-components";
import { colors } from "../../App.style";

export const Container = styled.div`
  background-color: white;
  width: 75%;
  margin: auto;
  margin-top: 50px;
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
  text-align: left;
  margin-top: 30px;
`;

export const Descript = styled.p`
  color: ${colors.raisinBlack};
  text-align: left;
`;

export const Links = styled.a`
  color: ${colors.indigoDye};
  text-decoration: underline;
  &:hover {
    color: ${colors.aero};
  }
`;
