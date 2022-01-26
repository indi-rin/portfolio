import styled from "styled-components";
import { colors } from "../../App.style";

export const HomeImg = styled.img`
  height: 500px;
  width: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 860px) {
    width: 80%;
    height: auto;
    margin-top: 50px;
  }
`;
