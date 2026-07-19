import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CalendarDays, Search, Sparkles, UserRound } from "lucide-react";
import { premiumBlogs } from "../data/blogCatalog";

const PER_PAGE = 7;

export default function Blogs() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);
  const grid = useRef<HTMLDivElement>(null);
  const categories = ["All", ...Array.from(new Set(premiumBlogs.map((post) => post.category)))];
  const filtered = useMemo(() => premiumBlogs.filter((post) => (category === "All" || post.category === category) && `${post.title} ${post.excerpt}`.toLowerCase().includes(query.toLowerCase())), [query, category]);
  const pages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const shown = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);
  const featured = premiumBlogs[0];

  useEffect(() => setPage(1), [query, category]);
  const changePage = (next: number) => {
    setPage(Math.min(Math.max(next, 1), pages));
    requestAnimationFrame(() => grid.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
  };

  return <div className="blogs-premium overflow-hidden bg-[#f3f6fa]">
    <section className="relative min-h-[560px] overflow-hidden bg-navy text-white">
      <motion.img initial={{scale:1.12}} animate={{scale:1}} transition={{duration:1.8,ease:[.22,1,.36,1]}} src={featured.image} alt={featured.imageLabel} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover opacity-55" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#041528] via-[#041528]/78 to-[#041528]/25" />
      <div className="blog-glow absolute -right-32 top-0 h-96 w-96 rounded-full bg-teal/25 blur-3xl" />
      <div className="lux-container relative flex min-h-[560px] items-center pt-20"><motion.div initial={{opacity:0,y:35}} animate={{opacity:1,y:0}} transition={{delay:.2,duration:.85}} className="max-w-4xl"><p className="lux-eyebrow !text-[#ffc45c]">Travel journal · 35 destinations</p><h1 className="mt-5 font-serif text-6xl leading-[.92] md:text-8xl">Stories that take you<br/><em className="text-[#e7b753]">somewhere extraordinary.</em></h1><p className="mt-6 max-w-xl text-sm leading-7 text-white/65 md:text-base">Premium destination guides, practical travel ideas and inspiration for every kind of Kakani journey.</p></motion.div></div>
    </section>

    <section ref={grid} className="scroll-mt-28 py-16"><div className="lux-container">
      <div className="rounded-[26px] border border-white/80 bg-white/65 p-4 shadow-[0_20px_65px_rgba(6,27,51,.09)] backdrop-blur-xl"><div className="flex flex-col gap-4 lg:flex-row lg:items-center"><label className="flex flex-1 items-center gap-3 rounded-2xl bg-slate-100/90 px-4"><Search size={17}/><input value={query} onChange={(event)=>setQuery(event.target.value)} placeholder="Search destinations and travel stories" className="w-full bg-transparent py-4 text-sm outline-none"/></label><div className="no-scrollbar flex gap-2 overflow-x-auto">{categories.map((item)=><button key={item} onClick={()=>setCategory(item)} className={`whitespace-nowrap rounded-full px-4 py-2.5 text-[10px] font-black uppercase tracking-wide transition ${category===item?'bg-navy text-white shadow-lg':'bg-white text-slate-500 hover:-translate-y-0.5 hover:text-ocean'}`}>{item}</button>)}</div></div></div>

      <div className="mt-8 flex items-end justify-between gap-4"><div><span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[.2em] text-ocean"><Sparkles size={13} className="text-sunset"/> Travel stories</span><h2 className="mt-3 font-serif text-4xl text-navy md:text-6xl">Explore every place.</h2></div><p className="hidden text-xs font-bold text-slate-400 md:block">Page {page} of {pages} · {filtered.length} guides</p></div>

      <AnimatePresence mode="wait"><motion.div key={`${page}-${category}-${query}`} initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-18}} transition={{duration:.45,ease:[.22,1,.36,1]}} className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">{shown.map((post,index)=><motion.article key={post.slug} initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{delay:(index%3)*.07}} whileHover={{y:-9}} className={`blog-premium-card group overflow-hidden rounded-[28px] border border-white/90 bg-white/75 shadow-[0_15px_45px_rgba(6,27,51,.09)] backdrop-blur-xl ${index===0?'lg:col-span-2':''}`}><Link to={`/blogs/${post.slug}`} className={`relative block overflow-hidden ${index===0?'h-72 md:h-[390px]':'h-64'}`}><img src={post.image} alt={post.imageLabel} loading={index<2?'eager':'lazy'} decoding="async" className="h-full w-full object-cover transition duration-1000 group-hover:scale-[1.07]"/><div className="absolute inset-0 bg-gradient-to-t from-navy/75 via-transparent to-transparent opacity-65 transition group-hover:opacity-85"/><span className="absolute left-5 top-5 rounded-full border border-white/25 bg-navy/80 px-4 py-2 text-[9px] font-black uppercase tracking-[.14em] text-white backdrop-blur-xl">{post.category}</span></Link><div className="p-6"><div className="flex flex-wrap gap-4 text-[10px] text-slate-400"><span className="flex items-center gap-1.5"><CalendarDays size={13}/>{post.date}</span><span className="flex items-center gap-1.5"><UserRound size={13}/>Kakani Holidays</span></div><h3 className="mt-4 font-serif text-2xl leading-tight text-navy md:text-[1.7rem]"><Link to={`/blogs/${post.slug}`}>{post.title}</Link></h3><p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-500">{post.excerpt}</p><Link to={`/blogs/${post.slug}`} className="mt-5 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[.16em] text-ocean">Read the story <ArrowRight size={15} className="transition group-hover:translate-x-1"/></Link></div></motion.article>)}</motion.div></AnimatePresence>

      {!shown.length&&<div className="py-24 text-center"><h2 className="font-serif text-4xl text-navy">No stories found.</h2><button onClick={()=>{setQuery('');setCategory('All')}} className="mt-5 text-xs font-black uppercase tracking-wider text-ocean">View every destination</button></div>}
      {shown.length>0&&<nav aria-label="Blog pagination" className="mt-14 flex items-center justify-center gap-2"><button onClick={()=>changePage(page-1)} disabled={page===1} className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-navy shadow-sm transition hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-35"><ArrowLeft size={17}/></button>{Array.from({length:pages},(_,index)=>index+1).map((number)=><button key={number} onClick={()=>changePage(number)} aria-current={page===number?'page':undefined} className={`grid h-11 w-11 place-items-center rounded-full text-xs font-black transition ${page===number?'scale-110 bg-navy text-white shadow-[0_10px_30px_rgba(6,27,51,.25)]':'border border-slate-200 bg-white text-navy hover:-translate-y-1 hover:border-ocean'}`}>{number}</button>)}<button onClick={()=>changePage(page+1)} disabled={page===pages} className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-navy shadow-sm transition hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-35"><ArrowRight size={17}/></button></nav>}
    </div></section>
  </div>;
}
