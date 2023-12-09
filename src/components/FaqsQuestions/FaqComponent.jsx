import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"; 

const PlusIcon = () => <span>+</span>;
const MinusIcon = () => <span>-</span>;

const FaqItem = ({ question, answer, isOpen, toggleAnswer }) => (
  <div className={`border-b border-gray-200 py-4`}>
    <div
      className="flex justify-between items-center cursor-pointer"
      onClick={toggleAnswer}
    >
      <h4 className="text-lg font-semibold">{question}</h4>
      {isOpen ? (
        <MinusIcon className="text-white" />
      ) : (
        <PlusIcon className="text-white" />
      )}
    </div>
    {isOpen && <p className="mt-2">{answer}</p>}
  </div>
);

FaqItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleAnswer: PropTypes.func.isRequired,
};

const FaqList = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {faqs.map((faq, index) => (
        <FaqItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={index === openIndex}
          toggleAnswer={() => toggleAnswer(index)}
        />
      ))}
    </div>
  );
};

FaqList.propTypes = {
  faqs: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const FaqComponent = () => {
  const faqs = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "How do I install React?",
      answer: "You can install React using npm or yarn.",
    },
    {
      question: "How do I install React?",
      answer: "You can install React using npm or yarn.",
    },
    {
      question: "How do I install React?",
      answer: "You can install React using npm or yarn.",
    },
    {
      question: "How do I install React?",
      answer: "You can install React using npm or yarn.",
    },
    {
      question: "How do I install React?",
      answer: "You can install React using npm or yarn.",
    },
    {
      question: "How do I install React?",
      answer: "You can install React using npm or yarn.",
    },
    // Add more FAQs as needed
  ];

  return (
    <div className="bg-black text-white min-h-screen pt-3 pb-10">
      <div className="max-w-screen-lg mx-auto p-4 md:mt-12">
        <div className="flex items-center justify-between mb-8 relative">
          <h2 className="text-2xl font-bold text-white">Top FAQs</h2>
          <Link to="/all-faqs" className="text-2xl font-bold text-white">
            All FAQs
          </Link>
        </div>

        <div className="relative flex items-center justify-between flex-grow mb-5">
          <div className="flex items-center relative">
            <div className="absolute w-4 h-4 border-white border rounded-full left-10 md:left-20 top-0 z-10 bg-black"></div>
            <div className="w-4 h-4 border-white border rounded-full"></div>
          </div>
          <div className="h-1 bg-white flex-grow"></div>
          <div className="flex items-center relative">
            <div className="w-4 h-4 border-white border rounded-full"></div>
            <div className="absolute w-4 h-4 border-white border rounded-full right-10 md:right-20 top-0 z-10 bg-black"></div>
          </div>
        </div>

        <FaqList faqs={faqs} />
      </div>
    </div>
  );
};

export default FaqComponent;
