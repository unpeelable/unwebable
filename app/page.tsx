import Image from "next/image";
import { Music, Gamepad2, Code2 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 p-6 sm:p-12 font-sans selection:bg-blue-500 selection:text-white relative">
      {/* Arka Plan Görseli — /public/bg.jpg dosyasını koyunca görünecek */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-15 dark:opacity-10 pointer-events-none"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      />
      {/* Container */}
      <main className="relative z-10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 grid-flow-row-dense">

        {/* Giriş Kartı (2 Sütun) */}
        <div className="md:col-span-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-3xl flex flex-col justify-between min-h-[300px]">
          <div>
            <h1 className="text-4xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50">
              M. Yiğit Soyulmaz
            </h1>
            <p className="mt-4 text-zinc-500 dark:text-zinc-400 text-lg max-w-md">
              Bilgisayar Mühendisliği öğrencisi, müzik prodüktörü ve oyun geliştirici.
              C, Python ve Godot ile dijital dünyalar inşa ediyorum.
            </p>
          </div>
          <div className="flex gap-4 mt-6">
            {/* Sosyal Medya Butonları */}
            <a href="https://github.com/unpeelable" target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-full hover:scale-110 transition-transform">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-zinc-900 dark:text-white">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/yigidsoyulmaz/" target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-full hover:scale-110 transition-transform">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-zinc-900 dark:text-white">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.668.072 4.948c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Yazılım Kartı (1 Sütun) */}
        <div className="md:col-span-1 bg-blue-600 p-8 rounded-3xl text-white flex flex-col justify-between min-h-[300px]">
          <Code2 size={40} className="opacity-80" />
          <div>
            <h2 className="text-xl font-semibold text-blue-100 italic">Yazılım & Oyun</h2>
            <p className="text-2xl font-bold mt-1">C, Python <br />& Godot</p>
          </div>
        </div>

        {/* Müzik ve SoundCloud Kartı (2 Sütun) */}
        <div className="md:col-span-2 bg-zinc-900 dark:bg-zinc-800 p-6 rounded-3xl text-white flex flex-col justify-between gap-4">
          <div className="flex items-start justify-between px-2 pt-2">
            <div>
              <h2 className="text-xl font-semibold text-zinc-400">Prodüksiyon</h2>
              <p className="text-2xl font-bold mt-1 italic">FL Studio & Guitar</p>
            </div>
            <Music size={40} className="text-pink-500" />
          </div>

          {/* SoundCloud Embed */}
          <div className="rounded-2xl overflow-hidden w-full bg-black/20">
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2309306720&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"
            ></iframe>
          </div>
        </div>

        {/* Proje Kartı (1 Sütun - Kare) */}
        <div className="md:col-span-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-3xl group cursor-pointer overflow-hidden relative flex flex-col justify-end">
          <div className="relative z-10">
            <Gamepad2 size={32} className="mb-4 text-emerald-500" />
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white leading-tight">GameJam<br />Projeleri</h3>
          </div>
          {/* Arka plana hafif bir efekt */}
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <Gamepad2 size={150} className="text-zinc-900 dark:text-white" />
          </div>
        </div>

      </main>
    </div>
  );
}