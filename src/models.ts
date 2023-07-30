export type availableTags =
  | "Tailwind"
  | "Angular"
  | "SvelteKit"
  | "Next"
  | "Vercel"
  | "IIS"
  | "CSharp";

export const availableTagsDisplayInfo = {
  Tailwind: {
    bgColorClass: "bg-cyan-400",
    text: "Tailwind",
    textColorClass: "text-black",
  },
  Angular: {
    bgColorClass: "bg-red-400",
    text: "Angular",
    textColorClass: "text-white",
  },
  SvelteKit: {
    bgColorClass: "bg-orange-400",
    text: "SvelteKit",
    textColorClass: "text-black",
  },
  Next: {
    bgColorClass: "bg-blue-400",
    text: "Next",
    textColorClass: "text-white",
  },
  Vercel: {
    bgColorClass: "bg-gray-700",
    text: "Vercel",
    textColorClass: "text-white",
  },
  IIS: {
    bgColorClass: "bg-yellow-500",
    text: "IIS",
    textColorClass: "text-black",
  },
  CSharp: {
    bgColorClass: "bg-emerald-400",
    text: "C#",
    textColorClass: "text-white",
  },
};
