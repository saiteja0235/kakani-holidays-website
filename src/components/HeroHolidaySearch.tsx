import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {ArrowUp,ChevronDown} from 'lucide-react';
import {categoryLabels,destinationCatalog} from '../data/destinationCatalog';

const styles=['All','Family','Honeymoon','Group Tours','Pilgrimage'];

export default function HeroHolidaySearch(){
  const navigate=useNavigate();
  const [destination,setDestination]=useState('');
  const [month,setMonth]=useState('');
  const [travellers,setTravellers]=useState('2');
  const [style,setStyle]=useState('All');
  const submit=(event:React.FormEvent)=>{
    event.preventDefault();
    const params=new URLSearchParams();
    if(destination)params.set('destination',destination);
    if(month)params.set('month',month);
    params.set('travellers',travellers);
    if(style!=='All')params.set('style',style);
    navigate(`/packages?${params.toString()}`);
  };
  const destinations=destinationCatalog.map(item=>[item.name,`${item.name} — ${categoryLabels[item.category]}`]);
  const guests=Array.from({length:10},(_,i)=>[String(i+1),`${i+1} ${i===0?'guest':'guests'}`]);
  return <form onSubmit={submit} aria-label="Find a holiday" className="absolute left-1/2 top-[max(calc(100vh-1px),759px)] z-20 w-[min(1120px,calc(100%-2rem))] -translate-x-1/2 -translate-y-1/2 rounded-[24px] border border-white/15 bg-[#071d33]/88 p-3 text-white shadow-[0_25px_70px_rgba(2,12,23,.45)] backdrop-blur-2xl">
    <div className="grid gap-1 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_.8fr_1fr_1.05fr]">
      <SearchSelect label="Destination" value={destination} onChange={setDestination} options={destinations} empty="Anywhere in the world"/>
      <label className="search-field rounded-2xl border border-white/10 bg-white/[.06] px-4 py-3"><span className="text-[9px] font-black uppercase tracking-[.16em] text-[#8db4c7]">Travel month</span><input type="month" min={new Date().toISOString().slice(0,7)} value={month} onChange={e=>setMonth(e.target.value)} className="mt-1 w-full bg-transparent text-sm font-extrabold text-white outline-none [color-scheme:dark]"/></label>
      <SearchSelect label="Travellers" value={travellers} onChange={setTravellers} options={guests}/>
      <SearchSelect label="Holiday type" value={style} onChange={setStyle} options={styles.map(x=>[x,x==='All'?'Any holiday style':x])}/>
      <button className="group flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-[#125c4c] px-5 py-4 text-xs font-black uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-navy hover:shadow-lg">Find my holiday <ArrowUp className="rotate-45 transition group-hover:translate-x-1 group-hover:-translate-y-1" size={15}/></button>
    </div>
  </form>;
}

function SearchSelect({label,value,onChange,options,empty}:{label:string;value:string;onChange:(value:string)=>void;options:string[][];empty?:string}){return <label className="search-field relative rounded-2xl border border-white/10 bg-white/[.06] px-4 py-3"><span className="text-[9px] font-black uppercase tracking-[.16em] text-[#8db4c7]">{label}</span><select value={value} onChange={e=>onChange(e.target.value)} className="mt-1 w-full cursor-pointer appearance-none bg-transparent pr-5 text-sm font-extrabold text-white outline-none">{empty&&<option value="">{empty}</option>}{options.map(([option,labelText])=><option className="bg-[#071d33] text-white" key={option} value={option}>{labelText}</option>)}</select><ChevronDown className="pointer-events-none absolute bottom-4 right-3 text-[#e7b753]" size={15}/></label>}
