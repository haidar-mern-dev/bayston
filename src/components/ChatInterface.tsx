/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";

type Message = {
  text: string;
  sender: "user" | "bot";
  type: "text" | "plot" | "image";
  plotData?: any;
};

interface ChatInterfaceProps {
  messages: Message[];
  onSendMessage: (message: string, endpoint: string) => void;
  isLoading: boolean;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({
  messages,
  onSendMessage,
  isLoading,
}) => {
  const [input, setInput] = useState("");
  const [selectedEndpoint, setSelectedEndpoint] = useState("getAnswerText");
  const [copiedMessageIndex, setCopiedMessageIndex] = useState<number | null>(
    null
  );
  const [loadingDots, setLoadingDots] = useState("");
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (isLoading) {
      intervalId = setInterval(() => {
        setLoadingDots((dots) => (dots.length < 3 ? dots + "." : ""));
      }, 500);
    } else {
      setLoadingDots("");
    }
    return () => clearInterval(intervalId);
  }, [isLoading]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage(input, selectedEndpoint);
      setInput("");
    }
  };

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setCopiedMessageIndex(index);
        setTimeout(() => setCopiedMessageIndex(null), 2000);
      },
      (err) => {
        console.error("Failed to copy text: ", err);
      }
    );
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${
              message.sender === "user" ? "text-right" : "text-left"
            }`}
          >
            <div
              className={`inline-block p-2 rounded-lg ${
                message.sender === "user"
                  ? "bg-green-200 text-green-900"
                  : "bg-gray-200 text-gray-900"
              }`}
            >
              {message.type === "image" ? (
                <img
                  src={message.text}
                  alt="Generated plot"
                  className="max-w-full h-auto"
                />
              ) : (
                <p className="whitespace-pre-wrap">{message.text}</p>
              )}
              {message.sender === "bot" && selectedEndpoint !== "getAnswerArticle" &&(
                <div className="flex justify-end mt-2">
                  <button
                    onClick={() => handleCopy(message.text, index)}
                    className={`px-2 py-1 text-xs rounded transition-colors ${
                      copiedMessageIndex === index
                        ? "bg-green-700 text-white"
                        : "bg-green-500 text-white hover:bg-green-600"
                    }`}
                  >
                    {copiedMessageIndex === index ? "Copied" : "Copy"}
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="relative inline-block p-2 rounded-lg bg-gray-200 text-gray-900">
              <p className="whitespace-pre-wrap">Loading{loadingDots}</p>
            </div>
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit} className="p-4 bg-white border-t">
        <div className="flex items-center mb-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Type your message..."
          />
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-r-md hover:bg-green-600 transition-colors"
          >
            Send
          </button>
        </div>
        <div className="flex space-x-2">
          <button
            type="button"
            onClick={() => setSelectedEndpoint("getAnswerText")}
            className={`px-2 py-1 rounded ${
              selectedEndpoint === "getAnswerText"
                ? "bg-green-500 text-white"
                : "bg-gray-200"
            }`}
          >
            Text
          </button>
          <button
            type="button"
            onClick={() => setSelectedEndpoint("getAnswerArticle")}
            className={`px-2 py-1 rounded ${
              selectedEndpoint === "getAnswerArticle"
                ? "bg-green-500 text-white"
                : "bg-gray-200"
            }`}
          >
            Research
          </button>
          <button
            type="button"
            onClick={() => setSelectedEndpoint("getAnswerPresentation")}
            className={`px-2 py-1 rounded ${
              selectedEndpoint === "getAnswerPresentation"
                ? "bg-green-500 text-white"
                : "bg-gray-200"
            }`}
          >
            Presentation
          </button>
          <button
            type="button"
            onClick={() => setSelectedEndpoint("getAnswerGraph")}
            className={`px-2 py-1 rounded ${
              selectedEndpoint === "getAnswerGraph"
                ? "bg-green-500 text-white"
                : "bg-gray-200"
            }`}
          >
            Graph
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatInterface;