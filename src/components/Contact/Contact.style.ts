import styled from "styled-components";
import { colors } from "../../App.style";

export const FormBox = styled.div`
  background-color: white;
  padding: 20px;
  width: 50%;
  margin: 50px auto;
  border-radius: 20px;
`;

export const FormContent = styled.form`
  margin: 50px;
`;

export const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
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
  margin: 40px auto 10px;
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
  overflow: auto;
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
`;

export const MsgInput = styled.textarea`
  font-family: Helvetica, sans-serif;
  border-radius: 5px;
  border: 1px solid ${colors.indigoDye};
  color: ${colors.raisinBlack};
  width: 90%;
  margin: auto;
  height: 200px;
  resize: none;
  padding: 5px;
`;

export const MsgDiv = styled.div`
  width: 100%;
`;
