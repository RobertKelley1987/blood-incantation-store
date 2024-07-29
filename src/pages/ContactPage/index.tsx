import { useState } from "react";
import ContactForm from "./ContactForm";
import SuccessMessage from "./SuccessMessage";

function ContactPage() {
  // Message id from backend confirming the message was sent
  const [messageId, setMessageId] = useState("");

  return (
    <div className="flex flex-col gap-6 sm:gap-12 w-full max-w-screen-sm px-6 sm:px-12">
      <h1 className="w-full text-4xl sm:text-7xl font-semibold text-center uppercase">
        Contact
      </h1>
      {messageId ? (
        <SuccessMessage />
      ) : (
        <ContactForm setMessageId={setMessageId} />
      )}
    </div>
  );
}

export default ContactPage;
