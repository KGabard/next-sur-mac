"use client";

import { useState } from "react";

export function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setLiked((current) => !current)}
      className="rounded-full border px-4 py-2"
    >
      {liked ? "Photo appréciée" : "J’aime cette photo"}
    </button>
  );
}
