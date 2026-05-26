import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { skillItems, languageItems } from "../data";
import { Star, Award, MessageCircle, Languages, Check, BookOpen } from "lucide-react";

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState<"skills" | "languages">("skills");

  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-[#FAF8F5] border-t border-[#D9C3B0]/30 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:justify-between md:items-end gap-6">
          <div>
            <span className="font-mono text-xs tracking-[0.2em] text-[#D9C3B0] uppercase block mb-2">04 / PROFICIENCIES</span>
            <h2 className="font-display font-light text-4xl text-[#1C1C1C] tracking-tight">
              Expertise & <br/>Languages
            </h2>
          </div>

          {/* Interactive filter switcher */}
          <div className="flex bg-white p-1 rounded-full border border-[#D9C3B0]/30 self-start shadow-sm shadow-black/5">
            <button
              onClick={() => setActiveTab("skills")}
              className={`flex items-center space-x-1.5 px-6 py-2 rounded-full text-xs font-display font-semibold transition-all duration-300 ${
                activeTab === "skills"
                  ? "bg-[#1C1C1C] text-white shadow"
                  : "text-stone-500 hover:text-stone-850"
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>Core Strengths</span>
            </button>
            <button
              onClick={() => setActiveTab("languages")}
              className={`flex items-center space-x-1.5 px-6 py-2 rounded-full text-xs font-display font-semibold transition-all duration-300 ${
                activeTab === "languages"
                  ? "bg-[#1C1C1C] text-white shadow"
                  : "text-stone-500 hover:text-stone-850"
              }`}
            >
              <Languages className="w-3.5 h-3.5" />
              <span>Languages</span>
            </button>
          </div>
        </div>

        {/* Dynamic Display Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {activeTab === "skills" ? (
              // Business Skills
              skillItems.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white p-6 md:p-8 rounded-2xl border border-[#D9C3B0]/20 shadow-sm flex flex-col justify-between hover:scale-[1.01] transition-transform duration-300"
                >
                  <div className="space-y-3">
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="font-display font-semibold text-stone-800 text-sm tracking-wide leading-tight">
                        {skill.name}
                      </h3>
                      
                      {/* Star Rating Render */}
                      <div className="flex gap-0.5 mt-0.5 shrink-0">
                        {Array.from({ length: 5 }).map((_, rIdx) => (
                          <Star
                            key={rIdx}
                            className={`w-3.5 h-3.5 ${
                              rIdx < skill.rating
                                ? "fill-[#D9C3B0] text-[#D9C3B0]"
                                : "text-stone-200"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-xs text-stone-500 leading-relaxed font-sans">
                      {skill.description}
                    </p>
                  </div>

                  {/* Aesthetic meter indicator bar */}
                  <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest">
                      PERFORMANCE RATE
                    </span>
                    <span className="text-[10px] font-mono font-bold text-stone-700">
                      {skill.rating * 20}% CERTIFIED
                    </span>
                  </div>
                </div>
              ))
            ) : (
              // Language Skills
              languageItems.map((lang, index) => (
                <div
                  key={index}
                  className="bg-white p-6 md:p-8 rounded-2xl border border-[#D9C3B0]/20 shadow-sm flex items-center justify-between hover:scale-[1.01] transition-transform duration-300"
                >
                  {/* Left info */}
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-xl bg-[#FAF8F5] border border-[#D9C3B0]/30 flex items-center justify-center font-mono font-bold text-[#D9C3B0] text-sm">
                      {lang.code}
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-stone-800 text-sm">
                        {lang.name}
                      </h4>
                      <p className="text-[11px] text-stone-400 font-sans mt-0.5">
                        {lang.rating === 5 && "Native / Bilingual 최고 수준 소통 성과"}
                        {lang.rating === 4 && "Collaborative fluency 비즈니스 협업 가공"}
                        {lang.rating === 3 && "Daily conversation 일상 비즈니스 보조 가능"}
                      </p>
                    </div>
                  </div>

                  {/* Right star ratings */}
                  <div className="flex gap-0.5 shrink-0">
                    {Array.from({ length: 5 }).map((_, rIdx) => (
                      <Star
                        key={rIdx}
                        className={`w-3.5 h-3.5 ${
                          rIdx < lang.rating
                            ? "fill-[#1C1C1C] text-[#1C1C1C]"
                            : "text-stone-200"
                        }`}
                      />
                    ))}
                  </div>

                </div>
              ))
            )}
          </motion.div>
        </AnimatePresence>

        {/* Static quote section for educational philosophy and dedication */}
        <div className="mt-12 p-8 bg-zinc-900 text-white rounded-3xl relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <BookOpen className="w-48 h-48" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
            <div className="md:col-span-3 space-y-2">
              <span className="text-[9px] font-mono text-[#D9C3B0] tracking-widest uppercase">
                EMPATHY POINT OF BRAND CEO
              </span>
              <h4 className="font-display font-light text-xl text-stone-100 italic">
                “발레를 완벽하게 해내는 가치보다도, 발레를 아끼는 이들의 숨은 고충을 들여다보는 따스함이 리브리코의 기조입니다.”
              </h4>
            </div>
            
            <div className="md:col-span-1 flex justify-start md:justify-end">
              <div className="py-2.5 px-6 border border-white/20 rounded-full font-mono text-[10px] tracking-wider text-[#D9C3B0]">
                Est. LIVRHYCO
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
