import FAQ from "./FAQ";
import type { QAndA } from "../../types";

const FAQS: QAndA[] = [
  {
    question: "Do you have a physical store?",
    answer: "No, we are an online store only.",
  },
  {
    question: "Do you ship outside the United States?",
    answer: "No, we currently only ship orders within the United States.",
  },
  {
    question: "Can I pick up my order from your office?",
    answer: "No, we do not have a pickup process at this time.",
  },
  {
    question: "Can I return my item for a refund?",
    answer:
      "We can refund your purchase if we receieve the item within 30 days" +
      " of your original purchase. Items must be free of damage, and apparel items" +
      " must be clean and unworn. Please send all returns to Blood Incantation Web Store" +
      " Returns Office, 123 Fake Street, Littleton, MA 01460.",
  },
  {
    question: "How long does it take for my order to arrive after purchase?",
    answer:
      "Orders take two business days to process and ship. Once your order is" +
      " shipped, it should arrive within five to seven business days. Faster shipping" +
      " can also be selected at checkout for  an additional fee.",
  },
  {
    question: "Can I split my order into multiple shipments?",
    answer:
      "No, all orders are shipped together in one package, except under extreme" +
      " or unusual circumstances",
  },
  {
    question: "How can I track my package?",
    answer:
      "Shipping details, including your tracking number, are provided via email once" +
      " your order has shipped. If you do not receive an email, make sure the email is not in" +
      " your spam folder.",
  },
];

function FAQPage() {
  return (
    <div className="flex flex-col gap-6 basis-full w-full max-w-screen-lg px-6 sm:px-12">
      <h1 className="font-semibold uppercase text-4xl sm:text-7xl">FAQs</h1>
      <div className="flex flex-col">
        {FAQS.map((faq) => (
          <FAQ faq={faq} />
        ))}
      </div>
    </div>
  );
}

export default FAQPage;
