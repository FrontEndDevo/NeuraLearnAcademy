import React, { useState } from 'react';

const ChatBotComponent = () => {
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]);

    const handleInputChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSendMessage = () => {
        if (message.trim() !== '') {
            setChatHistory([...chatHistory, message.trim()]);
            setMessage('');
        }
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="bg-gray-200 w-64 p-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                    New Chat
                </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-4">
                {/* Chat History */}
                <div className="h-full overflow-y-auto">
                    {chatHistory.map((msg, index) => (
                        <div key={index} className="my-2">
                            <p className="bg-gray-200 p-2 rounded">{msg}</p>
                        </div>
                    ))}
                </div>

                {/* Input Area */}
                <div className="absolute bottom-0 left-0 right-0 bg-white p-4 border-t">
                    <div className="flex">
                        <input
                            type="text"
                            className="flex-1 border rounded-l px-4 py-2"
                            placeholder="Type your message..."
                            value={message}
                            onChange={handleInputChange}
                        />
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
                            onClick={handleSendMessage}
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatBotComponent;
