import styled from "styled-components";
import { colors } from "../../App.style";

const transDuration = "0.7s";

export const Navback = styled.div`
  background-color: ${colors.indigoDye};
  padding: 0px;
  height: 100px;
  width: 100%;
  margin: 0px;
  display: flex;
  justify-content: space-around;
`;

export const NameHeader = styled.h1`
  color: ${colors.aero};
  text-align: center;
  margin: 0px;
  padding-top: 30px;
  font-family: Didot, serif;
`;

export const TabHeader = styled.div`
  background-color: white;
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const PageTabs = styled.h2`
  color: ${colors.indigoDye};
  font-size: 18px;
  font-weight: normal;
  transition-duration: ${transDuration};
  &:hover {
    color: ${colors.aero};
  }
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const WholeNav = styled.div`
  margin: 0px;
  width: 100%;
  position: fixed;
  box-shadow: 0px 2px 10px ${colors.indigoDye};
`;
