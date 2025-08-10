"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  ChevronDown,
  Flag,
  Handshake,
  Menu,
  Mic,
  BookOpen,
  Gavel,
  Users,
  Music,
  Instagram,
  MessageCircle,
  Send,
} from "lucide-react";
import { HandIcon } from "lucide-react";

type RoleItem =
  | { id: string; icon: JSX.Element; title: string; names: string[] }
  | { id: string; icon: JSX.Element; title: string; name: string };

const roles: RoleItem[] = [
  { id: "petugas-mc", icon: <Mic className="h-6 w-6" />, title: "MC", name: "Astrid" },
  { id: "petugas-pancasila", icon: <BookOpen className="h-6 w-6" />, title: "Pancasila", name: "Agung" },
  { id: "petugas-uud", icon: <Gavel className="h-6 w-6" />, title: "UUD", name: "Dian Wulandari" },
  { id: "petugas-janji", icon: <Handshake className="h-6 w-6" />, title: "Janji Pelajar", name: "Sandy" },
  { id: "petugas-doa", icon: <HandIcon className="h-6 w-6" />, title: "Doa", name: "Muhammad Abid Feriwijaya Hervian" },
  { id: "petugas-pemimpin", icon: <Flag className="h-6 w-6" />, title: "Pemimpin Upacara", name: "Said Ajis" },
  {
    id: "petugas-barisan",
    icon: <Users className="h-6 w-6" />,
    title: "Pemimpin Barisan",
    names: ["Arya Pratama", "Muhammad Fajar Deswantara", "Muhammad Fadly"],
  },
  {
    id: "petugas-pengibar",
    icon: <Flag className="h-6 w-6" />,
    title: "Pengibar Bendera",
    names: ["Muhammad Ridwan Wahid", "Ibnu Ephrisal P.", "Fathi Putra Prasetyo"],
  },
  { id: "petugas-dirigen", icon: <Music className="h-6 w-6" />, title: "Dirigen", name: "Aisyah Aqliyah" },
];

