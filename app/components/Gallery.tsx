"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ImageIcon, ChevronLeft, ChevronRight, X } from "lucide-react";

// ─── Galeri Görselleri ────────────────────────────────────────
// Görsellerinizi /public/gallery/ klasörüne koyun ve buraya ekleyin.
const galleryImages = [
  { src: "/gallery/1.jpg", alt: "Galeri 1" },
  { src: "/gallery/2.jpg", alt: "Galeri 2" },
  { src: "/gallery/3.jpg", alt: "Galeri 3" },
  { src: "/gallery/4.jpg", alt: "Galeri 4" },
  { src: "/gallery/5.jpg", alt: "Galeri 5" },
  { src: "/gallery/6.jpg", alt: "Galeri 6" },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Görselleri çoğaltarak sonsuz döngü efekti oluşturuyoruz
  const duplicated = [...galleryImages, ...galleryImages];

  // Klavye olayları (Escape, Sol ok, Sağ ok)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) => {
          if (prev === null) return null;
          return prev === 0 ? galleryImages.length - 1 : prev - 1;
        });
      }
      if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => {
          if (prev === null) return null;
          return prev === galleryImages.length - 1 ? 0 : prev + 1;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === null ? null : prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === null ? null : prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="md:col-span-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 py-6 rounded-3xl overflow-hidden">
        {/* Başlık */}
        <div className="flex items-center gap-3 mb-5 px-6">
          <ImageIcon size={24} className="text-violet-500" />
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Galeri</h2>
        </div>

        {/* Kayan Görseller */}
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max gap-4 animate-marquee hover:[animation-play-state:paused]">
            {duplicated.map((img, index) => {
              // Tıklanan görselin asıl dizideki (galleryImages) indeksini buluyoruz
              const realIndex = index % galleryImages.length;

              return (
                <div
                  key={index}
                  onClick={() => setSelectedIndex(realIndex)}
                  className="relative shrink-0 w-64 h-44 rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 group cursor-pointer"
                >
                  {/* Görsel yoksa placeholder (Image etiketinden önce koyuyoruz ki altında kalsın) */}
                  <div className="absolute inset-0 flex items-center justify-center text-zinc-400 dark:text-zinc-500">
                    <div className="text-center">
                      <ImageIcon size={32} className="mx-auto mb-1 opacity-30" />
                      <p className="text-xs opacity-50">{img.src}</p>
                    </div>
                  </div>

                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500 z-10"
                    sizes="256px"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fadeIn">
          {/* Arka plan tıklaması kapatır */}
          <div className="absolute inset-0" onClick={() => setSelectedIndex(null)} />

          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-6 right-6 z-50 p-2 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full transition-colors"
          >
            <X size={24} />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-10 z-50 p-3 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full transition-colors"
          >
            <ChevronLeft size={32} />
          </button>

          <div className="relative w-full max-w-5xl h-[80vh] mx-4 sm:mx-20 z-40 pointer-events-none">
            <Image
              src={galleryImages[selectedIndex].src}
              alt={galleryImages[selectedIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-10 z-50 p-3 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full transition-colors"
          >
            <ChevronRight size={32} />
          </button>

          {/* Sayaç */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2 bg-black/50 rounded-full text-white/80 text-sm font-medium tracking-widest">
            {selectedIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </>
  );
}
