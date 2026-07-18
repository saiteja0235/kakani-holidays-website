import {useEffect,useState} from 'react';
import {AnimatePresence,motion} from 'framer-motion';

const logo='/images/brand/kakani-logo-transparent.png';

export default function AppIntro(){
 const [visible,setVisible]=useState(true);
 useEffect(()=>{
  if(!visible)return;
  document.body.style.overflow='hidden';
  const timer=window.setTimeout(()=>setVisible(false),2000);
  return()=>{window.clearTimeout(timer);document.body.style.overflow=''};
 },[visible]);

 return <AnimatePresence>{visible&&
  <motion.div
   initial={{opacity:1}}
   exit={{opacity:0}}
   transition={{duration:.25,ease:'easeOut'}}
   className="signature-intro fixed inset-0 z-[300] grid place-items-center overflow-hidden bg-[radial-gradient(circle_at_50%_45%,#0a2744_0%,#071527_46%,#040812_82%)] text-white"
   aria-label="Kakani Holidays intro"
  >
   <button type="button" onClick={()=>setVisible(false)} className="signature-skip absolute right-4 top-4 z-20 rounded-full border border-white/25 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[.18em] text-white/80">
    Skip intro
   </button>
   <motion.img
    src={logo}
    alt="Kakani Holidays Pvt. Ltd. — Host of Happiness"
    initial={{opacity:0,scale:.9,y:10}}
    animate={{opacity:[0,1,1],scale:[.9,1,1],y:[10,0,0]}}
    transition={{duration:1.55,times:[0,.45,1],ease:[.22,1,.36,1]}}
    className="w-[84vw] max-w-[620px] object-contain"
   />
   <motion.span
    initial={{opacity:0,scaleX:0}}
    animate={{opacity:[0,.7,0],scaleX:[0,1,1.15]}}
    transition={{duration:1.8,times:[0,.55,1],ease:'easeOut'}}
    className="absolute h-px w-[70vw] max-w-[520px] bg-gradient-to-r from-transparent via-[#e7b753] to-transparent"
   />
  </motion.div>
 }</AnimatePresence>;
}

