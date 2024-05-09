import { useState } from "react";
import { contact } from "../../services/contact";
import TextInput from "./TextInput";
import Message from "./Message";
import type { FormEvent } from "react";
import type {
  ContactFormData,
  ContactForm as ContactFormType,
} from "../../types";

type ContactFormProps = {
  setMessageId: React.Dispatch<React.SetStateAction<string>>;
};

const DEFAULT_FORM = {
  name: {
    value: "",
    error: "",
  },
  email: {
    value: "",
    error: "",
  },
  subject: {
    value: "",
    error: "",
  },
  message: {
    value: "",
    error: "",
  },
};

function ContactForm({ setMessageId }: ContactFormProps) {
  const [serverError, setServerError] = useState("");
  const [form, setForm] = useState<ContactFormType>(DEFAULT_FORM);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Flag tracking presence of errs
    let doNotSubmit = false;

    // Set error message for missing fields
    const updated = { ...form };
    let j: keyof typeof updated;
    for (j in updated) {
      if (!updated[j].value) {
        updated[j].error = "This field is required.";
        doNotSubmit = true;
      }
    }
    setForm(updated);

    // Do not submit a form with errors
    if (doNotSubmit) {
      setIsLoading(false);
      return;
    }

    // Send form data and handle possible server error
    const finalForm: ContactFormData = {};
    let k: keyof typeof form;
    for (k in form) {
      finalForm[k] = form[k].value;
    }
    const { data } = await contact.sendMail(finalForm);
    const { error, id } = data;

    if (error) {
      setServerError(error);
    } else {
      setMessageId(id);
    }

    setIsLoading(false);
  };

  const errorMessage = (
    <p className="text-blood">
      Sorry, we are experiencing some server issues. Please try again later.
    </p>
  );

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {serverError && errorMessage}
      <div className="flex flex-col gap-3 leading-[18.4px]">
        <TextInput
          id="name"
          label="Name"
          value={form.name.value}
          setForm={setForm}
          error={form.name.error}
        />
        <TextInput
          id="email"
          label="Email"
          value={form.email.value}
          setForm={setForm}
          error={form.email.error}
        />
        <TextInput
          id="subject"
          label="Subject"
          value={form.subject.value}
          setForm={setForm}
          error={form.subject.error}
        />
        <Message
          value={form.message.value}
          setForm={setForm}
          error={form.message.error}
        />
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="disabled:bg-blood disabled:opacity-50 uppercase min-w-12 px-6 py-3 border border-black text-center hover:bg-blood"
      >
        {isLoading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

export default ContactForm;
