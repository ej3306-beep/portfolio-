import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, Check, Mail, Globe, MapPin, Trash2, Heart } from "lucide-react";
import { contactInfo } from "../data";

interface Message {
  id: string;
  name: string;
  agency: string;
  content: string;
  date: string;
}

export default function ContactSection() {
  const [name, setName] = useState("");
  const [agency, setAgency] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  // Load saved messages on mount
  useEffect(() => {
    const saved = localStorage.getItem("portfolio_messages");
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse saved messages", e);
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !content) return;

    setIsSubmitting(true);

    // Simulate server request delay
    setTimeout(() => {
      const newMessage: Message = {
        id: `msg-${Date.now()}`,
        name,
        agency: agency || "개인 협업자",
        content,
        date: new Date().toLocaleDateString("ko-KR", {
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      const updated = [newMessage, ...messages];
      setMessages(updated);
      localStorage.setItem("portfolio_messages", JSON.stringify(updated));

      setIsSubmitting(false);
      setSubmitted(true);
      setName("");
      setAgency("");
      setContent("");

      // Auto clear success indicator
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  const deleteMessage = (id: string) => {
    const updated = messages.filter((m) => m.id !== id);
    setMessages(updated);
    localStorage.setItem("portfolio_messages", JSON.stringify(updated));
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-white border-t border-[#D9C3B0]/30 relative overflow-hidden">
      
      {/* Decorative fine lines background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 bottom-0 left-12 w-[1px] bg-[#D9C3B0]" />
        <div className="absolute top-0 bottom-0 right-1/4 w-[1px] bg-[#D9C3B0]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-6 items-baseline">
          <div className="md:col-span-1">
            <span className="font-mono text-xs tracking-[0.2em] text-[#D9C3B0] uppercase block mb-2">05 / COOPERATION</span>
            <h2 className="font-display font-light text-4xl text-[#1C1C1C] tracking-tight">
              Get In <br/>Touch
            </h2>
          </div>
          <div className="md:col-span-2">
            <p className="text-sm font-sans text-neutral-500 max-w-xl leading-relaxed">
              의류 유통 협업, 온·오프라인 브랜드 팝업 제안, 커뮤니티 파트너십을 환영합니다. 아래 채널들을 통하거나, 즉석 양식을 활용해 생각을 전해주세요.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left info column (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] font-mono tracking-widest text-[#D9C3B0] uppercase block">
                CEO CONTACT CHANNELS
              </span>
              <h3 className="font-display font-semibold text-xl text-[#1C1C1C]">
                김은지 대표와의 긴밀한 소통
              </h3>
              <p className="text-xs text-stone-500 leading-relaxed max-w-md font-sans">
                각 파트너분들의 소중한 제안은 본인이 직접 면밀히 검토하고 조속히 답장드립니다. 발레와 일상을 잇는 따스한 혁신에 함께 탑승해 주세요.
              </p>
            </div>

            {/* Icon Contact Rows */}
            <div className="space-y-4 bg-[#FAF8F5]/80 p-6 rounded-2xl border border-[#D9C3B0]/20">
              
              <div className="flex items-center space-x-3.5 text-stone-700">
                <div className="p-2 bg-white rounded-lg text-[#D9C3B0] border border-stone-100 shadow-xs">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] font-mono text-neutral-400 block uppercase">EMAIL ENQUIRY</span>
                  <a href={`mailto:${contactInfo.email}`} className="text-xs font-semibold font-display hover:text-[#D9C3B0] transition-colors">{contactInfo.email}</a>
                </div>
              </div>

              <div className="flex items-center space-x-3.5 text-stone-700">
                <div className="p-2 bg-white rounded-lg text-[#D9C3B0] border border-stone-100 shadow-xs">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] font-mono text-neutral-400 block uppercase">CONCEPT STORE SITE</span>
                  <a href={`https://${contactInfo.website}`} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold font-display hover:text-[#D9C3B0] transition-colors">{contactInfo.website}</a>
                </div>
              </div>

              <div className="flex items-center space-x-3.5 text-stone-700">
                <div className="p-2 bg-white rounded-lg text-[#D9C3B0] border border-stone-100 shadow-xs">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] font-mono text-neutral-400 block uppercase">REGISTRATION HQ</span>
                  <span className="text-xs font-semibold font-display">{contactInfo.location}</span>
                </div>
              </div>

            </div>

            {/* List of previously left messages */}
            {messages.length > 0 && (
              <div className="space-y-3 pt-4">
                <span className="text-[9px] font-mono tracking-widest text-[#D9C3B0] uppercase block">
                  SUBMITTED INQUIRIES ON THIS DEVICE ({messages.length})
                </span>
                <div className="max-h-52 overflow-y-auto space-y-3 pr-2 scrollbar-thin">
                  {messages.map((m) => (
                    <div key={m.id} className="p-4 bg-stone-50 rounded-xl border border-stone-150 relative group">
                      <button
                        onClick={() => deleteMessage(m.id)}
                        className="absolute top-4 right-4 text-stone-400 hover:text-rose-500 opacity-0 group-hover:opacity-100 transition-opacity"
                        title="기록 삭제"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                      
                      <div className="flex justify-between items-center text-[10px] text-stone-400 font-mono">
                        <span>{m.agency} · {m.name}</span>
                        <span>{m.date}</span>
                      </div>
                      <p className="mt-1.5 text-xs text-stone-700 leading-relaxed line-clamp-2">
                        {m.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right inquiry form column (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF8F5]/50 p-6 md:p-8 rounded-3xl border border-[#D9C3B0]/30 shadow-xs">
              
              <div className="mb-6">
                <h4 className="font-display font-semibold text-sm text-[#1C1C1C]">
                  협업 및 피드백 전송 양식
                </h4>
                <p className="text-[11px] text-neutral-500 font-sans mt-0.5">
                  입력하신 의견은 브라우저 저장소(`localStorage`)에 보관되어 즉시 시뮬레이션 목록에서 확인하실 수 있습니다.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Field: Name */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-[#1C1C1C]/70 block font-semibold">
                      성함 *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="김유진"
                      className="w-full bg-white border border-[#D9C3B0]/35 hover:border-[#1C1C1C]/40 focus:border-[#1C1C1C] rounded-xl py-3 px-4 text-xs font-sans text-[#1C1C1C] focus:outline-none transition-all"
                    />
                  </div>

                  {/* Field: Agency */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-[#1C1C1C]/70 block font-semibold">
                      소속처 / 기업명
                    </label>
                    <input
                      type="text"
                      value={agency}
                      onChange={(e) => setAgency(e.target.value)}
                      placeholder="셀렉트샵 상품기획팀 / 프리랜서 디자이너"
                      className="w-full bg-white border border-[#D9C3B0]/35 hover:border-[#1C1C1C]/40 focus:border-[#1C1C1C] rounded-xl py-3 px-4 text-xs font-sans text-[#1C1C1C] focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Field: Message */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-[#1C1C1C]/70 block font-semibold">
                    내용 *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="리브리코 브랜드 출시 및 팝업스토어 소매 편집 유통 관련 협업 논의를 제안합니다..."
                    className="w-full bg-white border border-[#D9C3B0]/35 hover:border-[#1C1C1C]/40 focus:border-[#1C1C1C] rounded-xl py-3 px-4 text-xs font-sans text-[#1C1C1C] focus:outline-none transition-all resize-none"
                  />
                </div>

                {/* Submitting Status / Visual feedback */}
                <div className="flex items-center justify-between pt-2">
                  <span className="text-[11px] text-stone-400">* 기입한 모든 소중한 흔적은 전송 즉시 보존됩니다.</span>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting || submitted}
                    className={`flex items-center space-x-2 px-8 py-3.5 rounded-full text-xs font-display tracking-widest font-semibold transition-all ${
                      submitted
                        ? "bg-emerald-600 text-white"
                        : "bg-[#1C1C1C] hover:bg-[#D9C3B0] text-white hover:text-[#1C1C1C] disabled:bg-stone-300 shadow"
                    }`}
                  >
                    {isSubmitting ? (
                      <span>보내는 중...</span>
                    ) : submitted ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>의견 보존 완료</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>메시지 남기기</span>
                      </>
                    )}
                  </button>
                </div>

              </form>

            </div>
          </div>

        </div>

        {/* Oversized Let's Connect Footer (as in mock image with high fashion repetitive typography) */}
        <div className="mt-32 pt-16 border-t border-[#D9C3B0]/30 select-none pointer-events-none">
          <div className="whitespace-nowrap flex overflow-hidden">
            <span className="text-6xl md:text-9xl font-display font-light uppercase tracking-tighter text-[#1C1C1C]/5 inline-block mr-12 animate-pulse">
              LET'S COLLABORATE ·
            </span>
            <span className="text-6xl md:text-9xl font-display font-light uppercase tracking-tighter text-[#1C1C1C]/5 inline-block mr-12">
              LIVRHYCO DANCE ·
            </span>
            <span className="text-6xl md:text-9xl font-display font-light uppercase tracking-tighter text-[#1C1C1C]/5 inline-block">
              LET'S COLLABORATE ·
            </span>
          </div>
        </div>

        {/* Footnote credit */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono text-zinc-400">
          <p>© 2026 KIM EUNJI · ALL RIGHTS RESEVED.</p>
          <p className="flex items-center space-x-1 mt-2 sm:mt-0">
            <span>Crafted for LIVRHYCO Brand Identity</span>
            <Heart className="w-2.5 h-2.5 text-rose-400 fill-rose-450" />
          </p>
        </div>

      </div>
    </section>
  );
}
