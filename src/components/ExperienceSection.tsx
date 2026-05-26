import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { workExperiences } from "../data";
import { Calendar, ChevronRight, Briefcase, Plus, Minus, Tag } from "lucide-react";

export default function ExperienceSection() {
  const [expandedId, setExpandedId] = useState<string | null>("exp-1");

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-24 px-6 md:px-12 bg-white border-t border-[#D9C3B0]/30 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-6 items-baseline">
          <div className="md:col-span-1">
            <span className="font-mono text-xs tracking-[0.2em] text-[#D9C3B0] uppercase block mb-2">03 / TRACK RECORD</span>
            <h2 className="font-display font-light text-4xl text-[#1C1C1C] tracking-tight">
              Work <br/>Experience
            </h2>
          </div>
          <div className="md:col-span-2">
            <p className="text-sm font-sans text-neutral-500 max-w-xl leading-relaxed">
              의류 기획부터 글로벌 NGO 대외협력 리드, 저탄소 브랜드 캠페인 전개까지. 일관된 고객 소통과 유연한 비즈니스 협업 역량을 바탕으로 혁신 프로젝트를 이끌어 왔습니다.
            </p>
          </div>
        </div>

        {/* Elegant Linework Timeline Map */}
        <div className="space-y-0 border-t border-[#1C1C1C]">
          {workExperiences.map((exp, index) => {
            const isExpanded = expandedId === exp.id;
            return (
              <div
                key={exp.id}
                className={`border-b border-stone-200 py-8 transition-all ${
                  isExpanded ? "bg-stone-50/50 px-4 md:px-6 rounded-b-xl" : "hover:bg-amber-50/10"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  
                  {/* Left Metadata Block (4 Cols) */}
                  <div className="lg:col-span-4 flex justify-between lg:block space-y-2">
                    <div>
                      <span className="font-mono text-xs text-neutral-400 block tracking-widest uppercase">
                        CASE {String(index + 1).padStart(2, "0")} / {exp.period}
                      </span>
                      <h3 className="font-display font-bold text-xl text-[#1C1C1C] mt-1">
                        {exp.company}
                      </h3>
                    </div>
                    
                    <div className="mt-2">
                      <span className="px-3 py-1 font-mono text-[10px] bg-[#E6D5CB]/30 text-stone-700 tracking-wider rounded-full border border-[#D9C3B0]/20 inline-block">
                        {exp.role}
                      </span>
                    </div>
                  </div>

                  {/* Right Descriptions & Interaction Box (8 Cols) */}
                  <div className="lg:col-span-8 space-y-4">
                    
                    {/* Primary Text summary of work */}
                    <div className="flex justify-between items-start gap-4">
                      <p className="text-sm text-stone-700 leading-relaxed font-sans font-medium">
                        {exp.description}
                      </p>
                      
                      {/* Accordion trigger toggle */}
                      <button
                        onClick={() => toggleExpand(exp.id)}
                        className={`p-2 rounded-full border border-stone-200 hover:border-[#1C1C1C] transition-all flex items-center justify-center shrink-0 ${
                          isExpanded ? "bg-stone-900 text-white" : "bg-white text-stone-600"
                        }`}
                        aria-label="Toggle achievements details"
                      >
                        {isExpanded ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      </button>
                    </div>

                    {/* Expandable details list */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 pb-2 border-t border-stone-200/60 mt-4 space-y-3">
                            <span className="text-[10px] font-mono text-[#D9C3B0] uppercase tracking-widest block mb-2">
                              KEY ACCOMPLISHMENTS
                            </span>
                            <ul className="space-y-2">
                              {exp.bulletPoints.map((bullet, bIdx) => (
                                <li key={bIdx} className="flex items-start space-x-2 text-xs text-stone-500 leading-relaxed">
                                  <span className="h-1.5 w-1.5 rounded-full bg-[#D9C3B0] mt-1.5 shrink-0" />
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Technology / Framework Tag list */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] text-stone-500 font-sans tracking-wide bg-stone-100 hover:bg-stone-200/50 py-1 px-2.5 rounded transition-colors flex items-center space-x-1"
                        >
                          <Tag className="w-2.5 h-2.5 text-stone-400" />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
