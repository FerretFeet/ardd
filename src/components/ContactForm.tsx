import axios from "axios";
import React, { ChangeEvent, useState } from "react";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [state, setState] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function onNameChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setState((prevState) => ({
      ...prevState,
      name: event.target.value,
    }));
  }
  function onEmailChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setState((prevState) => ({
      ...prevState,
      email: event.target.value,
    }));
  }
  function onSubjectChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setState((prevState) => ({
      ...prevState,
      subject: event.target.value,
    }));
  }
  function onMessageChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setState((prevState) => ({
      ...prevState,
      message: event.target.value,
    }));
  }

  function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(state);
    axios({
      method: "POST",
      url: "/send",
      data: state,
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Message Sent.");
        resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  }

  function resetForm() {
    setState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  return (
    // NODEMAILER TO SEND EMAIL
    // HOW TO INTEGRATE FRONT AND BACKEND
    //Honeypot?
    <section
      id="contact-form"
      className=""
    >
      <p className="text-center text-2xl">
        Want to Sign up for service?
        <br />
        <br />
        Need to send us a message?
        <br />
        <br />
        <br />
        Fill out the form below.
      </p>

      <form
        onSubmit={handleSubmit}
        action=""
        className="m-8 flex flex-col items-center justify-center gap-6 text-left text-xl children:flex children:w-3/4 children:flex-col children:gap-2"
      >
        <div className="">
          <label htmlFor="name">Full Name: </label>
          <input
            className="border-2 p-2 shadow-sm"
            type="text"
            id="name"
            placeholder="First and last name"
            required
            value={state.name}
            onChange={onNameChange}
          />
        </div>
        <div className="">
          <label
            className="underline"
            htmlFor="email"
          >
            E-Mail:{" "}
          </label>
          <input
            className="border-2 p-2 shadow-sm"
            type="email"
            id="email"
            placeholder="johndoe123@example.com"
            required
            value={state.email}
            onChange={onEmailChange}
          />
        </div>
        <div className="">
          <label
            className="underline"
            htmlFor="subject"
          >
            Subject:{" "}
          </label>
          <input
            className="border-2 p-2 shadow-sm"
            type="subject"
            id="subject"
            placeholder="e.g. business services, questions"
            required
            value={state.subject}
            onChange={onSubjectChange}
          />
        </div>
        <div className="">
          <label htmlFor="message">Message: </label>
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={10}
            className="border-2 p-2 shadow-sm"
            placeholder="Type your message here."
            required
            value={state.message}
            onChange={onMessageChange}
          ></textarea>
        </div>
        <button
          className="mx-auto mb-6 mt-4 flex content-center justify-center rounded-md bg-prim-1 p-2 text-xl font-semibold text-off-white hover:underline hover:opacity-90"
          type="submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
