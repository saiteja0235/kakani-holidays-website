import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Camera,
  ChevronLeft,
  ChevronRight,
  Expand,
  Quote,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import { testimonials } from "../data/content";

const gallery = Array.from({ length: 25 }, (_, index) => ({
  id: index + 1,
  image: `/images/gallery-uploaded/gallery-${String(index + 1).padStart(2, "0")}.webp`,
  title: `Kakani travel memory ${String(index + 1).padStart(2, "0")}`,
}));

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    const key = (event: KeyboardEvent) => {
      if (selected === null) return;
      if (event.key === "Escape") setSelected(null);
      if (event.key === "ArrowRight")
        setSelected((selected + 1) % gallery.length);
      if (event.key === "ArrowLeft")
        setSelected((selected - 1 + gallery.length) % gallery.length);
    };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [selected]);

  useEffect(() => {
    if (selected === null) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [selected]);

  const previous = () =>
    setSelected((current) =>
      current === null ? 0 : (current - 1 + gallery.length) % gallery.length,
    );
  const next = () =>
    setSelected((current) =>
      current === null ? 0 : (current + 1) % gallery.length,
    );

  return (
    <div className="gallery-premium overflow-hidden bg-[#f4f7f7]">
      <section className="relative flex min-h-[520px] items-end overflow-hidden bg-navy pb-20 text-white">
        <motion.img
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          src={gallery[1].image}
          alt="Kakani Holidays travel gallery"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05182c] via-[#05182c]/65 to-transparent" />
        <div className="gallery-orb absolute -right-24 top-10 h-80 w-80 rounded-full bg-teal/25 blur-3xl" />
        <div className="lux-container relative">
          <motion.div initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.85 }}>
            <p className="lux-eyebrow !text-[#ffc45c]">Gallery & reviews</p>
            <h1 className="mt-5 max-w-4xl font-serif text-6xl leading-[.95] md:text-8xl">
              Journeys captured.<br />
              <em className="text-[#e7b753]">Memories alive.</em>
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/65 md:text-base">
              Open any photograph and travel through the complete collection,
              one unforgettable moment at a time.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="lux-container">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/60 px-4 py-2 text-[10px] font-black uppercase tracking-[.2em] text-ocean shadow-sm backdrop-blur-xl">
                <Sparkles size={13} className="text-sunset" /> Travel gallery
              </span>
              <h2 className="mt-5 font-serif text-5xl text-navy md:text-7xl">
                Moments worth keeping.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-slate-500">
              {gallery.length} photographs from real journeys. Select a frame
              to explore it full screen.
            </p>
          </div>

          <motion.div layout className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
            {gallery.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: 40, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
                onClick={() => setSelected(index)}
                className="gallery-tile group relative mb-5 block w-full break-inside-avoid overflow-hidden rounded-[28px] border border-white/80 bg-white/55 p-2 text-left shadow-[0_18px_50px_rgba(6,27,51,.10)] backdrop-blur-xl"
              >
                <div className="relative overflow-hidden rounded-[22px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className={`gallery-tile-image w-full object-cover ${index % 5 === 0 || index % 5 === 3 ? "h-[430px]" : index % 3 === 0 ? "h-[350px]" : "h-[290px]"}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-white/5 opacity-70 transition duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-white">
                    <div>
                      <span className="text-[9px] font-black uppercase tracking-[.22em] text-[#ffc45c]">Kakani Holidays</span>
                      <p className="mt-1 font-serif text-xl">Travel memory {item.id}</p>
                    </div>
                    <span className="grid h-11 w-11 place-items-center rounded-full border border-white/30 bg-white/15 backdrop-blur-xl transition duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-white group-hover:text-navy">
                      <Expand size={17} />
                    </span>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-white/70 py-20 backdrop-blur-xl">
        <div className="lux-container">
          <div className="text-center">
            <p className="lux-eyebrow">Traveller reviews</p>
            <h2 className="mt-3 font-serif text-5xl md:text-7xl">Words from the journey.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {testimonials.map((review, index) => (
              <motion.article key={review.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ y: -7 }} className="rounded-[28px] border border-white bg-white/70 p-7 shadow-[0_18px_55px_rgba(6,27,51,.08)] backdrop-blur-xl">
                <Quote className="text-sunset" />
                <div className="mt-5 flex text-[#e5a52e]">{[1, 2, 3, 4, 5].map((star) => <Star key={star} size={14} fill="currentColor" />)}</div>
                <p className="mt-5 text-sm leading-7 text-slate-600">{review.review}</p>
                <p className="mt-6 text-sm font-bold text-navy">{review.name}<span className="block text-xs font-normal text-slate-400">{review.destination}</span></p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selected !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="fixed inset-0 z-[120] flex items-center justify-center overflow-hidden bg-[#020b16]/96 p-3 backdrop-blur-2xl" onClick={() => setSelected(null)} role="dialog" aria-modal="true" aria-label="Full screen travel gallery">
            <div className="absolute left-4 top-[max(1rem,env(safe-area-inset-top))] z-20 flex items-center gap-3 text-white">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/10"><Camera size={17} /></span>
              <div><p className="text-[9px] font-black uppercase tracking-[.2em] text-[#e7b753]">Kakani gallery</p><p className="text-xs text-white/60">{selected + 1} / {gallery.length}</p></div>
            </div>
            <button onClick={(event) => { event.stopPropagation(); setSelected(null); }} style={{ position: "fixed", top: "max(16px, env(safe-area-inset-top))", right: "16px", zIndex: 10000 }} className="flex h-12 items-center gap-2 rounded-full border-2 border-white bg-white px-4 font-sans text-xs font-black uppercase tracking-wider text-navy shadow-[0_12px_40px_rgba(0,0,0,.6)] transition duration-300 hover:scale-105 hover:bg-[#e7b753] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:h-14 md:px-5" aria-label="Close full screen gallery" title="Close gallery"><X size={21} strokeWidth={2.8} /><span>Close</span></button>
            <button onClick={(event) => { event.stopPropagation(); previous(); }} className="absolute left-3 z-20 grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl transition hover:scale-110 hover:bg-white hover:text-navy md:left-8 md:h-14 md:w-14" aria-label="Previous image"><ChevronLeft /></button>
            <AnimatePresence initial={false} mode="wait">
              <motion.figure key={gallery[selected].id} initial={{ opacity: 0, x: 70, scale: 0.94 }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={{ opacity: 0, x: -70, scale: 0.97 }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }} onClick={(event) => event.stopPropagation()} className="relative flex h-[88vh] w-[min(88vw,1450px)] items-center justify-center">
                <img src={gallery[selected].image} alt={gallery[selected].title} className="max-h-full max-w-full rounded-[20px] object-contain shadow-[0_35px_120px_rgba(0,0,0,.65)]" />
                <figcaption className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/15 bg-black/30 px-5 py-2 text-xs text-white/75 backdrop-blur-xl">Travel memory {gallery[selected].id}</figcaption>
              </motion.figure>
            </AnimatePresence>
            <button onClick={(event) => { event.stopPropagation(); next(); }} className="absolute right-3 z-20 grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl transition hover:scale-110 hover:bg-white hover:text-navy md:right-8 md:h-14 md:w-14" aria-label="Next image"><ChevronRight /></button>
            <button onClick={(event) => { event.stopPropagation(); setSelected(null); }} style={{ position: "fixed", bottom: "max(16px, env(safe-area-inset-bottom))", left: "50%", zIndex: 10000, transform: "translateX(-50%)" }} className="rounded-full border border-white/30 bg-white/15 px-6 py-3 text-xs font-extrabold text-white shadow-xl backdrop-blur-xl transition hover:bg-white hover:text-navy">Back to gallery</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
