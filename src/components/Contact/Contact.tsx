import React, { FC, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FormBox,
  FormContent,
  ContactInfo,
  ContactHeader,
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
        <ContactHeader>Send Me a Message:</ContactHeader>
        <FormContent ref={form} onSubmit={sendEmail}>
          <ContactInfo>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
          </ContactInfo>
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </FormContent>
      </FormBox>
    </>
  );
};

export default Contact;
