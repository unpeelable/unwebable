"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Gamepad2, X, ExternalLink } from "lucide-react";

// ─── Proje Verileri ───────────────────────────────────────────
// Kendi projelerinizi buraya ekleyin.
// Fotoğrafları /public/projects/ klasörüne koyun.
const projects = [
  {
    id: 1,
    title: "Darboğaz",
    description: "Minigameler ve geliştirme yaptığınız bir gamejam projesi.",
    image: "/projects/project1.png",
    tags: ["Godot", "2D", "Puzzle", "Minigame"],
    link: "https://itch.io/jam/kbu-game-jam-2026-bahar/rate/4518572", // itch.io veya GitHub linki
  },
  {
    id: 2,
    title: "Yakında...",
    description: "...",
    image: "/projects/project2.png",
    tags: ["Unity", "3D", "Action"],
    link: "#",
  },
  {
    id: 3,
    title: "Yakında...",
    description: "...",
    image: "/projects/project2.png",
    tags: ["..."],
    link: "#",
  },
];

// ─── Kart Bileşeni (Ana Sayfada Görünen) ─────────────────────
export function GameJamCard({ onClick }: { onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="md:col-span-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-3xl group cursor-pointer overflow-hidden relative flex flex-col justify-end hover:border-emerald-400 dark:hover:border-emerald-600 transition-colors"
    >
      <div className="relative z-10">
        <Gamepad2 size={32} className="mb-4 text-emerald-500" />
        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white leading-tight">
          GameJam
          <br />
          Projeleri
        </h3>
        <p className="text-xs text-zinc-400 mt-2 group-hover:text-emerald-500 transition-colors">
          Tıkla ve keşfet →
        </p>
      </div>
      {/* Arka plana hafif bir efekt */}
      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
        <Gamepad2 size={150} className="text-zinc-900 dark:text-white" />
      </div>
    </div>
  );
}

// ─── Modal Bileşeni ───────────────────────────────────────────
export function GameJamModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  // ESC tuşu ile kapatma
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
      {/* Arka plan overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fadeIn"
        onClick={onClose}
      />

      {/* Modal İçerik */}
      <div className="relative z-10 w-full max-w-3xl max-h-[85vh] bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden animate-slideUp">
        {/* Başlık */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-8 py-5 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-zinc-100 dark:border-zinc-800">
          <div className="flex items-center gap-3">
            <Gamepad2 size={24} className="text-emerald-500" />
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              Oyun ve GameJam Projeleri
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <X size={20} className="text-zinc-500" />
          </button>
        </div>

        {/* Proje Listesi */}
        <div className="overflow-y-auto max-h-[calc(85vh-80px)] p-6 sm:p-8 space-y-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group rounded-2xl border border-zinc-100 dark:border-zinc-800 overflow-hidden bg-zinc-50 dark:bg-zinc-800/50 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Proje Görseli */}
              <div className="relative w-full aspect-video bg-zinc-200 dark:bg-zinc-700 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 640px"
                  onError={(e) => {
                    // Görsel yoksa placeholder göster
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
                {/* Görsel yoksa placeholder */}
                <div className="absolute inset-0 flex items-center justify-center text-zinc-400 dark:text-zinc-500">
                  <div className="text-center">
                    <Gamepad2 size={48} className="mx-auto mb-2 opacity-30" />
                    <p className="text-sm opacity-50">
                      /public{project.image}
                    </p>
                  </div>
                </div>
              </div>

              {/* Proje Bilgileri */}
              <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  {project.link && project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 hover:scale-110 transition-transform"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>

                {/* Etiketler */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-200/70 dark:bg-zinc-700/70 text-zinc-600 dark:text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Proje yoksa bilgi mesajı */}
          {projects.length === 0 && (
            <div className="text-center py-16 text-zinc-400">
              <Gamepad2 size={48} className="mx-auto mb-4 opacity-30" />
              <p>Henüz proje eklenmemiş.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
