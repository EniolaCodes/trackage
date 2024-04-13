import { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border bg-blue-50 mb-4 rounded">
      <button onClick={toggleAccordion} className="flex items-center justify-between w-full">
        <h2 className="text-xl p-2">{question}</h2>
        <svg className="w-4 h-4 transition-transform transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M19 9l-7 7-7-7" : "M5 15l7-7 7 7"} />
        </svg>
      </button>
      {isOpen && <p className="mt-2 p-2 font-semibold">{answer}</p>}
    </div>
  );
};

export default FAQItem;
