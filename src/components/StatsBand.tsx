import {useEffect,useRef,useState} from 'react';
import {motion} from 'framer-motion';

const stats=[
  {value:10000,suffix:'+',label:'Tours completed'},
  {value:8000,suffix:'+',label:'Travel experiences'},
  {value:30000,suffix:'+',label:'Happy travellers'},
  {value:100,suffix:'%',label:'Retention rate'},
];

export default function StatsBand(){
  const ref=useRef<HTMLElement>(null);
  const [started,setStarted]=useState(false);
  useEffect(()=>{const node=ref.current;if(!node)return;const observer=new IntersectionObserver(([entry])=>{if(entry.isIntersecting){setStarted(true);observer.disconnect()}},{threshold:.3});observer.observe(node);return()=>observer.disconnect()},[]);
  return <section ref={ref} className="relative overflow-hidden bg-[#071d33] py-16 text-white md:py-20">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(43,143,163,.24),transparent_38%),linear-gradient(115deg,#123b53_0%,#071d33_58%,#192235_100%)]"/>
    <motion.svg initial={{pathLength:0,opacity:0}} animate={started?{pathLength:1,opacity:1}:{}} transition={{duration:2.2,ease:'easeInOut'}} className="absolute inset-0 h-full w-full opacity-40" viewBox="0 0 1500 260" preserveAspectRatio="none" aria-hidden="true"><motion.path d="M-30 280 C 260 260 400 300 650 185 S 1000 -20 1540 -60" fill="none" stroke="#1f849e" strokeWidth="2" strokeDasharray="13 16"/><circle cx="650" cy="185" r="6" fill="#ff7a45"/><circle cx="1260" cy="15" r="6" fill="#ff7a45"/></motion.svg>
    <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-sunset via-teal to-ocean"/>
    <div className="lux-container relative grid grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-0">{stats.map((stat,index)=><motion.article initial={{opacity:0,y:30}} animate={started?{opacity:1,y:0}:{}} transition={{delay:index*.12,duration:.65}} key={stat.label} className={`px-4 md:px-12 ${index>0?'md:border-l md:border-white/15':''}`}><strong className="block font-serif text-4xl text-[#e7b753] sm:text-5xl lg:text-6xl"><CountUp active={started} value={stat.value}/>{stat.suffix}</strong><p className="mt-3 text-[10px] font-bold uppercase tracking-[.2em] text-[#91b5c8] sm:text-xs">{stat.label}</p></motion.article>)}</div>
  </section>;
}

function CountUp({active,value}:{active:boolean;value:number}){const [shown,setShown]=useState(0);useEffect(()=>{if(!active)return;let frame=0;const duration=1600,start=performance.now();const tick=(now:number)=>{const progress=Math.min((now-start)/duration,1);setShown(Math.round(value*(1-Math.pow(1-progress,3))));if(progress<1)frame=requestAnimationFrame(tick)};frame=requestAnimationFrame(tick);return()=>cancelAnimationFrame(frame)},[active,value]);return <>{shown.toLocaleString('en-IN')}</>}
