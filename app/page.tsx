import Image from "next/image";
import { Music, Code2 } from "lucide-react";
import GameJamSection from "@/app/components/GameJamSection";
import Gallery from "@/app/components/Gallery";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 p-6 sm:p-12 font-sans selection:bg-blue-500 selection:text-white relative">
      {/* Arka Plan Görseli — /public/bg.jpg dosyasını koyunca görünecek */}
      <div
        className="fixed inset-0 z-0 bg-contain bg-center bg-no-repeat opacity-25 dark:opacity-15 pointer-events-none"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      />

      {/* Kayan Arka Plan Yazısı (WILL OF ANATOLIA) */}
      <div className="fixed inset-0 z-0 flex items-center overflow-hidden pointer-events-none opacity-[0.03] dark:opacity-[0.05] select-none">
        <div className="flex w-max animate-marquee-reverse text-[12rem] md:text-[20rem] font-black tracking-tighter whitespace-nowrap text-zinc-900 dark:text-white">
          <span className="pr-16">WILL OF ANATOLIA • WILL OF ANATOLIA • WILL OF ANATOLIA •</span>
          <span className="pr-16">WILL OF ANATOLIA • WILL OF ANATOLIA • WILL OF ANATOLIA •</span>
        </div>
      </div>

      {/* Container */}
      <main className="relative z-10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 grid-flow-row-dense">

        {/* Giriş Kartı (2 Sütun) */}
        <div className="md:col-span-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-3xl flex flex-col justify-between min-h-[300px]">
          <div>
            <div className="flex items-center gap-4">
              <Image
                src="/profile.jpg"
                alt="M. Yiğit Soyulmaz"
                width={56}
                height={56}
                className="rounded-full object-cover w-14 h-14 border-2 border-zinc-200 dark:border-zinc-700"
              />
              <h1 className="text-4xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50">
                M. Yiğit Soyulmaz
              </h1>
            </div>
            <p className="mt-4 text-zinc-500 dark:text-zinc-400 text-lg max-w-md">
              Bilgisayar Mühendisliği öğrencisi,grafik tasarımcı, müzik prodüktörü ve oyun geliştirici.
              C, Python ile çalışıyorum, geliştirmekte olduğum bazı oyunlar mevcut.
            </p>
          </div>
          <div className="flex gap-4 mt-6">
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
            <a href="https://www.linkedin.com/in/mehmet-yiğit-soyulmaz-287b45382/" target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-full hover:scale-110 transition-transform">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-zinc-900 dark:text-white">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Yazılım Kartı (1 Sütun) */}
        <div className="md:col-span-1 bg-blue-600 p-8 rounded-3xl text-white flex flex-col justify-between min-h-[300px]">
          <Code2 size={40} className="opacity-80" />
          <div>
            <h2 className="text-xl font-semibold text-blue-100 italic">Yazılım & Oyun</h2>
            <p className="text-2xl font-bold mt-1">C, Python <br />& Unity, Godot</p>
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

          {/* YouTube & SoundCloud Linkleri */}
          <div className="flex gap-3 px-2">
            <a href="https://youtube.com/@yigidsoyulmaz?si=dnawmWKO2CFLLUnI" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-red-500">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              YouTube
            </a>
            <a href="https://soundcloud.com/user-118460422" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-orange-500">
                <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c-.009-.06-.05-.1-.1-.1m-.899.828c-.06 0-.091.037-.104.094L0 14.479l.172 1.282c.013.06.045.094.104.094.057 0 .09-.037.104-.094l.21-1.282-.21-1.332c-.014-.057-.047-.094-.104-.094m1.8-1.193c-.066 0-.12.048-.12.117l-.217 2.502.217 2.456c.002.066.054.117.12.117.063 0 .114-.05.12-.117l.244-2.456-.244-2.502c-.006-.069-.057-.117-.12-.117m.862-.46c-.078 0-.143.06-.143.14l-.189 2.96.189 2.883c.002.078.065.14.143.14.074 0 .136-.062.14-.14l.213-2.882-.213-2.96c-.004-.08-.066-.14-.14-.14m.86-.197c-.09 0-.158.07-.164.157l-.163 3.157.163 3.06c.006.09.075.157.164.157.086 0 .157-.068.16-.157l.186-3.06-.186-3.157c-.003-.087-.074-.157-.16-.157m.87-.167c-.1 0-.183.08-.186.178l-.14 3.324.14 3.18c.003.1.086.178.186.178.098 0 .178-.08.183-.178l.16-3.18-.16-3.324c-.005-.1-.085-.178-.183-.178m.882-.135c-.114 0-.203.092-.207.2l-.12 3.46.12 3.3c.004.112.093.2.207.2.11 0 .2-.088.204-.2l.133-3.3-.133-3.46c-.004-.108-.094-.2-.204-.2m.88-.098c-.127 0-.223.1-.227.22l-.1 3.56.1 3.38c.004.12.1.22.227.22.122 0 .22-.1.223-.22l.113-3.38-.113-3.56c-.003-.12-.1-.22-.223-.22m.94-.025c-.137 0-.24.114-.243.248l-.08 3.58.08 3.397c.003.136.106.247.243.247.135 0 .24-.11.243-.247l.09-3.397-.09-3.58c-.003-.134-.108-.248-.243-.248m2.747-.24c-.07-.008-.143-.015-.217-.015-.135 0-.265.018-.39.05-.12-1.372-1.27-2.448-2.67-2.448-.352 0-.69.07-1.003.196C8.37 8.09 8.236 8.097 8.174 8.097c-.095 0-.144.06-.144.15v7.502c0 .092.05.164.14.178.016.002 5.88.003 5.88.003 1.352 0 2.45-1.1 2.45-2.45 0-1.342-1.07-2.43-2.39-2.462" />
              </svg>
              SoundCloud
            </a>
          </div>
        </div>

        {/* GameJam Projeleri Kartı + Modal */}
        <GameJamSection />

        {/* YouTube Video Kartı (3 Sütun - Tam Genişlik) */}
        <div className="md:col-span-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-3xl">
          <div className="flex items-center gap-3 mb-4 px-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-red-500">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white">YouTube</h2>
          </div>
          <div className="rounded-2xl overflow-hidden w-full aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/xnLm29ucvkk?start=193"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        {/* Galeri — Otomatik Kayan Görseller */}
        <Gallery />

      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-12 mb-6 text-center text-zinc-500 dark:text-zinc-400 text-sm font-medium">
        @unpeelable 2026
      </footer>
    </div>
  );
}