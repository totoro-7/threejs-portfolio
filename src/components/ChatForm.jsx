import { useState } from "react";
import { useRef } from "react";

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
    const inputRef = useRef();

    const [message, setMessage] = useState("");
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if(!userMessage) return;
        inputRef.current.value = "";
        setMessage("");

        // Update chat history with the user's message
        setChatHistory((history) => [...history, {role: "user", text: userMessage }])

        // Delay 600 ms before showing "Thinking..." and generating response
        setTimeout(() => {
            // Add "Thinking..." placeholder for bot
            setChatHistory((history) => [...history, {role: "model", text: "Thinking..." }]);

            // Call function to generate bot response
            generateBotResponse([...chatHistory, {role: "user", text: `Using the details above, please address this query: ${userMessage}` }]);
        }, 600);
    }

    return (
        <form className="chatbot-form flex items-center gap-2 border border-gray-300 rounded-xl px-2 py-1
        focus-within:ring-1 focus-within:ring-blue-400" onSubmit={handleFormSubmit}>
            <input
                ref={inputRef}
                type="text"
                placeholder="Message..."
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 px-4 py-2 rounded-md bg-white text-sm focus:outline-none"
                required
            />
            {message.trim() && (
                <button className="items-center justify-center bg-blue-300 p-2 rounded-full hover:bg-blue-200">
                    <img src="/images/up-arrow.png" alt="arrow" />
                </button>
            )}
        </form>
    )
}

export default ChatForm;