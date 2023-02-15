import React, { FC, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FormBox,
  FormContent,
  ContactInfo,
  ContactHeader,
  SubmitBtn,
  FormOutline,
  FormLabel,
  FormInput,
  LabelInputCombo,
  MsgInput,
  MsgLabel,
} from "./Contact.style";
import { Spacer } from "../../App.style";

const Contact: FC = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_wpajelr",
          "contact_form",
          form.current,
          "user_TMC5q1DawDHn5Jcqfr0vQ"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      form.current.reset();
    }
  };
  return (
    <>
      <Spacer />
      <FormBox>
        <ContactHeader>Send Me a Message</ContactHeader>
        <FormOutline>
          <FormContent ref={form} onSubmit={sendEmail}>
            <ContactInfo>
              <LabelInputCombo>
                <FormLabel>Name:</FormLabel>
                <FormInput type="text" name="user_name" />
              </LabelInputCombo>
              <LabelInputCombo>
                <FormLabel>Email:</FormLabel>
                <FormInput type="email" name="user_email" />
              </LabelInputCombo>
            </ContactInfo>
            <MsgLabel>Message</MsgLabel>
            <MsgInput name="message" />
            <SubmitBtn type="submit" value="Send">
              Send
            </SubmitBtn>
          </FormContent>
        </FormOutline>
      </FormBox>
    </>
  );
};

export default Contact;
