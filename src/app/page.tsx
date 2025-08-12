"use client";
import { useState } from "react";
import Image from "next/image";

const downloads = [
  {
    name: "AppController",
    href: "https://releases.graphon.com/6.x/6.2/6.2.6.33307/AppController.AllUsers.exe",
    icon: "/imgs/app.png",
  },
  {
    name: "Vivo Voz Negócio",
    href: "https://download947.mediafire.com/s9104kem09tgiY28y6JNjvXvhDz7ta6tmxBXfr0YvCe-oQdlcHu6_zN3n_1_0euGjkCWRULjVp-nS-RG0g8LIGeon9yQBLQyYKG8kTFbnAUStrIC3OvFX-hhlBhJVBnyDNH1vAoDQtfMEozErcvCvAo36Z0eRbXy6t9SQz1oPEVXuQ/h3xit96g4yn3o3s/VivoVozNegocio.exe",
    icon: "/imgs/vivo.png",
  },
  {
    name: "Discord",
    href: "https://discord.com/api/downloads/distributions/app/installers/latest?channel=stable&platform=win&arch=x64",
    icon: "/imgs/discord.png",
  },
  {
    name: "Office 365",
    href: "https://c2rsetup.officeapps.live.com/c2r/download.aspx?ProductreleaseID=O365ProPlusRetail&platform=x64&language=pt-br&version=O16GA",
    icon: "/imgs/office.png",
  },
  {
    name: "Driver Impressora Xerox",
    href: "https://download.support.xerox.com/pub/drivers/6510/drivers/win10/ar/XeroxSmartStart_2.1.22.0.exe",
    icon: "/imgs/xerox.png",
  },
  {
    name: "Driver Impressora Brother",
    href: "https://support.brother.com/g/b/downloadtop.aspx?c=br&lang=pt&prod=mfc8952dw_us",
    icon: "/imgs/brother-logo.png",
  },
];

export default function Home() {
  const [toastVisible, setToastVisible] = useState(false);
  const [copiedLabel, setCopiedLabel] = useState("");

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedLabel(label);
      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 2000);
    });
  };

  return (
    <div className="font-sans min-h-screen flex flex-col items-center justify-between p-8 sm:p-20 bg-gray-950 text-white relative">
      {/* TOAST */}
      {toastVisible && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in-out z-50">
          Texto <strong>{copiedLabel}</strong> copiado para a área de transferência!
        </div>
      )}

      {/* LOGO */}
      <header className="w-full flex justify-center mb-8">
        <Image
          className="dark:invert"
          src="/imgs/r3-logo.png"
          alt="R3 Suprimentos logo"
          width={200}
          height={48}
          priority
        />
      </header>

      {/* CONTEÚDO */}
      <main className="w-full max-w-4xl">
        <h1 className="text-2xl font-semibold text-center mb-8">
          Central de Downloads
        </h1>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {downloads.map(({ name, href, icon }) => (
            <li key={name}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-6 border rounded-xl shadow hover:bg-[#94D33E] transition-all duration-200 transform hover:scale-105 cursor-pointer h-[180px] text-white"
              >
                <Image
                  src={icon}
                  alt={name}
                  width={64}
                  height={64}
                  className="mb-4"
                />
                <span className="font-medium text-center text-sm">{name}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* BOTÕES DE CÓPIA */}
        <section className="text-center mb-12">
          <h2 className="text-xl font-semibold mb-4">Copy Area</h2>
          <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
            <button
              onClick={() => copyToClipboard("irm https://massgrave.dev/get | iex", "Ativador")}
              className="flex items-center justify-center px-6 py-4 border border-white/20 rounded-xl shadow hover:bg-[#94D33E] hover:scale-105 transition-all duration-200 cursor-pointer text-white font-medium backdrop-blur-sm"
            >
              Ativador Win 11/10 & Office
            </button>

            <button
              onClick={() => copyToClipboard("r3suprimentos188810.winthor.cloudtotvs.com.br:4913", "Link WinThor")}
              className="flex items-center justify-center px-6 py-4 border border-white/20 rounded-xl shadow hover:bg-[#94D33E] hover:scale-105 transition-all duration-200 cursor-pointer text-white font-medium backdrop-blur-sm"
            >
              Link de Acesso WinThor
            </button>
          </div>
        </section>

      </main>

      {/* RODAPÉ */}
      <footer className="mt-12 text-sm text-center text-white">
        <a
          href="https://r3suprimentos.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:underline-offset-4"
        >
          R3 Suprimentos © {new Date().getFullYear()}
        </a>
        <p>
          Desenvolvido por <a href="https://www.linkedin.com/in/christoferhenrique/" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-400">Christofer Henrique</a>
        </p>
      </footer>

      {/* ANIMAÇÃO CSS (Tailwind plugin opcional ou customizado) */}
      <style jsx>{`
        @keyframes fadeInOut {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          20% {
            opacity: 1;
            transform: translateY(0);
          }
          80% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(20px);
          }
        }
        .animate-fade-in-out {
          animation: fadeInOut 2s ease-in-out;
        }
      `}</style>
    </div>
  );
}
