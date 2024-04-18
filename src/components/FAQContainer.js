import FAQItem from './FAQItem';

const FAQContainer = () => {
  const faqs = [
    {
      question: "What is trackage?",
      answer: "I'm baby mukbang pinterest ascot, roof party flannel hexagon offal copper mug umami edison bulb mumblecore. Pinterest pour-over vegan biodiesel mixtape, vexillologist kitsch hexagon everyday carry..",
    },
    {
      question: "How do I track my package?",
      answer: "I'm baby mukbang pinterest ascot, roof party flannel hexagon offal copper mug umami edison bulb mumblecore. Pinterest pour-over vegan biodiesel mixtape, vexillologist kitsch hexagon everyday carry..",
    },
    {
      question: "What does different tracking statuses mean?",
      answer: "I'm baby mukbang pinterest ascot, roof party flannel hexagon offal copper mug umami edison bulb mumblecore. Pinterest pour-over vegan biodiesel mixtape, vexillologist kitsch hexagon everyday carry..",
    },
    {
        question: "What should I do if my package is delayed or lost?",
        answer: "I'm baby mukbang pinterest ascot, roof party flannel hexagon offal copper mug umami edison bulb mumblecore. Pinterest pour-over vegan biodiesel mixtape, vexillologist kitsch hexagon everyday carry..",
      },
      {
        question: "Is my personal information secure?",
        answer: "I'm baby mukbang pinterest ascot, roof party flannel hexagon offal copper mug umami edison bulb mumblecore. Pinterest pour-over vegan biodiesel mixtape, vexillologist kitsch hexagon everyday carry..",
      },
  ];

  return (
    <div className="w-full">
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQContainer;
