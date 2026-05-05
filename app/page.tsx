import Image from "next/image";
import { Link, Camera, Music, Gamepad2, Code2 } from "lucide-react"; 

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 p-6 sm:p-12 font-sans selection:bg-blue-500 selection:text-white">
      {/* Container - grid-flow-row-dense ile boşlukları otomatik dolduruyoruz */}
      <main className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 grid-flow-row-dense">
        
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
              <Link size={20} className="text-zinc-900 dark:text-white"/>
            </a>
            <a href="https://www.instagram.com/yigidsoyulmaz/" target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-full hover:scale-110 transition-transform">
              {/* Instagram import hatası vermesin diye Camera ikonunu kullandık */}
              <Camera size={20} className="text-zinc-900 dark:text-white"/>
            </a>
          </div>
        </div>

        {/* Yazılım Kartı (1 Sütun) */}
        <div className="md:col-span-1 bg-blue-600 p-8 rounded-3xl text-white flex flex-col justify-between min-h-[300px]">
          <Code2 size={40} className="opacity-80" />
          <div>
            <h2 className="text-xl font-semibold text-blue-100 italic">Yazılım & Oyun</h2>
            <p className="text-2xl font-bold mt-1">C, Python <br/>& Godot</p>
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
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/SENIN_SARKININ_ID_NUMARASI&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"
            ></iframe>
          </div>
        </div>

        {/* Proje Kartı (1 Sütun - Kare) */}
        <div className="md:col-span-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-3xl group cursor-pointer overflow-hidden relative flex flex-col justify-end">
          <div className="relative z-10">
            <Gamepad2 size={32} className="mb-4 text-emerald-500" />
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white leading-tight">GameJam<br/>Projeleri</h3>
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