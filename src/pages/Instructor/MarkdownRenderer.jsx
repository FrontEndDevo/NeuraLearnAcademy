// src/MarkdownRenderer.js
import ReactMarkdown from "react-markdown";

const MarkdownRenderer = ({ markdownData }) => {
  if (markdownData === "null") markdownData = "Sorry there are not data";
  return (
    <div className="container p-4 mx-auto">
      <div className={`w-full p-2 border`}>
        <ReactMarkdown>{markdownData}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownRenderer;
