import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

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
  const [selectedTopics, setSelectedTopics] = useState([]);
  console.log(selectedTopics);
  const selectTopicHandler = (e) => {
    const selectedTopic = e.target.value;
    if (selectedTopics.includes(selectedTopic)) {
      setSelectedTopics((prevTopics) =>
        prevTopics.filter((topic) => topic !== selectedTopic)
      );
    } else {
      setSelectedTopics((prevTopics) => [...prevTopics, selectedTopic]);
    }
  };

  // Render all topics.
  const allTopics = topics
    .slice(0, showMore ? topics.length : 5)
    .map((item, index) => (
      <div key={index} className="flex items-center mb-2 text-sm">
        <input
          type="checkbox"
          id={item.topic}
          name={item.topic}
          value={item.topic}
          className="mr-2"
          checked={selectedTopics.includes(item.topic)}
          onChange={selectTopicHandler}
        />
        <label htmlFor={item.topic} className="mr-1 font-semibold capitalize">
          {item.topic}
        </label>
        <span className="text-gray-500 text-opacity-60 ">
          ({item.totalCourses})
        </span>
      </div>
    ));

  return (
    <div className="py-4 border-b-2">
      <div className="items-center justify-between hidden mb-4 md:flex">
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
        <div>
          {allTopics}
          {topics.length > 5 && (
            <button onClick={() => setShowMore((prevState) => !prevState)}>
              {showMore ? "Show Less" : "Show More"}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Topics;
