"use client";
import { useState } from "react";
import { Room } from "./Room";
import { Editor } from "./Editor";

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const invokeLLM = async () => {
    if (prompt.trim() === '') return;

    try {
      const response = await fetch('/api/googleai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      setResponse(data.result);
    } catch (error) {
      console.error('Error invoking LLM:', error);
    } finally {
      setPrompt('');
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Collaborative Editor</h1>
      <Room>
        <Editor/>
      </Room>

      <h1 className="text-3xl font-bold mb-4">GoogleAI API Demo</h1>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt here"
        rows={4}
        className="w-full border border-gray-300 rounded p-2 mb-4 text-black"
      />
      <button
        onClick={invokeLLM}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
      {response && (
        <div className="mt-6 border border-gray-300 rounded p-4">
          <h2 className="text-xl font-semibold mb-2">Response:</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}
