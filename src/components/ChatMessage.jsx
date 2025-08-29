const ChatMessage = ({chat}) => {
    const isBot = chat.role === "model";

    return (
        !chat.hideInChat && (
            <div className={`message flex ${isBot ? "justify-start" : "justify-end"} 
            ${chat.isError ? "text-red-500" : ""} mb-2 px-2`}>
                {/* Bot message with avatar */}
                {isBot && (
                    <div className="flex items-start gap-2 max-w-[75%]"> 
                    <img 
                        className="w-6 h-6 rounded-full bg-blue-300 p-1 mt-0.5"
                        src="/images/chatbot-avatar.png"
                        alt="Chatbot Avatar" 
                    />
                    <p className={`message-text px-2 py-2 text-sm bg-blue-200 border border-blue-300 rounded-lg rounded-bl-none break-words whitespace-pre-line`}>
                        {chat.text}
                    </p>
                </div>
            )}
            {/* User message without avatar, aligned right */}
            {!isBot && (
                <div className="flex items-end justify-end max-w-[75%] ml-auto">
                    <p className={`message-text px-2 py-2 text-sm bg-blue-300 border border-blue-200 rounded-lg rounded-br-none break-words whitespace-pre-line`}>
                        {chat.text}
                    </p>
                </div>
            )}
        </div>
        )
    );
};

export default ChatMessage;