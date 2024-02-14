import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import { faHandPointer } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const benifitsArray = [
  {
    icon: faCertificate,
    title: "Discover",
    content: "a wide variety of quality courses and specializations.",
  },
  {
    icon: faHandPointer,
    title: "Enroll",
    content: "join in with peers eager to learn–just like you.",
  },
  {
    icon: faCertificate,
    title: "Learn",
    content: "with world-class instructors and hone your professional.",
  },
  {
    icon: faCertificate,
    title: "Get Certified",
    content: "and boost your chances at launching or advancing your career.",
  },
];
const Benifits = () => {
  const items = benifitsArray.map((item, index) => (
    <li key={index}>
      <FontAwesomeIcon
        icon={item.icon}
        className="mb-6 text-teal-500"
        size="3x"
      />
      <h2 className="text-lg font-bold">{item.title}</h2>
      <p>{item.content} </p>
    </li>
  ));
  return (
    <ul className="relative z-0 grid w-full grid-cols-1 gap-5 p-3 mx-auto mt-8 text-center bg-white border shadow-md -mb-28 rounded-xl md:p-8 md:w-11/12 md:grid-cols-2 lg:grid-cols-5 md:text-left">
      <li>
        <p className="mb-6 text-2xl font-extrabold">
          Take the first step toward your new career
        </p>
        <FontAwesomeIcon
          icon={faArrowRight}
          className="text-red-500 rotate-90 md:rotate-0"
          size="3x"
        />
      </li>
      {items}
    </ul>
  );
};

export default Benifits;
