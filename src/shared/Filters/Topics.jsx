import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTopic } from "../../redux/slices/Filters/topics";

const topics = [
  { topic: "Python", totalCourses: 10 },
  { topic: "C++", totalCourses: 5 },
  { topic: "JavaScript", totalCourses: 15 },
  { topic: "Java", totalCourses: 8 },
  { topic: "Ruby", totalCourses: 3 },
  { topic: "Go", totalCourses: 2 },
  { topic: "Swift", totalCourses: 6 },
  { topic: "Rust", totalCourses: 4 },
  { topic: "PHP", totalCourses: 7 },
  { topic: "HTML", totalCourses: 12 },
  { topic: "CSS", totalCourses: 9 },
];
const Topics = () => {
  const [areTopicsOpen, setAreTopicsOpen] = useState(true);
  const [showMore, setShowMore] = useState(false);

  const dispatch = useDispatch();

  const selectTopicHandler = (topic) => {
    dispatch(toggleTopic(topic.target.value));
  };

  // Render all topics.
  const allTopics = topics
    .slice(0, showMore ? topics.length : 5)
    .map((item, index) => (
      <li key={index} className="flex items-center mb-2 text-sm">
        <input
          type="checkbox"
          id={item.topic}
          name={item.topic}
          value={item.topic}
          className="mr-2"
          onChange={selectTopicHandler}
        />
        <label htmlFor={item.topic} className="mr-1 font-semibold capitalize">
          {item.topic}
        </label>
        <span className="text-gray-500 text-opacity-60 ">
          ({item.totalCourses})
        </span>
      </li>
    ));
  return (
    <div className="py-4 border-b-2">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Topics</h2>
        <FontAwesomeIcon
          icon={faAngleDown}
          onClick={() => setAreTopicsOpen((prevState) => !prevState)}
          className={`duration-300 mr-2 text-zinc-800 cursor-pointer ${
            areTopicsOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {areTopicsOpen && (
        <ul
          className={
            !showMore &&
            topics.length > 5 &&
            "relative overflow-hidden before:absolute before:bottom-0 before:left-0 before:w-full before:h-1/4 before:bg-white before:opacity-80 before:shadow-innerwhite"
          }
        >
          {allTopics}
        </ul>
      )}
      {areTopicsOpen && topics.length > 5 && (
        <button
          className="flex items-center gap-1 font-bold text-sm duration-300 cursor-pointer text-[#5624D8] hover:text-[#401b9c]"
          onClick={() => setShowMore((prevState) => !prevState)}
        >
          {showMore ? "Show less" : "Show more"}
          <FontAwesomeIcon
            icon={faAngleDown}
            className={`duration-300 mr-2 text-zinc-800 cursor-pointer ${
              showMore ? "rotate-180" : ""
            }`}
          />
        </button>
      )}
    </div>
  );
};

export default Topics;
