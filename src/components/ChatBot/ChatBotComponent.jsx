import { useState, useEffect } from "react";
import AIAssistantImage from "../../assets/images/homepage/bot.png"; // Replace with your actual image file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { chatBot } from "../../redux/actions/courses-methods";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const ChatBotComponent = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState(() => {
    const savedChatHistory = localStorage.getItem("chatHistory");
    return savedChatHistory ? JSON.parse(savedChatHistory) : [];
  });
  const [loading, setLoading] = useState(false);
  const questionAnswer = useSelector((state) => state.courses.questionAnswer);
  const [showInitialText, setShowInitialText] = useState(
    chatHistory.length === 0
  );
  const slug = useParams();
  const dispatch = useDispatch();
  const access = useSelector((state) => state.userAuth.access);

  useEffect(() => {
    if (questionAnswer) {
      setChatHistory((prevChatHistory) => {
        const updatedChatHistory = prevChatHistory.map((item, index) => {
          if (index === prevChatHistory.length - 1 && item.answer === "") {
            return { ...item, answer: questionAnswer.answer };
          }
          return item;
        });
        localStorage.setItem("chatHistory", JSON.stringify(updatedChatHistory));
        return updatedChatHistory;
      });
      setLoading(false); // Hide loading indicator
    }
  }, [questionAnswer]);

  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
  }, [chatHistory]);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
    setShowInitialText(
      e.target.value.trim() === "" && chatHistory.length === 0
    );
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() !== "") {
      const newMessage = { question: message.trim(), answer: "" };
      const updatedChatHistory = [...chatHistory, newMessage];
      setChatHistory(updatedChatHistory);
      setMessage("");
      setLoading(true); // Show loading indicator
      const chat_history = updatedChatHistory.map((chat) => chat.question);
      localStorage.setItem("chatHistory", JSON.stringify(updatedChatHistory));
      chatBot(dispatch, access, slug.slug, message, chat_history, 3);
    }
  };

  const handleClearChat = () => {
    setChatHistory([]);
    localStorage.removeItem("chatHistory");
    setShowInitialText(true);
  };

  return (
    <div className="relative flex w-full h-screen">
      {/* Chat Area */}
      <div className="relative flex-1 w-full p-4">
        {/* Initial Text and Image */}
        {showInitialText && (
          <div className="flex flex-col items-center text-2xl text-center md:mb-52 text-gray-00">
            <img
              src={AIAssistantImage}
              alt="AI Assistant"
              className="w-20 mb-4"
            />
            <span className="text-sky-800 text-[26px] font-bold font-['Outfit'] tracking-wide">
              Ask Neuralearn AI assistant?
            </span>
          </div>
        )}

        {/* Chat History */}
        <div className={`h-full overflow-y-auto`}>
          {chatHistory.map((chat, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-end">
                <p className="w-auto h-auto px-5 py-2 text-white bg-[#2F2F2F] rounded-3xl">
                  {chat.question}
                </p>
              </div>
              {chat.answer ? (
                <div className="flex justify-start mt-2">
                  <p className="w-auto h-auto px-5 py-2 text-white bg-[#1F1F1F] rounded-3xl">
                    {chat.answer}
                  </p>
                </div>
              ) : (
                loading && (
                  <div className="flex justify-start mt-2">
                    <div className="flex items-center">
                      <div className="w-6 h-6 mr-1 bg-gray-500 rounded-full animate-bounce"></div>
                      <div className="w-6 h-6 mr-1 bg-gray-500 rounded-full animate-bounce"></div>
                      <div className="w-6 h-6 bg-gray-500 rounded-full animate-bounce"></div>
                    </div>
                  </div>
                )
              )}
            </div>
          ))}

          {/* Input Area */}
          <div
            className={`flex flex-wrap justify-center p-4 mt-5 bottom-5 md:flex-nowrap md:flex-row flex-col-reverse items-center gap-5 ${
              showInitialText ? "" : "md:mt-[22.2rem] mt-[11.3rem] "
            }`}
          >
            <button
              className="opacity-90 text-black text-[17px] tracking-wide bg-white rounded-[25px] shadow-md py-2 md:mx-8 font-bold px-5 w-44"
              onClick={handleClearChat}
            >
              Clear Chat
            </button>
            <form
              className="flex md:w-3/5 md:space-x-6"
              onSubmit={handleSendMessage}
            >
              <input
                type="text"
                className="w-60 flex-1 border-2 border-[#1F1F1F] px-4 md:px-8 py-2 bg-gray-100 rounded-[25px] text-neutral-600 text-[15px] font-normal font-['Outfit'] tracking-wide outline-none"
                placeholder="Message me I can help you for any question about the course material ..."
                value={message}
                onChange={handleInputChange}
                required
              />
              <button className="px-1 py-2 font-bold transition duration-700 rounded-r md:px-4 text-sky-800 hover:text-sky-900">
                <FontAwesomeIcon className="text-xl" icon={faPaperPlane} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBotComponent;
