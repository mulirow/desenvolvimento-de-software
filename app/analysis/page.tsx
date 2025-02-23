"use client";
import React, { useState, useRef } from "react";
import Navbar from "../../components/Navbar";  // Import Navbar


export default function DocumentEditor() {
  interface Message {
    text: string;
    isUser: boolean;
  }

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isEditorVisible, setIsEditorVisible] = useState(true);
  const [loading, setLoading] = useState(false);
  const [editorContent, setEditorContent] = useState(""); // Store editor text
  const editorRef = useRef<HTMLDivElement>(null);

  // Toggle between Text Editor and Chat
  const toggleEditor = () => {
    setIsEditorVisible(!isEditorVisible);
  };

  // Function to handle text input in editor
  const handleEditorChange = () => {
    if (editorRef.current) {
      setEditorContent(editorRef.current.innerText);
    }
  };

  const invokeLLM = async () => {
    if (input.trim() === "") return;
  
    try {
      setLoading(true);
  
      // Get the latest editor content
      const editorText = editorContent;
  
      // Constructing a structured prompt
      const structuredPrompt = `The following text is currently in an editor:\n\n"${editorText}"\n\nNow, based on this provide opinions according to input, ${input}`;
  
      const payload = {
        prompt: structuredPrompt,
      };
  
      console.log("Payload being sent:", payload); // Debugging log
  
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: input, isUser: true },
      ]);
  
      const response = await fetch("/api/googleai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
  
      const data = await response.json();
      console.log("Response received:", data); // Debugging log
  
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: data.result, isUser: false },
      ]);
    } catch (error) {
      console.error("Error invoking LLM:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Erro ao processar a solicitação. Tente novamente.", isUser: false },
      ]);
    } finally {
      setLoading(false);
      setInput("");
    }
  };
  

  // Handle Enter key press in the chat input
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      invokeLLM();
    }
  };

  return (
    <div>
      <Navbar />
  
    <div className="relative flex flex-col md:flex-row min-h-screen bg-white p-4 max-w-full gap-12">
      {/* Toggle Button (Only visible on small screens) */}
      <button
        className="mb-4 self-center md:hidden bg-blue-500 text-black py-2 px-4 rounded-md hover:bg-blue-600"
        onClick={toggleEditor}
      >
        {isEditorVisible ? "Show Chat" : "Show Editor"}
      </button>

      {/* Main Container with Equal Heights */}
      <div className="flex flex-col md:flex-row w-full h-[85vh] gap-4">
        {/* Text Editor Section */}
        <div
          className={`flex flex-col w-full md:w-[70%] h-full transition-all mr-16 ${
            isEditorVisible ? "block" : "hidden"
          } md:flex`}
        >
          <h2 className="text-lg font-semibold text-black mb-2 text-center">
            Text Editor
          </h2>
          <div
            ref={editorRef}
            className="bg-slate-200 shadow-lg border border-gray-200 text-black p-6 overflow-auto flex-grow w-full h-full rounded-lg"
            contentEditable
            onInput={handleEditorChange} // Track changes in the editor
          ></div>
        </div>

        {/* Chat Container */}
        <div
          className={`bg-slate-200 w-full md:w-[30%] h-full flex flex-col border border-gray-300 shadow-lg rounded-lg p-6 transition-all ${
            isEditorVisible ? "hidden" : "block"
          } md:flex`}
        >
          <h2 className="text-lg font-semibold text-black mb-2 text-center">
            Chat
          </h2>
          {/* Chat Messages */}
          <div className="flex-grow overflow-y-auto border-b border-gray-300 p-2 space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-md text-sm ${
                  msg.isUser
                    ? "bg-light_blue text-white text-left"
                    : "bg-pink text-white"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="flex mt-2 relative">
            <input
              type="text"
              className="bg-slate-300 flex-grow p-2 border rounded-md w-full h-auto text-black pr-8"
              value={loading ? "..." : input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={loading}
            />
            <button
              className="ml-2 bg-light_blue text-white px-4 rounded-md hover:bg-blue-600"
              onClick={invokeLLM}
              disabled={loading}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
