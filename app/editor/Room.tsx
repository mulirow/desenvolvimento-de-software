"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";

export function Room({ children }: { children: ReactNode }) {
  const liveblocksPublicKey = process.env.NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY || '';

  if (liveblocksPublicKey === '') {
    throw new Error('Missing Liveblocks public key');
  }

  return (
    <LiveblocksProvider publicApiKey={liveblocksPublicKey}>
      <RoomProvider id="my-room">
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}