function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2400);
    return () => clearTimeout(t);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#212121]">
      <svg viewBox="0 0 240 240" height="240" width="240" className="pl">
        <circle
          strokeLinecap="round"
          strokeDashoffset="-330"
          strokeDasharray="0 660"
          strokeWidth="20"
          stroke="#f42f25"
          fill="none"
          r="105"
          cy="120"
          cx="120"
          className="pl__ring pl__ring--a"
        ></circle>
        <circle
          strokeLinecap="round"
          strokeDashoffset="-110"
          strokeDasharray="0 220"
          strokeWidth="20"
          stroke="#ffdd00"
          fill="none"
          r="35"
          cy="120"
          cx="120"
          className="pl__ring pl__ring--b"
        ></circle>
        <circle
          strokeLinecap="round"
          strokeDasharray="0 440"
          strokeWidth="20"
          stroke="#255ff4"
          fill="none"
          r="70"
          cy="120"
          cx="85"
          className="pl__ring pl__ring--c"
        ></circle>
        <circle
          strokeLinecap="round"
          strokeDasharray="0 440"
          strokeWidth="20"
          stroke="#2cf425"
          fill="none"
          r="70"
          cy="120"
          cx="155"
          className="pl__ring pl__ring--d"
        ></circle>
      </svg>
      <style jsx>{`
        .pl {
          width: 6em;
          height: 6em;
        }

        .pl__ring {
          animation: ringA 2s linear infinite;
        }

        .pl__ring--a {
          stroke: #f42f25;
        }

        .pl__ring--b {
          animation-name: ringB;
          stroke: #ffdd00;
        }

        .pl__ring--c {
          animation-name: ringC;
          stroke: #255ff4;
        }

        .pl__ring--d {
          animation-name: ringD;
          stroke: #2cf425;
        }

        @keyframes ringA {
          from, 4% {
            stroke-dasharray: 0 660;
            stroke-width: 20;
            stroke-dashoffset: -330;
          }
          12% {
            stroke-dasharray: 60 600;
            stroke-width: 30;
            stroke-dashoffset: -335;
          }
          32% {
            stroke-dasharray: 60 600;
            stroke-width: 30;
            stroke-dashoffset: -595;
          }
          40%, 54% {
            stroke-dasharray: 0 660;
            stroke-width: 20;
            stroke-dashoffset: -660;
          }
          62% {
            stroke-dasharray: 60 600;
            stroke-width: 30;
            stroke-dashoffset: -665;
          }
          82% {
            stroke-dasharray: 60 600;
            stroke-width: 30;
            stroke-dashoffset: -925;
          }
          90%, to {
            stroke-dasharray: 0 660;
            stroke-width: 20;
            stroke-dashoffset: -990;
          }
        }

        @keyframes ringB {
          from, 12% {
            stroke-dasharray: 0 220;
            stroke-width: 20;
            stroke-dashoffset: -110;
          }
          20% {
            stroke-dasharray: 20 200;
            stroke-width: 30;
            stroke-dashoffset: -115;
          }
          40% {
            stroke-dasharray: 20 200;
            stroke-width: 30;
            stroke-dashoffset: -195;
          }
          48%, 62% {
            stroke-dasharray: 0 220;
            stroke-width: 20;
            stroke-dashoffset: -220;
          }
          70% {
            stroke-dasharray: 20 200;
            stroke-width: 30;
            stroke-dashoffset: -225;
          }
          90% {
            stroke-dasharray: 20 200;
            stroke-width: 30;
            stroke-dashoffset: -305;
          }
          98%, to {
            stroke-dasharray: 0 220;
            stroke-width: 20;
            stroke-dashoffset: -330;
          }
        }

        @keyframes ringC {
          from {
            stroke-dasharray: 0 440;
            stroke-width: 20;
            stroke-dashoffset: 0;
          }
          8% {
            stroke-dasharray: 40 400;
            stroke-width: 30;
            stroke-dashoffset: -5;
          }
          28% {
            stroke-dasharray: 40 400;
            stroke-width: 30;
            stroke-dashoffset: -175;
          }
          36%, 58% {
            stroke-dasharray: 0 440;
            stroke-width: 20;
            stroke-dashoffset: -220;
          }
          66% {
            stroke-dasharray: 40 400;
            stroke-width: 30;
            stroke-dashoffset: -225;
          }
          86% {
            stroke-dasharray: 40 400;
            stroke-width: 30;
            stroke-dashoffset: -395;
          }
          94%, to {
            stroke-dasharray: 0 440;
            stroke-width: 20;
            stroke-dashoffset: -440;
          }
        }

        @keyframes ringD {
          from, 8% {
            stroke-dasharray: 0 440;
            stroke-width: 20;
            stroke-dashoffset: 0;
          }
          16% {
            stroke-dasharray: 40 400;
            stroke-width: 30;
            stroke-dashoffset: -5;
          }
          36% {
            stroke-dasharray: 40 400;
            stroke-width: 30;
            stroke-dashoffset: -175;
          }
          44%, 50% {
            stroke-dasharray: 0 440;
            stroke-width: 20;
            stroke-dashoffset: -220;
          }
          58% {
            stroke-dasharray: 40 400;
            stroke-width: 30;
            stroke-dashoffset: -225;
          }
          78% {
            stroke-dasharray: 40 400;
            stroke-width: 30;
            stroke-dashoffset: -395;
          }
          86%, to {
            stroke-dasharray: 0 440;
            stroke-width: 20;
            stroke-dashoffset: -440;
          }
        }
      `}</style>
    </div>
  );
}

