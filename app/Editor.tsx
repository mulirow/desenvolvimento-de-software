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

export function Editor() {
  // Wrap your Lexical config with `liveblocksConfig`
  const initialConfig = liveblocksConfig({
    namespace: "Demo",
    onError: (error: unknown) => {
      console.error(error);
      throw error;
    },
  });

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="editor">
        <RichTextPlugin
          contentEditable={<ContentEditable />}
          placeholder={<div className="placeholder">Start typing here…</div>}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <LiveblocksPlugin>
          <Threads />
          <FloatingToolbar />
        </LiveblocksPlugin>
      </div>
    </LexicalComposer>
  );
}