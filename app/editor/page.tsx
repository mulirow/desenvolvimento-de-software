"use client";

import Navbar from "@/components/Navbar";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import { Editor } from "./Editor";
import { Room } from "./Room";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [editorContent, setEditorContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [lastResponse, setLastResponse] = useState("");

  useSession({
    required: true,
    onUnauthenticated() {
      signIn();
    },
  });

  const invokeLLM = async () => {
    if (prompt.trim() === "") return;
    setLoading(true);

    const analyzePrompt = `${prompt}. Texto: \n\n${editorContent}`

    try {
      const res = await fetch("/api/googleai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: analyzePrompt }),
      });
      const data = await res.json();
      setLastResponse(data.result);
    } catch (error) {
      console.error("Error invoking LLM:", error);
      setLastResponse("Error fetching suggestions. Please try again.");
    } finally {
      setPrompt("");
      setLoading(false);
    }
  };

  const analyzeScript = async () => {
    if (editorContent.trim() === "") return;
    setLoading(true);

    const scriptPrompt = `Analise o seguinte roteiro e dê sua opinião sobre seu ritmo, fluidez e estrutura. O texto parece um bom roteiro? Se não, sugira melhorias. Considere que o roteiro pode ainda não estar completo. Texto:\n\n${editorContent}`;

    try {
      const res = await fetch("/api/googleai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: scriptPrompt }),
      });
      const data = await res.json();
      setLastResponse(data.result);
    } catch (error) {
      console.error("Error analyzing script:", error);
      setLastResponse("Error analyzing the script. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800">
      <Navbar />

      <div className="container mx-auto py-8 px-4 flex flex-col md:flex-row gap-6">
        {/* Editor Section */}
        <div className="md:w-2/3 bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-4">
            <h1 className="text-2xl font-semibold text-gray-700 mb-2">
              Collaborative Script Editor
            </h1>
            <p className="text-gray-500 text-sm">
              Write and collaborate on your script in real-time.
            </p>
          </div>
          <div className="p-4 bg-gray-50 border-t border-gray-200">
            <Room>
              <Editor onChange={(text: string) => setEditorContent(text)} />
            </Room>
          </div>
        </div>

        <div className="md:w-1/3 bg-white rounded-lg shadow-xl overflow-hidden flex flex-col h-full">
          <div className="px-6 py-4">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              AI Script Assistant
            </h2>
            <p className="text-gray-500 text-sm">
              Get intelligent suggestions and script analysis powered by AI.
            </p>
          </div>

          <div className="p-4 flex-grow flex flex-col">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter your prompt here..."
              rows={4}
              className="w-full border border-gray-300 rounded-md p-3 mb-4 text-gray-700 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
            />

            <div className="flex flex-col gap-2 mb-4">
              <button
                onClick={invokeLLM}
                className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${loading ? "opacity-50 cursor-wait" : ""
                  }`}
                disabled={loading}
              >
                {loading ? "Generating..." : "Get Suggestions"}
              </button>

              <button
                onClick={analyzeScript}
                className={`bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${loading ? "opacity-50 cursor-wait" : ""
                  }`}
                disabled={loading}
              >
                {loading ? "Analyzing..." : "Analyze Script"}
              </button>
            </div>

            {lastResponse && (
              <div className="mt-4 p-4 bg-gray-50 rounded-md border border-gray-200 flex-grow overflow-y-auto">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  AI Output:
                </h3>
                <div className="mb-4">
                  <p className="text-gray-600">{lastResponse}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}