function HeaderNav({ onNavClick }: { onNavClick: (id: string) => void }) {
  const items = [
    { id: "petugas-mc", label: "MC" },
    { id: "petugas-pancasila", label: "Pancasila" },
    { id: "petugas-uud", label: "UUD" },
    { id: "petugas-janji", label: "Janji Pelajar" },
    { id: "petugas-doa", label: "Doa" },
    { id: "petugas-pemimpin", label: "Pemimpin Upacara" },
    { id: "petugas-barisan", label: "Pemimpin Barisan" },
    { id: "petugas-pengibar", label: "Pengibar Bendera" },
    { id: "petugas-dirigen", label: "Dirigen" },
  ];
  return (
    <div className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-3">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full shadow">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Buka navigasi</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80">
            <SheetHeader className="text-left">
              <SheetTitle className="text-xl">Navigasi</SheetTitle>
            </SheetHeader>
            <nav className="mt-6 grid gap-2">
              {items.map((it) => (
                <Button
                  key={it.id}
                  variant="ghost"
                  className="justify-start text-base"
                  onClick={() => {
                    onNavClick(it.id);
                    const el = document.querySelector<HTMLElement>("[data-state='open'][role='dialog']");
                    el?.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
                  }}
                >
                  {it.label}
                </Button>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        <div className="w-10" />
      </div>
    </div>
  );
}

function Hero({ onScrollDown }: { onScrollDown: () => void }) {
  const layerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (layerRef.current) {
        layerRef.current.style.transform = `translateY(${y * 0.3}px)`;
      }
      if (contentRef.current) {
        const h = window.innerHeight;
        const opacity = Math.max(0, 1 - y / (h * 0.7));
        contentRef.current.style.opacity = String(opacity);
        contentRef.current.style.transform = `translateY(${y * 0.08}px)`;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="relative isolate grid min-h-[100svh] place-items-center overflow-hidden bg-black">
      <div ref={layerRef} className="pointer-events-none absolute inset-0 -z-10">
        <Image src="/images/bg.jpg" alt="Dirgahayu Republik Indonesia 80" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-red-600/70 via-red-600/40 to-white/10" />
      </div>

      <div
        ref={contentRef}
        className="container relative z-10 mx-auto grid max-w-3xl place-items-center gap-4 px-6 text-center text-white"
      >
        <Image
          src="/images/logo.png"
          alt="Logo HUT RI ke-80 SMK Muhammadiyah 1 Sangatta"
          width={140}
          height={140}
          className="drop-shadow-xl"
        />
        <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
          Petugas Upacara 17 Agustus
        </h1>
        <p className="text-lg/7 text-white/90">HUT Republik Indonesia ke-80</p>
        <p className="text-base/7 text-white/85">SMK MUHAMMADIYAH 1 SANGATTA UTARA</p>
      </div>

      <Button
        variant="secondary"
        size="icon"
        onClick={onScrollDown}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 rounded-full bg-white/90 text-neutral-900 shadow transition hover:translate-y-[-2px]"
      >
        <ChevronDown className="h-5 w-5" />
        <span className="sr-only">Gulir ke bawah</span>
      </Button>
    </header>
  );
}

function PetugasSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll<HTMLElement>("[data-animate='card']");
    if (!cards || cards.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const el = e.target as HTMLElement;
          if (e.isIntersecting) {
            el.classList.add("opacity-100", "translate-y-0", "scale-100");
            el.classList.remove("opacity-0", "translate-y-6", "scale-[0.98]");
          } else {
            el.classList.add("opacity-0", "translate-y-6", "scale-[0.98]");
            el.classList.remove("opacity-100", "translate-y-0", "scale-100");
          }
        });
      },
      { threshold: 0.18 },
    );

    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  return (
    <section className="bg-white py-14 sm:py-18" id="petugas">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-red-600 sm:text-4xl">Susunan Petugas Upacara</h2>
          <div className="mx-auto mt-3 h-1 w-28 rounded bg-gradient-to-r from-red-600 to-red-400" />
        </div>

        <div ref={containerRef} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((item, idx) => {
            const isList = (it: RoleItem): it is Extract<RoleItem, { names: string[] }> =>
              (it as any).names !== undefined;
            return (
              <Card
                key={item.id}
                id={item.id}
                data-animate="card"
                className="opacity-0 translate-y-6 scale-[0.98] transition duration-700 will-change-transform"
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                <CardHeader className="flex flex-row items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-red-50 text-red-600">
                    {item.icon}
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-neutral-600">
                  {isList(item) ? (
                    <ul className="list-inside list-disc space-y-1">
                      {item.names.map((n) => (
                        <li key={n} className="text-sm">
                          {n}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm">{item.name}</p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-neutral-900 py-10 text-neutral-100">
      <div className="container mx-auto max-w-6xl px-6 text-center">
        <p className="text-sm/6 opacity-90">&copy; 2025 HUT RI ke-80</p>
        <p className="text-sm/6 opacity-80">Dibuat oleh Muhammad Abid</p>
        <div className="mt-4 flex items-center justify-center gap-4">
          <a
            href="https://www.instagram.com/bidzz_official"
            target="_blank"
            rel="noreferrer"
            className="rounded-full p-2 text-neutral-100/90 transition hover:translate-y-[-2px] hover:text-red-400"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://wa.me/6282350265164?text=Assalamualaikum+Abidd+Gantengg"
            target="_blank"
            rel="noreferrer"
            className="rounded-full p-2 text-neutral-100/90 transition hover:translate-y-[-2px] hover:text-red-400"
            aria-label="WhatsApp"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
          <a
            href="https://t.me/bidzz7"
            target="_blank"
            rel="noreferrer"
            className="rounded-full p-2 text-neutral-100/90 transition hover:translate-y-[-2px] hover:text-red-400"
            aria-label="Telegram"
          >
            <Send className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Page() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const scrollDown = () => handleScrollTo("petugas");

  return (
    <main className="min-h-screen">
      <Loader />
      <HeaderNav onNavClick={handleScrollTo} />
      <Hero onScrollDown={scrollDown} />
      <PetugasSection />
      <Footer />
    </main>
  );
}