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
  justify-content: space-between;
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
