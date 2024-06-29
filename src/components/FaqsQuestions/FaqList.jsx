import PropTypes from "prop-types";
import { useState } from "react";
import FaqItem from "./FaqItem";


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

export default FaqList;