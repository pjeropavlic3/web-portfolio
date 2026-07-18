import { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";

// Homepage images
import imgH1 from "@/imports/Homepage/25bffbe206fbd29fdf1291a8fd0033e861519974.png";
import imgH2 from "@/imports/Homepage/c6a65768f09d5b965a1f4ec4bb1da05e44f59156.png";
import imgH3 from "@/imports/Homepage/66567dcdda9c9ec368fc2a3c46460dbb3531d190.png";
import imgH4 from "@/imports/Homepage/8b435e23e9d320d6b65f162147c4750cd5c79632.png";

// Project 01 detail images
import imgP1a from "@/imports/ProjectInfo-1/9f388cccfa674d33df6f61bfeb4a12b845acb47c.png";
import imgP1b from "@/imports/ProjectInfo-1/1d102274b3a2914eb0577f013e3e1b77ef41ac3e.png";
import imgP1c from "@/imports/ProjectInfo-1/f8bbab8c44cd193c50b070de74db6ccdbb8807c0.png";
import imgP1d from "@/imports/otvaranje_arhiv_kutije.jpg";
import imgP1e from "@/imports/listanje_knjige.jpg";
import imgKinoA from "@/imports/kinoa_plakat_mockup2.jpg";
import imgKinoB from "@/imports/image.png";
import imgKinoC from "@/imports/image-1.png";
import imgKinoD from "@/imports/image-2.png";
import imgLoneA from "@/imports/image-3.png";
import imgLoneB from "@/imports/image-4.png";
import imgBooklet from "@/imports/Image_20251218_0006.png";
import imgBooklet2 from "@/imports/Image_20251218_0005.png";
import imgBooklet3 from "@/imports/Image_20251218_0007.png";
import imgBooklet4 from "@/imports/Image_20251218_0009.png";
import imgBooklet5 from "@/imports/Image_20251218_0010.png";

// ─── Types ────────────────────────────────────────────────────────────────────

interface DetailItem {
  type: "image" | "video";
  src?: string;
  aspect: string;
  videoUrl?: string;
  caption?: string;
}

interface Project {
  id: string;
  number: string;
  title: string;
  englishTitle: string;
  subtitle: string;
  thumbnailImage: string;
  thumbnailFit: "contain" | "cover";
  thumbnailAspect: string;
  detailImages: DetailItem[];
  description: string[];
  credits: { label: string; value: string }[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const PROJECTS: Project[] = [
  {
    id: "01",
    number: "01",
    title: "Things left behind",
    englishTitle: "Things left behind",
    subtitle: "Master's Thesis",
    thumbnailImage: imgH1,
    thumbnailFit: "contain",
    thumbnailAspect: "aspect-[701/467]",
    detailImages: [
      { type: "image", src: imgP1a, aspect: "aspect-[698/768]", caption: "Archival box with five smaller boxes, each containing an object and a written memory fragment." },
      { type: "image", src: imgP1b, aspect: "aspect-[698/492]", caption: "Detail of the publication guiding the viewer through the process of confronting an inheritance." },
      { type: "image", src: imgP1c, aspect: "aspect-[698/756]", caption: "Publication that somes with the archival box." },
      { type: "image", src: imgP1d, aspect: "aspect-[3/2]", caption: "Opening the archival box — the act of unpacking as a metaphor for grief and memory." },
      { type: "image", src: imgP1e, aspect: "aspect-[3/2]", caption: "Pages of the accompanying publication." },
    ],
    description: [
      "The project explores the relationship between grief, memory, and the material traces a person leaves behind after death. The starting point of the project is the personal experience of clearing out an apartment after the death of the author's grandfather, during which everyday objects became triggers for memories of specific episodes from his life.",
      "      Through an autoethnographic approach, the project documents the process of confronting an inheritance through photographing the space, selecting objects, and writing down memories associated with them. A large number of inherited belongings is gradually reduced to five selected objects presented in the form of smaller boxes, symbolizing the process of packing and clearing the apartment.",
      "      The final work consists of an archival box containing a publication and five smaller boxes. The publication guides the viewer through the process behind the creation of the project, while the smaller boxes contain objects and textual fragments of memories connected to them. The outer surfaces of the boxes feature graphics of the objects, while the interiors contain photographs of the spaces from which the objects originated, creating a connection between object, space, and memory.",
      "      At the same time, the project questions how we confront inheritance and the process of separation after death, and whether it is possible to develop a more conscious and empathetic relationship toward the generations that come after us.",
    ],
    credits: [
      { label: "Student", value: "univ. mag. art. Petra Pavlić" },
      { label: "Mentor", value: "doc. art. Dina Milovčić" },
      { label: "Faculty", value: "School of Design, Faculty of Architecture in Zagreb" },
      { label: "Year", value: "2025./2026." },
    ],
  },
  {
    id: "02",
    number: "02",
    title: "Kino A214",
    englishTitle: "Kino A214",
    subtitle: "Student Collective Project",
    thumbnailImage: imgKinoA,
    thumbnailFit: "cover",
    thumbnailAspect: "aspect-[698/873]",
    detailImages: [
      { type: "image", src: imgKinoA, aspect: "aspect-[2/3]", caption: "Open call poster for Kino A214." },
      { type: "image", src: imgKinoB, aspect: "aspect-[4/3]", caption: "Post-screening discussion with the filmmaker and student moderators." },
      { type: "image", src: imgKinoC, aspect: "aspect-[4/3]", caption: "Tibor Đurđev (Žive slike, 2025.) in conversation with the audience during a Q&A session." },
      { type: "image", src: imgKinoD, aspect: "aspect-[4/3]", caption: "Screening event with Mara Prpić (Žal, 2024.) students and guests gathered for the programme." },
    ],
    description: ["The student collective focuses on promoting short films and bringing them closer to younger audiences. Each screening features the filmmakers, who present their work and participate in discussions moderated by students."],
    credits: [
      { label: "Student", value: "univ. mag. art. Petra Pavlić" },
      { label: "Year", value: "2025./2026." },
    ],
  },
  {
    id: "04",
    number: "04",
    title: "k. magazine",
    englishTitle: "k. magazine",
    subtitle: "Magazine Layout",
    thumbnailImage: imgH4,
    thumbnailFit: "cover",
    thumbnailAspect: "aspect-[701/772]",
    detailImages: [{ type: "image", src: imgH4, aspect: "aspect-[701/772]", caption: "Cover and spread design from k. magazine — editorial layout and typography." }],
    description: ["Queer, Culture, and Representation is the 16th issue of the magazine k., for which I handled the publication's layout. The project involved organizing the content and designing the magazine's visual structure. The publication was launched at [[Booksa|https://www.booksa.hr]], where the magazine was presented to the public through a discussion and a promotional event."],
    credits: [
      { label: "Student", value: "univ. mag. art. Petra Pavlić" },
      { label: "Year", value: "2025./2026." },
    ],
  },
  {
    id: "05",
    number: "05",
    title: "A lone wanderer",
    englishTitle: "A lone wanderer",
    subtitle: "Short Documentary Film",
    thumbnailImage: imgH3,
    thumbnailFit: "cover",
    thumbnailAspect: "aspect-[698/716]",
    detailImages: [
      {
        type: "video",
        aspect: "aspect-video",
        videoUrl: "https://player.vimeo.com/video/1196888448?badge=0&autopause=0&player_id=0&app_id=58479",
        caption: "A lone wanderer — short documentary film, KinoKlub Zagreb, 2025.",
      },
      { type: "image", src: imgLoneA, aspect: "aspect-[4/3]", caption: "Film still — a gathering, family traces left in the apartment." },
      { type: "image", src: imgLoneB, aspect: "aspect-[4/3]", caption: "Film still — archival footage of a sailboat on open water." },
    ],
    description: ["After my grandfather's death, I return to his apartment, trying to understand who he really was. Through the objects he left behind and my own personal memories, a portrait of the man gradually takes shape. The film was created as part of a workshop at [[KinoKlub Zagreb|https://kkz.hr]] under the mentorship of Filip Peruzović, and was screened at the annual showcase at [[Kinoteka Zagreb|https://kinokinoteka.hr]]."],
    credits: [
      { label: "Student", value: "univ. mag. art. Petra Pavlić" },
      { label: "Mentor", value: "Filip Peruzović" },
      { label: "Year", value: "2025./2026." },
    ],
  },
  {
    id: "06",
    number: "06",
    title: "Booklet of Memory",
    englishTitle: "Booklet of Memory",
    subtitle: "Side Research Project, Book Layout",
    thumbnailImage: imgBooklet,
    thumbnailFit: "cover",
    thumbnailAspect: "aspect-[701/467]",
    detailImages: [
      { type: "image", src: imgBooklet, aspect: "aspect-[4/3]", caption: "Booklet of Memory — cover spread, risograph print on kraft paper." },
      { type: "image", src: imgBooklet2, aspect: "aspect-[4/3]", caption: "Interior spread — bedroom scene and worn shoes, printed on kraft paper." },
      { type: "image", src: imgBooklet3, aspect: "aspect-[4/3]", caption: "Interior spread — textured surface and everyday object detail." },
      { type: "image", src: imgBooklet4, aspect: "aspect-[4/3]", caption: "Interior spread — personal belongings and a cartwheel, layered imagery." },
      { type: "image", src: imgBooklet5, aspect: "aspect-[4/3]", caption: "Interior spread — kitchen stove and window light, domestic space." },
    ],
    description: ["A short photography research booklet. It was part of a research process."],
    credits: [
      { label: "Student", value: "univ. mag. art. Petra Pavlić" },
      { label: "Exhibition", value: "[[DA! Festival|https://da-festival.hr/izlozba/knjizica-sjecanja/]]" },
      { label: "Year", value: "2025./2026." },
    ],
  },
];

const LEFT_PROJECT_IDS = ["01", "04", "06"];
const RIGHT_PROJECT_IDS = ["02", "05"];

// ─── Constants ────────────────────────────────────────────────────────────────

const FONT: React.CSSProperties = {
  fontFamily: "'Uncut Sans', sans-serif",
  fontWeight: 400,
  letterSpacing: "0.01em",
};

const FADE_INITIAL: React.CSSProperties = {
  opacity: 0,
  transform: "translateY(20px)",
  transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
};

// ─── Hooks ────────────────────────────────────────────────────────────────────

function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const fromBelow = entry.boundingClientRect.top > 0;
        if (entry.isIntersecting && fromBelow) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        } else if (!entry.isIntersecting && fromBelow) {
          el.style.opacity = "0";
          el.style.transform = "translateY(20px)";
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

// ─── Shared ───────────────────────────────────────────────────────────────────

function FadeSection({ id, className, children }: { id?: string; className?: string; children: React.ReactNode }) {
  const ref = useFadeIn();
  return (
    <section ref={ref} id={id} className={className} style={FADE_INITIAL}>
      {children}
    </section>
  );
}

// ─── Lightbox ─────────────────────────────────────────────────────────────────

function VimeoPlayer({ url, title }: { url: string; title: string }) {
  useEffect(() => {
    if (document.querySelector('script[src="https://player.vimeo.com/api/player.js"]')) return;
    const s = document.createElement("script");
    s.src = "https://player.vimeo.com/api/player.js";
    document.head.appendChild(s);
  }, []);

  return (
    <iframe
      src={url}
      className="absolute inset-0 size-full"
      frameBorder="0"
      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      title={title}
    />
  );
}

function Lightbox({
  items,
  initialIndex,
  projectTitle,
  onClose,
}: {
  items: DetailItem[];
  initialIndex: number;
  projectTitle: string;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(initialIndex);
  const item = items[index];

  const prev = useCallback(() => setIndex((i) => Math.max(i - 1, 0)), []);
  const next = useCallback(() => setIndex((i) => Math.min(i + 1, items.length - 1)), [items.length]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, prev, next]);

  const videoSrc = item.type === "video"
    ? item.videoUrl!.replace("autopause=0", "autopause=0&autoplay=1")
    : null;

  return (
    <div className="fixed inset-0 z-[200] bg-black flex flex-col" style={FONT}>

      {/* Bar */}
      <div className="flex items-center justify-between px-[14px] h-[47px] shrink-0">
        <span className="text-[14px] text-white/50" style={FONT}>
          {items.length > 1 ? `${index + 1} / ${items.length}` : projectTitle}
        </span>
        <button
          onClick={onClose}
          className="text-[14px] text-white hover:opacity-50 transition-opacity cursor-pointer"
          style={FONT}
        >
          (close)
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-[14px] pb-[14px] min-h-0 gap-4">
        {item.type === "video" ? (
          <div className="w-full max-w-5xl aspect-video relative">
            <VimeoPlayer url={videoSrc!} title={projectTitle} />
          </div>
        ) : (
          <img
            src={item.src}
            alt={`${projectTitle} — ${index + 1}`}
            className="max-h-full max-w-full object-contain min-h-0"
          />
        )}
        {item.caption && (
          <p className="text-[11px] text-white/50 text-center max-w-lg leading-relaxed" style={FONT}>
            {item.caption}
          </p>
        )}
      </div>

      {/* Carousel nav — only when multiple items */}
      {items.length > 1 && (
        <div className="flex items-center justify-between px-[14px] pb-[14px] shrink-0">
          <button
            onClick={prev}
            disabled={index === 0}
            className="text-[14px] text-white disabled:opacity-20 hover:opacity-50 transition-opacity cursor-pointer"
            style={FONT}
          >
            ← prev
          </button>
          <div className="flex gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-1 h-1 rounded-full transition-opacity ${i === index ? "bg-white" : "bg-white/30"}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            disabled={index === items.length - 1}
            className="text-[14px] text-white disabled:opacity-20 hover:opacity-50 transition-opacity cursor-pointer"
            style={FONT}
          >
            next →
          </button>
        </div>
      )}
    </div>
  );
}

// ─── Homepage ─────────────────────────────────────────────────────────────────

function ProjectBlock({ project, onSelect }: { project: Project; onSelect: (p: Project) => void }) {
  const ref = useFadeIn();
  return (
    <div ref={ref} style={FADE_INITIAL} className="flex flex-col gap-0">
      <button
        className={`w-full ${project.thumbnailAspect} relative overflow-hidden bg-[#f2f2f0] cursor-pointer group`}
        onClick={() => onSelect(project)}
        aria-label={`Open project: ${project.title}`}
      >
        <img
          src={project.thumbnailImage}
          alt={project.title}
          className={`absolute inset-0 size-full transition-transform duration-500 ease-out group-hover:scale-[1.02] ${
            project.thumbnailFit === "cover" ? "object-cover" : "object-contain"
          }`}
        />
      </button>
      <div className="flex items-baseline gap-3 pt-[7px] pb-[18px] cursor-pointer" onClick={() => onSelect(project)}>
        <span className="text-[11px] text-black tabular-nums shrink-0" style={FONT}>{project.number}</span>
        <span className="text-[11px] text-black" style={FONT}>{project.title}</span>
        <span className="text-[11px] text-[#aeaeae] ml-4 shrink-0" style={FONT}>{project.subtitle}</span>
      </div>
    </div>
  );
}

function HomeNav({ menuOpen, setMenuOpen, onAbout }: { menuOpen: boolean; setMenuOpen: (v: boolean) => void; onAbout: () => void }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent h-[50px] flex items-center px-[14px]">
      <div className="flex items-center justify-between w-full">
        <span className="text-[14px] text-black" style={FONT}>Petra Pavlić portfolio</span>

        <nav className="hidden md:flex items-center gap-10">
          <button onClick={onAbout} className="text-[14px] text-black hover:opacity-50 transition-opacity cursor-pointer bg-transparent border-none p-0" style={FONT}>about</button>
          <a href="https://www.instagram.com/pavlic.petra/" target="_blank" rel="noopener noreferrer" className="text-[14px] text-black no-underline hover:opacity-50 transition-opacity" style={{ ...FONT, marginRight: "14px" }}>instagram</a>
        </nav>

        <button className="md:hidden flex flex-col gap-[5px] p-1" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={`block w-5 h-px bg-black transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
          <span className={`block w-5 h-px bg-black transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-black transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
        </button>
      </div>

      <div className={`md:hidden absolute top-[50px] left-0 right-0 bg-white/90 backdrop-blur-sm border-t border-[rgba(0,0,0,0.06)] flex flex-col px-[14px] py-4 gap-4 transition-all duration-200 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <button onClick={() => { onAbout(); setMenuOpen(false); }} className="text-[14px] text-black text-left cursor-pointer bg-transparent border-none p-0" style={FONT}>about me</button>
        <a href="https://www.instagram.com/pavlic.petra/" target="_blank" rel="noopener noreferrer" className="text-[14px] text-black no-underline" style={FONT} onClick={() => setMenuOpen(false)}>instagram</a>
      </div>
    </header>
  );
}

function HomePage({ onSelect, onAbout }: { onSelect: (p: Project) => void; onAbout: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const left = PROJECTS.filter((p) => LEFT_PROJECT_IDS.includes(p.id));
  const right = PROJECTS.filter((p) => RIGHT_PROJECT_IDS.includes(p.id));

  return (
    <div className="bg-white min-h-screen" style={FONT}>
      <HomeNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} onAbout={onAbout} />
      <main id="work" className="pt-[50px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[15px] px-[14px] md:px-[15px]">
          <div className="flex flex-col">
            {left.map((p) => <ProjectBlock key={p.id} project={p} onSelect={onSelect} />)}
          </div>
          <div className="flex flex-col">
            {right.map((p) => <ProjectBlock key={p.id} project={p} onSelect={onSelect} />)}
          </div>
        </div>
      </main>

      <footer className="flex items-center justify-between pl-[14px] h-[50px]">
        <a href="mailto:petra.pavlic3@gmail.com" className="text-[14px] text-black no-underline hover:opacity-50 transition-opacity" style={FONT}>petra.pavlic3@gmail.com</a>
        <nav className="hidden md:flex items-center gap-10 pr-[14px]">
          <button onClick={onAbout} className="text-[14px] text-black hover:opacity-50 transition-opacity cursor-pointer bg-transparent border-none p-0" style={FONT}>about</button>
          <a href="https://www.instagram.com/pavlic.petra/" target="_blank" rel="noopener noreferrer" className="text-[14px] text-black no-underline hover:opacity-50 transition-opacity" style={FONT}>instagram</a>
        </nav>
      </footer>
    </div>
  );
}

// ─── Project detail page ──────────────────────────────────────────────────────

const FOOTER_LINKS = [
  { label: "about me", href: "#information" },
  { label: "instagram", href: "https://www.instagram.com/pavlic.petra/", external: true },
];

function ProjectPage({ project, onClose }: { project: Project; onClose: () => void }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && lightboxIndex === null) onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, lightboxIndex]);

  return (
    <div className="bg-white min-h-screen flex flex-col" style={FONT}>

      {/* Top bar */}
      <header className="flex items-center justify-between px-[14px] h-[47px] shrink-0">
        <span className="text-[14px] text-black" style={FONT}>{project.englishTitle}</span>
        <button
          onClick={onClose}
          className="text-[14px] text-black hover:opacity-50 transition-opacity cursor-pointer"
          style={FONT}
        >
          (close)
        </button>
      </header>

      {/* Two-column body */}
      <main className="flex flex-col md:flex-row md:items-start flex-1">

        {/* Left — text */}
        <div className="order-2 md:order-1 md:w-[50.5%] px-[14px] md:pl-[45px] md:pr-0 pt-0 pb-16">
          <div className="md:max-w-[387px]">
            <div className="pt-8 md:pt-0 flex flex-col">
              {project.description.map((para, i) => (
                <p key={i} className="text-[14px] text-black leading-normal mb-0 whitespace-pre-wrap" style={FONT}>
                  {para.split(/(\[\[.*?\|.*?\]\])/g).map((part, j) => {
                    const match = part.match(/^\[\[(.*?)\|(.*?)\]\]$/);
                    if (match) return (
                      <a key={j} href={match[2]} target="_blank" rel="noopener noreferrer"
                        className="text-blue-600 underline hover:text-blue-800 transition-colors"
                        style={FONT}>{match[1]}</a>
                    );
                    return part;
                  })}
                </p>
              ))}
            </div>
            <div className="mt-16 md:mt-[180px] flex flex-col">
              {project.credits.map(({ label, value }, i) => (
                <div key={label} className={i > 0 ? "mt-[1em]" : ""}>
                  <p className="text-[14px] text-black leading-normal mb-0" style={FONT}>{label}</p>
                  <p className="text-[14px] text-black leading-normal mb-0" style={FONT}>
                    {value.split(/(\[\[.*?\|.*?\]\])/g).map((part, j) => {
                      const m = part.match(/^\[\[(.*?)\|(.*?)\]\]$/);
                      if (m) return <a key={j} href={m[2]} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800 transition-colors" style={FONT}>{m[1]}</a>;
                      return part;
                    })}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — images/video with pr-[14px] so right edge matches (close) button */}
        <div className="order-1 md:order-2 md:w-[49.5%] flex flex-col gap-[12px] pr-[14px]">
          {project.detailImages.map((item, i) => (
            <div
              key={i}
              className={`w-[82%] ml-auto ${item.aspect} relative overflow-hidden cursor-pointer group`}
              onClick={() => setLightboxIndex(i)}
            >
              {item.type === "video" ? (
                /* Video poster — click opens lightbox */
                <div className="absolute inset-0 bg-[#111] flex items-center justify-center">
                  <div className="flex flex-col items-center gap-3">
                    {/* Play icon */}
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="opacity-70 group-hover:opacity-100 transition-opacity">
                      <circle cx="24" cy="24" r="23" stroke="white" strokeWidth="1.5" />
                      <polygon points="19,15 37,24 19,33" fill="white" />
                    </svg>
                    <span className="text-white/60 text-[11px]" style={FONT}>play</span>
                  </div>
                </div>
              ) : (
                <img
                  src={item.src}
                  alt={`${project.title} — ${i + 1}`}
                  className="absolute inset-0 size-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  loading={i === 0 ? "eager" : "lazy"}
                />
              )}
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="flex items-center justify-between pl-[12px] pr-[14px] py-[14px]">
        <button
          onClick={onClose}
          className="text-[14px] text-black hover:opacity-50 transition-opacity cursor-pointer"
          style={FONT}
        >
          (return to projects)
        </button>
        <nav className="flex items-center gap-8">
          {FOOTER_LINKS.map(({ label, href, external }) => (
            <a key={label} href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="text-[14px] text-black no-underline hover:opacity-50 transition-opacity"
              style={FONT}>
              {label}
            </a>
          ))}
        </nav>
      </footer>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          items={project.detailImages}
          initialIndex={lightboxIndex}
          projectTitle={project.englishTitle}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  );
}

// ─── About page ───────────────────────────────────────────────────────────────

import imgAbout from "@/imports/About-1/0aa7385224c5233604883be5628a0196b416bf93.png";

function AboutPage({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div className="bg-white min-h-screen flex flex-col" style={FONT}>

      <header className="flex items-center justify-between px-[14px] h-[47px] shrink-0">
        <span className="text-[14px] text-black" style={FONT}>About</span>
        <button onClick={onClose} className="text-[14px] text-black hover:opacity-50 transition-opacity cursor-pointer" style={FONT}>
          (close)
        </button>
      </header>

      <main className="flex-1 flex flex-col md:flex-row md:items-start px-[14px] md:px-0 pt-6 md:pt-0 pb-16 gap-8 md:gap-0">

        {/* Left — bio + contact */}
        <div className="md:pl-[45px] md:w-[50%] flex flex-col gap-8">
          <div className="md:max-w-[387px]">
            <p className="text-[14px] text-black leading-normal mb-0 whitespace-pre-wrap" style={FONT}>{"Hi! "}</p>
            <p className="text-[14px] text-black leading-normal mb-0 whitespace-pre-wrap" style={FONT}>{"      My name is Petra, I come from Zagreb, where I completed a Master's degree in Visual Communications at the Faculty of Architecture, University of Zagreb. I earned my Bachelor's degree from the Faculty of Graphic Arts, where I further developed my knowledge of graphic technology, editorial design, and print production."}</p>
            <p className="text-[14px] text-black leading-normal whitespace-pre-wrap" style={FONT}>{"      I have participated in group exhibitions and contributed to the production and installation of exhibition projects. My work spans graphic design, film, and photography, and I recently presented my short film at a public screening at Kinoteka. I have a particular interest in the social dimension of design, focusing on mental health and the use of visual communication as a tool for social engagement."}</p>
          </div>
          <div className="md:max-w-[387px]">
            <p className="text-[14px] text-black leading-normal mb-0" style={FONT}>Zagreb, Croatia</p>
            <a href="mailto:petra.pavlic3@gmail.com" className="text-[14px] text-black no-underline hover:opacity-50 transition-opacity" style={FONT}>petra.pavlic3@gmail.com</a>
          </div>
        </div>

        {/* Right — photo sized to match left column height */}
        <div className="md:w-[50%] md:pr-[14px] md:self-stretch flex items-start">
          <img src={imgAbout} alt="Petra Pavlić" className="w-auto h-full max-h-full object-contain object-top" />
        </div>

      </main>
    </div>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    document.documentElement.lang = "hr";
  }, []);

  const handleSelect = (p: Project) => { setActiveProject(p); };
  const handleClose = () => { setActiveProject(null); };
  const handleAbout = () => { setShowAbout(true); };
  const handleAboutClose = () => { setShowAbout(false); };

  const pageKey = activeProject
    ? `project-${activeProject.id}`
    : showAbout
    ? "about"
    : "home";

  const pageContent = activeProject
    ? <ProjectPage project={activeProject} onClose={handleClose} />
    : showAbout
    ? <AboutPage onClose={handleAboutClose} />
    : <HomePage onSelect={handleSelect} onAbout={handleAbout} />;

  return (
    <AnimatePresence mode="sync">
      <motion.div
        key={pageKey}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        data-scroll-container=""
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflowY: "auto",
          background: "white",
        }}
      >
        {pageContent}
      </motion.div>
    </AnimatePresence>
  );
}
