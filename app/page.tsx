"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="w-screen h-screen bg-zinc-300 relative p-4">

      <div className="relative inline-block">
        <button
          className="min-w-[18.75rem] bg-white rounded-[0.625rem] shadow-md flex flex-col overflow-hidden p-2 
                     hover:shadow-lg active:shadow-sm transition-shadow"
          onClick={() => router.push("/collab")}
        >
          <div className="w-full h-[150px] bg-gray-300"></div>
          <div className="flex items-center justify-between p-2">
            <div className="text-lg font-bold">projeto</div>
          </div>
        </button>

        <button
          className="bg-white text-black rounded-full w-7 h-7 flex items-center justify-center text-lg 
                     transition-colors cursor-pointer absolute bottom-[17.5px] right-[10px] 
                     hover:bg-black/20 active:bg-black/40"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          ⋮
        </button>
      </div>

      <button className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center 
                         text-2xl shadow-md fixed bottom-6 right-6 transition-all cursor-pointer
                         hover:w-[3.25rem] hover:h-[3.25rem] hover:text-[1.75rem] hover:bg-blue-600 
                         active:bg-blue-700"
      >
        +
      </button>
    </div>
  );
}
