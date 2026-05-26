import { motion } from "motion/react";
import { ArrowRight, Sparkles, Smile } from "lucide-react";

export default function HeroSection() {
  const handleScrollToNav = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto premium-gradient overflow-hidden"
    >
      {/* Visual Accent Box */}
      <div className="absolute top-1/4 right-10 w-72 h-72 md:w-96 md:h-96 rounded-full bg-[#E6D5CB]/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-64 h-64 rounded-full bg-[#D9C3B0]/30 blur-3xl pointer-events-none" />

      {/* Intro Label */}
      <div className="flex items-center space-x-3 text-xs tracking-[0.2em] font-mono text-[#1C1C1C]/60">
        <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#D9C3B0]" />
        <span>INTRODUCING AN ARTFUL ENTREPRENEUR</span>
      </div>

      {/* Massive Editorial Display Header */}
      <div className="my-auto py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-4"
        >
          <h1 className="text-5xl sm:text-7xl md:text-9xl tracking-tight font-display font-light leading-[0.9] text-[#1C1C1C] select-none">
            Dance <span className="font-serif italic font-normal text-stone-400 font-serif">+</span> <br />
            Lifestyle
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 text-lg sm:text-2xl md:text-3xl font-serif text-stone-600 max-w-3xl leading-relaxed italic"
        >
          "우리가 온전히 사랑하는 무용, <br/>
          그 정교한 움직임의 우아함을 일상으로 피워내다."
        </motion.p>

        {/* Action Button & Subtle Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center gap-6"
        >
          <button
            onClick={() => handleScrollToNav("#profile")}
            className="flex items-center space-x-3 bg-[#1C1C1C] hover:bg-[#D9C3B0] hover:text-[#1C1C1C] text-white px-8 py-4 rounded-full text-xs font-display font-medium tracking-widest transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-black/5"
          >
            <span>DISCOVER HER PHILOSOPHY</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => handleScrollToNav("#vision")}
            className="flex items-center space-x-2 border border-[#1C1C1C]/20 hover:border-[#1C1C1C] px-8 py-4 rounded-full text-xs font-display font-medium tracking-widest transition-all duration-300"
          >
            <span>EXPLORE LIVRHYCO</span>
          </button>
        </motion.div>
      </div>

      {/* bottom features banner */}
      <div className="border-t border-[#D9C3B0]/40 pt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <span className="block text-stone-400 font-mono text-[10px] tracking-widest">01 / BRAND</span>
          <span className="font-display font-medium text-xs tracking-wider">LIVRHYCO CEO</span>
        </div>
        <div>
          <span className="block text-stone-400 font-mono text-[10px] tracking-widest">02 / CORE PHILOSOPHY</span>
          <span className="font-display font-medium text-xs tracking-wider">Ballet Meets Urban Fit</span>
        </div>
        <div>
          <span className="block text-stone-400 font-mono text-[10px] tracking-widest">03 / ACTIVE IN</span>
          <span className="font-display font-medium text-xs tracking-wider">Seoul, South Korea</span>
        </div>
        <div>
          <span className="block text-stone-400 font-mono text-[10px] tracking-widest">04 / BACKGROUND</span>
          <span className="font-display font-medium text-xs tracking-wider">10+ Years Dance Passion</span>
        </div>
      </div>
    </section>
  );
}
