"use client";

import { Heart } from "lucide-react";
import { useState } from "react";

export function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button
      type="button"
      aria-pressed={liked}
      onClick={() => setLiked((current) => !current)}
      className={[
        "inline-flex h-10 w-10 items-center justify-center rounded-full border transition duration-200 cursor-pointer",
        liked
          ? "border-red-500 bg-red-500 text-white"
          : "border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-100",
      ].join(" ")}
    >
      <Heart
        aria-hidden="true"
        size={19}
        strokeWidth={1.8}
        fill={liked ? "currentColor" : "none"}
      />
    </button>
  );
}
