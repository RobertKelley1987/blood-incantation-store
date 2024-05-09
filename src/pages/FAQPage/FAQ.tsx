import { useState } from "react";
import MinusSVG from "../../svgs/MinusSVG";
import PlusSVG from "../../svgs/PlusSVG";
import type { QAndA } from "../../types";

type FAQProps = {
  faq: QAndA;
};

const FAQ = ({ faq }: FAQProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div onClick={() => setIsOpen((prev) => !prev)}>
      <div className="grid grid-cols-[24px_auto] gap-3 border-b border-black p-3 hover:text-blood hover:cursor-pointer">
        {isOpen ? <MinusSVG className="" /> : <PlusSVG className="" />}
        <h2>{faq.question}</h2>
      </div>
      <div className="grid grid-cols-[24px_auto] gap-3">
        {isOpen && <p className="col-start-2 p-3">{faq.answer}</p>}
      </div>
    </div>
  );
};

export default FAQ;
