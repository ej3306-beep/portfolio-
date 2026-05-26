import { useState } from "react";
import { Copy, Check, Flame, MessageSquare, Compass, Sparkles } from "lucide-react";
import { contactInfo, bioText } from "../data";

export default function ProfileSection() {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <section id="profile" className="py-24 px-6 md:px-12 bg-white border-t border-[#D9C3B0]/30 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-6 items-baseline">
          <div className="md:col-span-1">
            <span className="font-mono text-xs tracking-[0.2em] text-[#D9C3B0] uppercase block mb-2">01 / BRAND FOUNDMENT</span>
            <h2 className="font-display font-light text-4xl text-[#1C1C1C] tracking-tight">
              Aesthetic <br/>Story
            </h2>
          </div>
          <div className="md:col-span-2">
            <p className="text-sm font-sans text-neutral-500 max-w-xl leading-relaxed">
              무용과 일상의 세련된 타협을 선언합니다. 10년간 직접 흘린 담방울과 몸으로 느낀 깊은 애정 어린 필터를 거쳐, 세상에서 가장 편안하면서도 드레시한 액티브웨어를 상상합니다.
            </p>
          </div>
        </div>

        {/* Content Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Portrait Frame */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-[#E6D5CB] to-[#D9C3B0]/40 opacity-30 group-hover:opacity-50 transition-opacity duration-500 blur-lg" />
            
            <div className="relative overflow-hidden rounded-2xl bg-[#FAF8F5] border border-[#D9C3B0]/30 shadow-xl">
              <img
                src="/src/assets/images/ceo_portrait_1779793828342.png"
                alt="Kim Eunji Portrait"
                referrerPolicy="no-referrer"
                className="w-full h-[520px] object-cover filter saturate-[0.95] group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
              
              {/* Badge overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/95 backdrop-blur-md rounded-xl border border-[#D9C3B0]/20 flex items-center justify-between shadow-md">
                <div>
                  <h4 className="font-display font-bold text-sm tracking-wide text-[#1C1C1C]">KIM EUNJI</h4>
                  <p className="font-serif italic text-xs text-stone-500">LIVRHYCO Founder / CEO</p>
                </div>
                <div className="flex items-center space-x-1.5 bg-[#FAF8F5] py-1.5 px-3 rounded-full border border-stone-100">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[10px] font-mono font-medium tracking-wider text-neutral-600">PREPING ONLINE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Core Philosophy Details */}
          <div className="lg:col-span-7 space-y-8 lg:pl-6">
            
            {/* Philosophy Sentiment Card */}
            <div className="p-8 bg-[#FAF8F5] rounded-2xl border-l-4 border-[#D9C3B0] relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 p-3 opacity-10">
                <Compass className="w-16 h-16 text-[#D9C3B0]" />
              </div>
              <p className="text-xl font-serif font-light text-[#1C1C1C] leading-snug italic">
                "{bioText.quote}"
              </p>
              <div className="mt-4 pt-4 border-t border-[#D9C3B0]/40">
                <p className="text-xs text-stone-600 leading-relaxed font-sans font-light">
                  {bioText.educationMottoDetail}
                </p>
              </div>
            </div>

            {/* Profile Detail Description */}
            <div className="space-y-4">
              <h3 className="font-display font-semibold text-lg text-[#1C1C1C] flex items-center space-x-2">
                <span className="bg-[#D9C3B0] text-white p-1 rounded-lg text-xs font-mono">CEO</span>
                <span>꿈을 춤추듯 가볍고 견고하게 실현하는 기획자</span>
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed text-justify whitespace-pre-line font-sans">
                {bioText.profileDetail}
              </p>
            </div>

            {/* Quick Interactive Contact Sheet */}
            <div className="pt-6 border-t border-[#D9C3B0]/30">
              <h4 className="font-mono text-[10px] tracking-widest text-[#D9C3B0] uppercase mb-4">Quick Connection Dashboard</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Contact: Phone */}
                <div className="flex items-center justify-between p-3.5 bg-[#FAF8F5]/80 hover:bg-[#FAF8F5] rounded-xl border border-[#D9C3B0]/20 transition-all duration-300">
                  <div className="min-w-0">
                    <span className="block text-[10px] uppercase tracking-wider text-stone-400 font-mono">Phone</span>
                    <span className="text-xs font-display font-semibold text-[#1C1C1C] truncate">{contactInfo.phone}</span>
                  </div>
                  <button
                    onClick={() => handleCopy(contactInfo.phone, "phone")}
                    className="p-1.5 hover:bg-white rounded-lg border border-[#D9C3B0]/10 text-stone-500 hover:text-[#1C1C1C] transition-all"
                    title="전화번호 복사"
                  >
                    {copiedText === "phone" ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Contact: Email */}
                <div className="flex items-center justify-between p-3.5 bg-[#FAF8F5]/80 hover:bg-[#FAF8F5] rounded-xl border border-[#D9C3B0]/20 transition-all duration-300">
                  <div className="min-w-0">
                    <span className="block text-[10px] uppercase tracking-wider text-stone-400 font-mono">Email</span>
                    <span className="text-xs font-display font-semibold text-[#1C1C1C] truncate">{contactInfo.email}</span>
                  </div>
                  <button
                    onClick={() => handleCopy(contactInfo.email, "email")}
                    className="p-1.5 hover:bg-white rounded-lg border border-[#D9C3B0]/10 text-stone-500 hover:text-[#1C1C1C] transition-all"
                    title="이메일 복사"
                  >
                    {copiedText === "email" ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Contact: Website */}
                <div className="flex items-center justify-between p-3.5 bg-[#FAF8F5]/80 hover:bg-[#FAF8F5] rounded-xl border border-[#D9C3B0]/20 transition-all duration-300">
                  <div className="min-w-0">
                    <span className="block text-[10px] uppercase tracking-wider text-stone-400 font-mono">Website</span>
                    <a
                      href={`https://${contactInfo.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-display font-semibold text-[#1C1C1C] hover:text-[#D9C3B0] transition-colors truncate"
                    >
                      {contactInfo.website}
                    </a>
                  </div>
                  <button
                    onClick={() => handleCopy(contactInfo.website, "website")}
                    className="p-1.5 hover:bg-white rounded-lg border border-[#D9C3B0]/10 text-stone-500 hover:text-[#1C1C1C] transition-all"
                    title="웹사이트 복사"
                  >
                    {copiedText === "website" ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Contact: Location */}
                <div className="flex items-center justify-between p-3.5 bg-[#FAF8F5]/80 hover:bg-[#FAF8F5] rounded-xl border border-[#D9C3B0]/20 transition-all duration-300">
                  <div className="min-w-0">
                    <span className="block text-[10px] uppercase tracking-wider text-stone-400 font-mono">Location</span>
                    <span className="text-xs font-display font-semibold text-[#1C1C1C] truncate">{contactInfo.location}</span>
                  </div>
                  <div className="p-1.5 text-[#D9C3B0]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
