import styled from "styled-components";
import { colors } from "../../App.style";

export const Container = styled.div`
  background-color: white;
  width: 75%;
  margin: auto;
  margin-top: 75px;
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
