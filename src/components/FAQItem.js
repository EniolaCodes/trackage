import { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border bg-blue-50 py-4 mb-8 rounded">
      <button onClick={toggleAccordion} className="flex items-center justify-between w-full">
        <h2 className="text-lg font-semibold">{question}</h2>
        <svg className="w-6 h-6 transition-transform transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M19 9l-7 7-7-7" : "M5 15l7-7 7 7"} />
        </svg>
      </button>
      {isOpen && <p className="mt-2">{answer}</p>}
    </div>
  );
};

export default FAQItem;
