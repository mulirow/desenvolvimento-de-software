"use client";
import { useState } from "react";
import { Room } from "./Room";
import { Editor } from "./Editor";

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  
  // Estado para armazenar o conteúdo do editor colaborativo
  const [editorContent, setEditorContent] = useState('');
  // Estado para armazenar a resposta da análise do roteiro
  const [scriptResponse, setScriptResponse] = useState('');

  const invokeLLM = async () => {
    if (prompt.trim() === '') return;

    try {
      const res = await fetch('/api/googleai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      setResponse(data.result);
    } catch (error) {
      console.error('Error invoking LLM:', error);
    } finally {
      setPrompt('');
    }
  };

  // Função para analisar o conteúdo do editor, assumindo que seja um roteiro
  const analyzeScript = async () => {
    if (editorContent.trim() === '') return;

    const scriptPrompt = `Analise o seguinte roteiro e dê sua opinião sobre seu ritmo, fluidez e estrutura. O texto parece um bom roteiro? Se não, sugira melhorias. Considere que o roteiro pode ainda não estar completo. Texto:\n\n${editorContent}`;

    try {
      const res = await fetch('/api/googleai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: scriptPrompt }),
      });
      const data = await res.json();
      setScriptResponse(data.result);
    } catch (error) {
      console.error('Error analyzing script:', error);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Collaborative Editor</h1>
      <Room>
        {/* Passa a função onChange para capturar o conteúdo do editor */}
        <Editor onChange={(text: string) => setEditorContent(text)} />
      </Room>

      {/* Botão para analisar o roteiro */}
      <button
        onClick={analyzeScript}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Analisar Roteiro
      </button>
      {scriptResponse && (
        <div className="mt-6 border border-gray-300 rounded p-4">
          <h2 className="text-xl font-semibold mb-2">Opinião sobre o Roteiro:</h2>
          <p>{scriptResponse}</p>
        </div>
      )}

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
