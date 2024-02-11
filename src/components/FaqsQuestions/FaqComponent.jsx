import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PlusIcon = () => (
  <span className="text-3xl text-black transition-colors duration-300 ease-in-out">
    +
  </span>
);

const MinusIcon = () => (
  <span className="text-3xl text-blue-600 transition-colors duration-300 ease-in-out">
    -
  </span>
);

const ArrowRightIcon = () => (
  <span className="text-2xl text-blue-600 ">&gt;&gt;</span>
);

const FaqItem = ({ question, answer, isOpen, toggleAnswer }) => (
  <>
    <div
      className={`py-4 ${
        isOpen
          ? "bg-white rounded-2xl shadow-lg h-auto lg:p-10 p-6 mb-8 mt-8 transition-all duration-300 ease-in-out"
          : ""
      }`}
    >
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={toggleAnswer}
      >
        <h4
          className={`text-lg font-semibold ${
            isOpen ? "text-blue-600" : ""
          } transition-colors duration-300 ease-in-out`}
        >
          {question}
        </h4>
        {isOpen ? <MinusIcon /> : <PlusIcon />}
      </div>
      {isOpen && <p className="mt-2">{answer}</p>}
    </div>
    <div className="w-full bg-black h-0.5"></div>
  </>
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
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      {faqs.slice(0, 10).map((faq, index) => (
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
    <div className="min-h-screen pt-3 pb-10 text-black">
      <div className="max-w-screen-lg p-4 mx-auto md:mt-12">
        <div className="relative flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-black">Top FAQs</h2>
          <Link
            to="/all-faqs"
            className="text-2xl font-bold duration-200 text-primary-500 hover:text-primary-700"
          >
            All FAQs <ArrowRightIcon />
          </Link>
        </div>

        <div className="relative flex items-center justify-between flex-grow w-11/12 mt-0 mb-12 ml-auto mr-auto">
          <div className="relative flex items-center">
            <div className="w-3 h-3 bg-black rounded-full"></div>
          </div>
          <div className="flex-grow h-1 bg-black"></div>
          <div className="relative flex items-center">
            <div className="w-3 h-3 bg-black rounded-full"></div>
          </div>
        </div>
        <FaqList faqs={faqs} />
      </div>
    </div>
  );
};

export default FaqComponent;
