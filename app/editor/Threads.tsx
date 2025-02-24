"use client";

import { useThreads } from "@liveblocks/react/suspense";
import {
  AnchoredThreads,
  FloatingComposer,
  FloatingThreads,
} from "@liveblocks/react-lexical";

export function Threads() {
  const { threads } = useThreads();

  return (
    <>
      <div className="anchored-threads">
        <AnchoredThreads threads={threads} />
      </div>
      <FloatingThreads className="floating-threads" threads={threads} />
      <FloatingComposer className="floating-composer" />
    </>
  );
}