import ChatForm from "../components/ChatForm";
import ChatMessage from "../components/ChatMessage";
import { useEffect, useRef, useState } from "react";
import { personalInfo } from "../constants/personalInfo";

const Chatbot = () => {
    const [chatHistory, setChatHistory] = useState([
        { 
            hideInChat: true,
            role: "model",
            text: personalInfo
        }
    ]);
    const [showChatbot, setShowChatbot] = useState(false);
    const chatBodyRef = useRef();

    const generateBotResponse = async (history) => {

        // Helper function to update chat history
        const updateHistory = (text, isError = false) => {
            setChatHistory((prev) => [
                ...prev.filter(msg => msg.text !== "Thinking..."),
                { role: "model", text, isError }
            ]);
        }

        history = history.map(({role, text}) => ({role, parts: [{text}]})); 
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                contents: history
            })
        }

        try {
            // Make API call to get bot's response
            const response = await fetch(import.meta.env.VITE_API_URL, requestOptions);
            const data = await response.json();
            if (!response.ok) {
                // Handle error response
                throw new Error(data.error.message || "Something went wrong!");
            }

            // Clean and update chat history with bot's response
            const apiResponseText = data.candidates[0].content.parts[0].text.replace(/<\/?[^>]+(>|$)/g, "$1").
            trim();
            updateHistory(apiResponseText);

        } catch (error) {
            updateHistory(error.message, true);
        }

    }

    useEffect(() => {
        //Auto-scroll whenever chat history updates
        chatBodyRef.current.scrollTo({top: chatBodyRef.current.scrollHeight, behavior: "smooth"});
    }, [chatHistory])

    return (
        <div id="chatbot" className="fixed bottom-20 right-6 z-[2600] w-[min(92vw,384px)] max-h-[75vh] bg-white rounded-lg shadow-2xl flex flex-col overflow-hidden">
            <button onClick={() => setShowChatbot(prev => !prev)} className="fixed bottom-4 right-6 text-white p-4 rounded-full border border-grey-300 bg-black hover:bg-blue-100">
                {showChatbot ? " ✖ " : "💬"}
            </button>
            <div className={`chatbot-popup bg-white-50 text-black-50 rounded-lg flex flex-col overflow-hidden ${showChatbot ? "block" : "hidden"}`}>
                {/* Chatbot Header */}
                <div className="chatbot-header flex items-center justify-between bg-white-50 border-b px-4 py-2 rounded-t-lg">
                    <div className="header-info flex items-center gap-2">
                        <img className="bg-white-50 rounded-full px-1 py-1 w-6 h-6" src="/images/chatbot-avatar.png" alt="Chatbot Avatar" />
                        <h2 className="logo-text font-bold">Chatbot</h2>
                    </div>
                    <button onClick={() => setShowChatbot(prev => !prev)} className="bg-white-50 p-1 rounded-full hover:bg-blue-200">
                        <img src="/images/down-arrow.png" alt="arrow" />
                    </button>
                </div>

                {/* Chatbot Body */}
                <div ref={chatBodyRef} className="chatbot-body flex flex-col gap-2 h-[320px] overflow-y-auto px-4 py-2" >
                    <div className="message bot-message flex items-start gap-2">
                        <img className="w-6 h-6 rounded-full bg-blue-300 p-1 mt-0.5" src="/images/chatbot-avatar.png" alt="Chatbot Avatar" />
                        <p className="message-text px-2 py-2 text-sm bg-blue-200 border border-blue-300 rounded-lg rounded-bl-none break-words whitespace-pre-line">
                            Hello! How can I assist you today?
                        </p>
                    </div>

                    {chatHistory.map((chat, index) => (
                        <ChatMessage key={index} chat={chat} />
                    ))}

                </div>

                {/* Chatbot Footer */}
                <div className="chat-footer w-full border-t bg-white px-3 py-2">
                    <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse} />
                </div>


            </div>
        </div>

    )
}

export default Chatbot;