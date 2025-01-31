"use client";
import React, { useState, useEffect } from "react";

export default function DocumentEditor() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const updateDimensions = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      const width = screenWidth * 0.5;
      const height = screenHeight * 0.90;

      setDimensions({ width, height });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);


  return (
    <div className="flex min-h-screen bg-gray-900-100 p-4">
      {/* Document Editor (Left Side) */}
      <div className="flex flex-col items-center justify-center flex-grow">
      <h2 className="text-lg font-semibold text-white mb-2 text-center">Text Editor</h2>
        <div
          className="bg-zinc-500 shadow-lg border border-gray-200 p-6 overflow-auto"
          contentEditable
          style={{
            width: `${dimensions.width}px`,
            height: `${dimensions.height}px`,
          }}
        ></div>
      </div>

      {/* Chat Container (Right Side) */}
      <div className="bg-slate-500 w-1/4 flex flex-col border border-gray-300 shadow-lg rounded-lg p-4 ml-4">
      <h2 className="text-lg font-semibold text-white mb-2 text-center">Chat</h2>
        {/* Chat Messages */}
        <div className="flex-grow overflow-y-auto h-96 border-b border-gray-300 p-2 space-y-2">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={"p-2 rounded-md text-sm"}
            >
              {msg}
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div className="flex items-center mt-2">
          <input
            type="text"
            className="bg-gray-900 flex-grow p-2 border rounded-md"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter"}
          />
          <button
            className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
