import styled from "styled-components";

const colors = {
  lightCyan: "#CDF7F6",
  aero: "#8FB8DE",
  bluebell: "#9A94BC",
  indigoDye: "#1A4860",
  raisinBlack: "#1B1C22",
};

export const Navback = styled.div`
  background-color: ${colors.indigoDye};
  padding: 0px;
  height: 100px;
  width: 100%;
  margin-top: 0px;
  /* box-shadow: 0px 2px 10px ${colors.raisinBlack}; */
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

export const InnerDiv = styled.div`
  padding-top: 30px;
  padding-right: 30px;
`;

export const TabHeader = styled.div`
  background-color: white;
  height: 50px;
  display: flex;
  justify-content: space-around;
`;

export const PageTabs = styled.h2`
  color: ${colors.indigoDye};
  margin: 0px;
  padding-top: 12px;
  font-weight: normal;
`;
