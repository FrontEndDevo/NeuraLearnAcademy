import React, { useState } from "react";
import AIAssistantImage from "../../assets/images/homepage/bot.png"; // Replace with your actual image file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const ChatBotComponent = () => {
    const [message, setMessage] = useState("");
    const [chatHistory, setChatHistory] = useState([]);
    const [showInitialText, setShowInitialText] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    const handleInputChange = (e) => {
        setMessage(e.target.value);
        setShowInitialText(e.target.value.trim() === "");
    };

    const handleSendMessage = () => {
        if (message.trim() !== "") {
            setChatHistory([...chatHistory, message.trim()]);
            setMessage("");
        }
    };

    return (
        <div className="flex h-screen w-full relative">
            {/* Sidebar */}
            {isOpen && (
                <div className="bg-stone-50 w-64 h-full flex flex-col justify-between absolute top-0 left-0 z-10">
                    <button className="flex justify-center opacity-90 text-black text-[17px] tracking-wide bg-white hover:bg-slate-50 transition duration-700 rounded-[25px] shadow-md py-2 mt-10 mx-8 font-bold">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
                            />
                        </svg>
                        New Chat
                    </button>
                </div>
            )}

            {/* Chat Area */}
            <div className="flex-1 p-4 relative bg-neutral-100 shadow w-full">
                <button
                    className="fixed top-4 left-72 bg-gray-800 text-white p-2 rounded-md"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? "Close" : "Open"}
                </button>

                {/* Initial Text and Image */}
                {showInitialText && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-00 text-2xl flex flex-col items-center">
                        <img
                            src={AIAssistantImage}
                            alt="AI Assistant"
                            className="w-20 mb-4"
                        />
                        <span className="text-sky-800 text-[26px] font-bold font-['Outfit'] tracking-wide">
                            Ask Nerualearn AI assistant ?
                        </span>
                    </div>
                )}

                {/* Chat History */}
                <div className="h-full overflow-y-auto">
                    {chatHistory.map((msg, index) => (
                        <div key={index} className="my-2 flex justify-center">
                            <p className="">{msg}</p>
                        </div>
                    ))}
                </div>

                {/* Input Area */}
                <div className="absolute bottom-5 left-0 right-0 p-4 flex justify-center">
                    <div className="md:w-3/5 flex md:space-x-6">
                        <input
                            type="text"
                            className="flex-1  border-2 px-8 py-2 bg-gray-100 rounded-[25px] text-neutral-600 text-[15px] font-normal font-['Outfit'] tracking-wide"
                            placeholder="Message me I can help you for any question about the course material ..."
                            value={message}
                            onChange={handleInputChange}
                        />
                        <button
                            className=" text-sky-800 hover:text-sky-900 transition duration-700 font-bold py-2 px-4 rounded-r"
                            onClick={handleSendMessage}
                        >
                            {" "}
                            <FontAwesomeIcon className="text-xl" icon={faPaperPlane} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatBotComponent;
