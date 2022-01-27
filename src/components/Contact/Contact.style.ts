import styled from "styled-components";
import { colors } from "../../App.style";

const breakpoint = "1000px";

export const FormBox = styled.div`
  background-color: white;
  padding: 20px;
  width: 50%;
  margin: 50px auto;
  border-radius: 20px;

  @media (max-width: ${breakpoint}) {
    width: 80%;
    padding: 5px;
  }
`;

export const FormContent = styled.form`
  margin: 50px;
  @media (max-width: ${breakpoint}) {
    margin: 10px;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: ${breakpoint}) {
    flex-direction: column;
  }
`;

export const ContactHeader = styled.h2`
  font-family: Didot, serif;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: ${colors.raisinBlack};
`;

export const SubmitBtn = styled.button`
  background-color: ${colors.indigoDye};
  color: ${colors.aero};
  /* font-family: Didot, serif; */
  padding: 10px 30px;
  border-radius: 5px;
  border: 0px;
  margin: 20px auto 10px;
  display: block;
  &:hover {
    background-color: ${colors.aero};
    color: ${colors.indigoDye};
  }
`;

export const FormOutline = styled.div`
  border: 2px dotted ${colors.indigoDye};
  border-radius: 8px;
  width: 90%;
  margin: 15px auto 15px auto;
  @media (max-width: ${breakpoint}) {
    border: white;
    padding: 0px 5px 5px;
  }
`;

export const FormLabel = styled.label`
  margin: 5px 10px 5px 0px;
  font-weight: bold;
  font-family: Didot, serif;
  color: ${colors.indigoDye};
`;

export const FormInput = styled.input`
  border-radius: 5px;
  border: 1px solid ${colors.indigoDye};
  color: ${colors.raisinBlack};
  padding: 5px;
`;

export const LabelInputCombo = styled.div`
  display: flex;
  @media (max-width: ${breakpoint}) {
    flex-direction: column;
  }
`;

export const MsgLabel = styled(FormLabel)`
  margin: 0px 0px 5px;
  text-align: center;
`;

export const MsgInput = styled.textarea`
  font-family: Helvetica, sans-serif;
  border-radius: 5px;
  border: 1px solid ${colors.indigoDye};
  color: ${colors.raisinBlack};
  width: 95%;
  height: 200px;
  resize: none;
  padding: 5px;
  display: block;
  margin: auto;
`;

export const MsgDiv = styled.div`
  width: 90%;
`;
