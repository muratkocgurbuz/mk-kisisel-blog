import React from 'react';
import { Mail, Github, Video } from 'lucide-react';

export default function PersonalBlog() {
  return (
    <div className="min-h-screen bg-[#4C1C24] text-white flex flex-col">
      {/* NAVIGATION BAR */}
      <header className="sticky top-0 z-30 bg-[#4C1C24] border-b border-[#F6C344]/40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Kişisel Blog</h1>
          <nav className="flex gap-6 text-sm">
            <a href="#about" className="hover:text-[#F6C344]">Hakkımda</a>
            <a href="#projects" className="hover:text-[#F6C344]">Projeler</a>
            <a href="#media" className="hover:text-[#F6C344]">Medya</a>
            <a href="#contact" className="hover:text-[#F6C344]">İletişim</a>
          </nav>
        </div>
      </header>

      {/* HERO / HAKKIMDA */}
      <main className="flex-1 max-w-6xl mx-auto px-6 py-12">
        <section id="about" className="mb-16">
          <h2 className="text-3xl font-bold text-[#F6C344]">Ben Kimim?</h2>
          <p className="mt-4 text-lg text-slate-200">
            Buraya kendinizi tanıtan metni yazabilirsiniz. Hedefleriniz, becerileriniz,
            ilgi alanlarınız ve deneyimlerinizi paylaşabilirsiniz.
          </p>
        </section>

        {/* PROJELER */}
        <section id="projects" className="mb-16">
          <h2 className="text-3xl font-bold text-[#F6C344]">Projelerim</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-[#602832] p-4 rounded-xl shadow">
              <h3 className="font-semibold text-xl">Proje 1</h3>
              <p className="text-slate-300 mt-2">Buraya proje açıklaması yazılacak.</p>
            </div>
            <div className="bg-[#602832] p-4 rounded-xl shadow">
              <h3 className="font-semibold text-xl">Proje 2</h3>
              <p className="text-slate-300 mt-2">Buraya proje açıklaması yazılacak.</p>
            </div>
          </div>
        </section>

        {/* MEDYA */}
        <section id="media" className="mb-16">
          <h2 className="text-3xl font-bold text-[#F6C344]">Medya</h2>
          <p className="mt-4">Buraya kendi resim ve videolarınızı ekleyebilirsiniz.</p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <img
              src="https://via.placeholder.com/400"
              alt="örnek resim"
              className="rounded-xl shadow"
            />
            <video controls className="rounded-xl shadow">
              <source src="sample-video.mp4" type="video/mp4" />
              Tarayıcınız video etiketini desteklemiyor.
            </video>
          </div>
        </section>

        {/* İLETİŞİM */}
        <section id="contact" className="mb-16">
          <h2 className="text-3xl font-bold text-[#F6C344]">İletişim</h2>
          <div className="mt-6 space-y-4">
            <p className="flex items-center gap-3"><Mail size={18}/> murat@example.com</p>
            <p className="flex items-center gap-3"><Github size={18}/> github.com/kullaniciadi</p>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#3B1319] py-6 mt-auto">
        <div className="max-w-6xl mx-auto px-6 flex justify-between text-sm text-slate-300">
          <span>© 2025 Murat Koçgürbüz</span>
          <span>Öğrenci No: 2221032823</span>
        </div>
      </footer>
    </div>
  );
}
