import styled from "styled-components";

const colors = {
  lightCyan: "#CDF7F6",
  aero: "#8FB8DE",
  bluebell: "#9A94BC",
  indigoDye: "#1A4860",
  raisinBlack: "#1B1C22",
};

export const Container = styled.div`
  background-color: white;
  width: 75%;
  margin: auto;
  margin-top: 75px;
  text-align: center;
  border-radius: 20px;
  display: flex;
  box-shadow: 0px 2px 50px 2px ${colors.indigoDye};
`;

export const BioContainer = styled.div`
  margin: 30px;
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

export const ProfilePic = styled.img`
  height: 300px;
  width: auto;
  margin: 30px;
  border-radius: 15px;
`;
