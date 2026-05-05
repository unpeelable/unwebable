"use client";

import { useState } from "react";
import { GameJamCard, GameJamModal } from "./GameJamProjects";

export default function GameJamSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <GameJamCard onClick={() => setIsOpen(true)} />
      <GameJamModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
