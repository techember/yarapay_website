import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is YaraPay?",
    answer:
      "YaraPay is a modern digital payment app that allows you to recharge, pay bills, and book travel — all in one secure platform.",
  },
  {
    question: "Is YaraPay safe to use?",
    answer:
      "Absolutely! YaraPay uses bank-grade encryption and secure payment gateways to keep your transactions completely safe.",
  },
  {
    question: "Do I get rewards on payments?",
    answer:
      "Yes! YaraPay offers cashback, rewards, and exclusive discounts on recharges, payments, bookings, and more.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply download the YaraPay app, sign up with your mobile number, and start using all services instantly.",
  },
  {
    question: "Does YaraPay support all operators?",
    answer:
      "Yes, YaraPay supports all major mobile operators and DTH providers.",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faqs"
      className="
        bg-gradient-to-br
        from-[#f3e8ff] 
        via-[#e8d6ff] 
        to-[#f0e6ff] 
        py-24
      "
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-[#471d7d] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#3a1667] text-lg">
            Quick answers to help you get the most out of YaraPay.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="
                bg-white 
                rounded-2xl 
                shadow-lg 
                border border-[#ead6ff]
                transition-all 
                duration-300
              "
            >
              <button
                onClick={() => toggleFaq(index)}
                className="
                  w-full 
                  flex justify-between items-center 
                  px-6 py-4 
                  text-left 
                  font-semibold 
                  text-[#471d7d]
                  focus:outline-none
                "
              >
                {faq.question}

                <ChevronDown
                  className={`w-6 h-6 text-[#7c3aed] transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Expanded Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-4 text-[#3a1667] leading-relaxed">
                  {faq.answer}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
