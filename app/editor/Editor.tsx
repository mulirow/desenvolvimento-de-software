"use client";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import {
  liveblocksConfig,
  LiveblocksPlugin,
  FloatingToolbar,
} from "@liveblocks/react-lexical";
import { Threads } from "./Threads";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useEffect } from "react";
import { $getRoot } from "lexical";

interface EditorProps {
  onChange?: (text: string) => void;
}

function OnChangePlugin({ onChange }: { onChange: (text: string) => void }) {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        const root = $getRoot();
        const textContent = root.getTextContent();
        onChange(textContent);
      });
    });
  }, [editor, onChange]);

  return null;
}

export function Editor({ onChange }: EditorProps) {
  const initialConfig = liveblocksConfig({
    namespace: "Demo",
    onError: (error: unknown) => {
      console.error(error);
      throw error;
    },
  });

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="mx-auto w-full max-w-screen-lg p-4 sm:px-6 md:px-8">
        <div className="relative bg-white border border-gray-300 rounded shadow min-h-[300px]">
          <RichTextPlugin
            contentEditable={
              <ContentEditable className="min-h-[200px] w-full p-4 focus:outline-none" />
            }
            placeholder={
              <div className="pointer-events-none absolute top-4 left-4 text-gray-400">
                Start typing here...
              </div>
            }
            ErrorBoundary={LexicalErrorBoundary}
          />

          {onChange && <OnChangePlugin onChange={onChange} />}
          <LiveblocksPlugin>
            <Threads />
            <FloatingToolbar />
          </LiveblocksPlugin>
        </div>
      </div>
    </LexicalComposer>
  );
}
