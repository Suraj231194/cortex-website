import Image from "next/image";
import { getAssetPath } from "@/lib/utils";

interface CortexMarkProps {
  className?: string;
  size?: number;
}

export default function CortexMark({ className = "", size = 44 }: CortexMarkProps) {
  return (
    <span
      className={`relative inline-block shrink-0 ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <Image
        src={getAssetPath("/logo-mark.png")}
        alt="Cortex Analytics"
        width={404}
        height={410}
        sizes={`${Math.ceil(size * 2)}px`}
        draggable={false}
        className="pointer-events-none h-full w-full object-contain select-none"
      />
    </span>
  );
}
