import { useEffect, useState } from "react";
import ContactForm from "./ContactForm";
import SuccessMessage from "./SuccessMessage";

function ContactPage() {
  // Message id from backend confirming the message was sent
  const [messageId, setMessageId] = useState("");

  // Scroll to top of page on render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col gap-12 w-full max-w-screen-sm px-6 sm:px-12">
      <h1 className="w-full text-5xl sm:text-7xl font-semibold text-center uppercase">
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
