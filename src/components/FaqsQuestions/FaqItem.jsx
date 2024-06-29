import PropTypes from "prop-types";
import { useRef, useEffect, useState } from "react";

// Reusable constants for class names
const containerBaseClass = "py-4 transition-all duration-300 ease-in-out";
const containerOpenClass =
  "bg-white rounded-2xl shadow-lg h-auto lg:p-10 p-6 mb-8 mt-8 ";
const containerCloseClass = "mb-0 mt-0";
const titleBaseClass =
  "text-lg font-semibold transition-colors duration-300 ease-in-out";
const titleOpenClass = "text-blue-600";

const FaqItem = ({
  question,
  answer,
  isOpen,
  toggleAnswer,
  PlusIcon,
  MinusIcon,
}) => {
  const [height, setHeight] = useState(0);
  const answerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setHeight(answerRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <>
      <div
        className={`${containerBaseClass} ${
          isOpen ? containerOpenClass : containerCloseClass
        }`}
      >
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={toggleAnswer}
        >
          <h4 className={`${titleBaseClass} ${isOpen ? titleOpenClass : ""}`}>
            {question}
          </h4>
          {isOpen ? <MinusIcon /> : <PlusIcon />}
        </div>
        <div
          ref={answerRef}
          style={{ height }}
          className="overflow-hidden transition-all duration-300 ease-in-out"
        >
          <p className="mt-2">{answer}</p>
        </div>
      </div>
      <div className="w-full bg-black h-0.5"></div>
    </>
  );
};

FaqItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleAnswer: PropTypes.func.isRequired,
  PlusIcon: PropTypes.elementType.isRequired,
  MinusIcon: PropTypes.elementType.isRequired,
};

export default FaqItem;
