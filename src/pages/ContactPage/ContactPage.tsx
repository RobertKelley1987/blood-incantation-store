import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { contact } from "../../services/contact";
import Message from "./Message";
import TextInput from "./TextInput";
import type { FormEvent } from "react";

function ContactPage() {
  const navigate = useNavigate();
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const subject = useRef<HTMLInputElement>(null);
  const message = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const formData = {
      name: name.current?.value,
      email: email.current?.value,
      subject: subject.current?.value,
      message: message.current?.value,
    };

    const { data } = await contact.sendMail(formData);
    const { error } = data;
    if (error) {
      navigate("/server-error");
    }
  };

  return (
    <div className="flex flex-col gap-12 w-full max-w-screen-sm">
      <h1 className="w-full text-5xl sm:text-7xl font-semibold text-center uppercase">
        Contact
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col gap-3 leading-[18.4px]">
          <TextInput id="name" label="Name" ref={name} />
          <TextInput id="email" label="Email" ref={email} />
          <TextInput id="subject" label="Subject" ref={subject} />
          <Message ref={message} />
        </div>
        <button
          type="submit"
          className="uppercase min-w-12 px-6 py-3 border border-black text-center hover:bg-blood"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactPage;
