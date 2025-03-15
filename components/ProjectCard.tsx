import { useRouter } from "next/navigation";

interface ProjectCardProps {
  href: string;
  cardText: string;
}

export default function ProjectCard({ href, cardText }: ProjectCardProps) {
  const router = useRouter();

  return (
    <div className="relative inline-block">
      <button
        className="min-w-[18.75rem] bg-white rounded-[0.625rem] shadow-md flex flex-col overflow-hidden p-2
                     hover:shadow-lg active:shadow-sm transition-shadow"
        onClick={() => router.push(href)}
      >
        <div className="w-full h-[150px] bg-gray-300"></div>
        <div className="flex items-center justify-between p-2">
          <div className="text-lg font-bold text-black">{cardText}</div>
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
  );
}