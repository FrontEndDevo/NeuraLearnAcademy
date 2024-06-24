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
      question: "How do I sign up for an account on the platform?",
      answer:
        "To sign up for an account, click on the 'Sign Up' button on the homepage and fill out the required information, including your name, email address, and password. Once submitted, you'll receive a confirmation email to verify your account.",
    },
    {
      question: "How can I search for courses on the platform?",
      answer:
        "You can search for courses by using the search bar located at the top of the page. Simply enter relevant keywords or topics related to the course you're interested in, and the platform will display matching results.",
    },
    {
      question:
        "Are the courses on this platform self-paced or instructor-led?",
      answer:
        "The courses on our platform can vary in their delivery format. Some courses are self-paced, allowing you to learn at your own speed, while others may be instructor-led, with scheduled lectures and assignments. The course details page will provide information on the format of each course.",
    },
    {
      question: "Can I access the course materials after completing a course?",
      answer:
        "Yes, once you complete a course, you will still have access to the course materials, including videos, lecture notes, and any additional resources, so you can review them at any time.",
    },
    {
      question:
        "How can I contact the instructors if I have questions about a course?",
      answer:
        "Each course has a discussion forum or a dedicated messaging system where you can communicate with the instructors. You can post your questions there, and the instructors will respond to you.",
    },
    {
      question: "How does the platform ensure the quality of the courses?",
      answer:
        "We have a rigorous course review process in place. Our team evaluates courses based on various factors such as instructor expertise, course content, teaching methodology, and student feedback. This helps us maintain high-quality standards.",
    },
    {
      question:
        "Is the platform mobile-friendly? Can I access courses from my smartphone?",
      answer:
        "Yes, our platform is designed to be responsive and mobile-friendly. You can access and take courses from your smartphone or tablet using our mobile app or by accessing our website through your device's web browser.",
    },
    {
      question: "Are there any prerequisites for enrolling in a course?",
      answer:
        "Prerequisites vary depending on the course. Some courses may require prior knowledge or experience in a particular subject area, while others may be suitable for beginners. Course descriptions will outline any prerequisites, if applicable.",
    },
    {
      question: "Can I receive a certificate upon completing a course?",
      answer:
        "Yes, upon successfully completing a course, you will receive a certificate of completion. This certificate can be downloaded or shared directly from your profile. Certificates are a great way to showcase your skills and accomplishments to potential employers or educational institutions.",
    },
    {
      question: "Is there a refund policy if I'm not satisfied with a course?",
      answer:
        "We have a refund policy in place. If you are not satisfied with a course, you can request a refund within a specified period of time, typically within 30 days of purchase. More details about our refund policy can be found in our terms and conditions.",
    },
  ];

  return (
    <div className="min-h-screen pt-3 pb-10 text-black">
      <div className="max-w-screen-lg p-4 mx-auto md:mt-12">
        <div className="relative flex items-center justify-center mb-8">
          <h2 className="text-2xl font-bold text-black">Top FAQs</h2>
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
