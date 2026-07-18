import {useEffect,useState} from 'react';

const logo='/images/brand/kakani-logo-transparent.png';

export default function AppIntro(){
 const [visible,setVisible]=useState(true);
 useEffect(()=>{
  if(!visible)return;
  document.body.style.overflow='hidden';
  const timer=window.setTimeout(()=>setVisible(false),2050);
  return()=>{window.clearTimeout(timer);document.body.style.overflow=''};
 },[visible]);

 if(!visible)return null;
 return <div className="simple-intro fixed inset-0 z-[300] grid place-items-center overflow-hidden bg-[radial-gradient(circle_at_50%_45%,#0a2744_0%,#071527_46%,#040812_82%)] text-white" aria-label="Kakani Holidays intro">
  <button type="button" onClick={()=>setVisible(false)} className="absolute right-4 top-4 z-20 rounded-full border border-white/25 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[.18em] text-white/80">Skip intro</button>
  <img src={logo} alt="Kakani Holidays Pvt. Ltd. — Host of Happiness" className="simple-intro-logo w-[84vw] max-w-[620px] object-contain"/>
  <span className="simple-intro-light absolute h-px w-[70vw] max-w-[520px] bg-gradient-to-r from-transparent via-[#e7b753] to-transparent"/>
 </div>;
}

