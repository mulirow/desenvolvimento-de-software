"use client";

import Navbar from "@/components/Navbar";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import { Editor } from "./Editor";
import { Room } from "./Room";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [editorContent, setEditorContent] = useState("");
  const [scriptResponse, setScriptResponse] = useState("");

  useSession({
    required: true,
    onUnauthenticated() {
      signIn();
    },
  });

  const invokeLLM = async () => {
    if (prompt.trim() === "") return;

    try {
      const res = await fetch("/api/googleai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      setResponse(data.result);
    } catch (error) {
      console.error("Error invoking LLM:", error);
    } finally {
      setPrompt("");
    }
  };

  const analyzeScript = async () => {
    if (editorContent.trim() === "") return;

    const scriptPrompt = `Analise o seguinte roteiro e dê sua opinião sobre seu ritmo, fluidez e estrutura. O texto parece um bom roteiro? Se não, sugira melhorias. Considere que o roteiro pode ainda não estar completo. Texto:\n\n${editorContent}`;

    try {
      const res = await fetch("/api/googleai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: scriptPrompt }),
      });
      const data = await res.json();
      setScriptResponse(data.result);
    } catch (error) {
      console.error("Error analyzing script:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-300">
      <Navbar />

      <div className="flex flex-1">
        <div className="w-2/3 p-6">
          <h1 className="text-3xl font-bold mb-4">Collaborative Editor</h1>

          <div className="border rounded p-2 mb-4 min-h-[400px] bg-white">
            <Room>
              <Editor onChange={(text: string) => setEditorContent(text)} />
            </Room>
          </div>
        </div>

        <div className="w-1/3 p-6 bg-gray-50 border-l border-gray-200 flex flex-col">
          <h2 className="text-2xl font-bold mb-4">AI assistant</h2>

          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Digite aqui..."
            rows={6}
            className="w-full border border-gray-300 rounded p-2 mb-4 text-black"
          />

          <button
            onClick={invokeLLM}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
          >
            Sugestions
          </button>

          <button
            onClick={analyzeScript}
            className="bg-[#FF45F6] hover:bg-[#D930C8] text-white font-bold py-2 px-4 rounded mb-4"
          >
            Analyze
          </button>

          {(response || scriptResponse) && (
            <div className="mt-6 border border-gray-300 rounded p-4 flex-1">
              <h2 className="text-xl font-semibold mb-2">Resposta:</h2>

              {response && (
                <div className="mb-4">
                  <p>{response}</p>
                </div>
              )}

              {scriptResponse && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Opinião sobre o Roteiro:
                  </h3>
                  <p>{scriptResponse}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
