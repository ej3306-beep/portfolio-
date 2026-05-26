import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { brandProducts } from "../data";
import { Heart, Sliders, ShoppingBag, Eye, Shirt, Info, RefreshCw } from "lucide-react";

interface ColorPreset {
  name: string;
  className: string;
  hex: string;
  subtext: string;
}

const colorPresets: ColorPreset[] = [
  { name: "Dusty Blossom", className: "bg-[#EAE0D8] text-stone-700", hex: "#EAE0D8", subtext: "우아하고 섬세한 연분홍톤" },
  { name: "Sand Alabaster", className: "bg-[#D0C0B0] text-stone-800", hex: "#D0C0B0", subtext: "자연 그대로의 차분한 백사장 모래톤" },
  { name: "Sleek Charcoal", className: "bg-[#2A2A2A] text-stone-100", hex: "#2A2A2A", subtext: "도회적이며 선이 정돈된 프리미엄 블랙" },
  { name: "Sage Jade", className: "bg-[#AFA192] text-stone-900", hex: "#AFA192", subtext: "고즈넉한 휴식을 자아내는 스톤 카키" },
];

export default function BrandVisionPlayground() {
  const [selectedProduct, setSelectedProduct] = useState(brandProducts[0]);
  const [currentColor, setCurrentColor] = useState<ColorPreset>(colorPresets[0]);
  const [isLiked, setIsLiked] = useState<Record<string, boolean>>({});
  const [fabricDetailView, setFabricDetailView] = useState(false);

  const toggleLike = (id: string) => {
    setIsLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="vision" className="py-24 px-6 md:px-12 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-6 items-baseline">
          <div className="md:col-span-1">
            <span className="font-mono text-xs tracking-[0.2em] text-[#D9C3B0] uppercase block mb-2">02 / INTERACTIVE CATALOG</span>
            <h2 className="font-display font-light text-4xl text-[#1C1C1C] tracking-tight">
              LIVRHYCO <br/>First Line
            </h2>
          </div>
          <div className="md:col-span-2">
            <p className="text-sm font-sans text-neutral-500 max-w-xl leading-relaxed">
              무용과 일상의 접점을 그리는 첫 실루엣 컬렉션입니다. 아래 항목에서 리브리코의 기획 아이템을 미리 파악하고, 각 아이템별 조화와 시그니처 색감 구색을 시뮬레이션 하세요.
            </p>
          </div>
        </div>

        {/* Catalog Main Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Controls / Sidebar (5 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-[#D9C3B0]/30 shadow-sm space-y-6">
              
              <div className="flex items-center space-x-2 pb-4 border-b border-stone-100">
                <Shirt className="w-5 h-5 text-[#D9C3B0]" />
                <h3 className="font-display font-semibold text-sm tracking-widest text-[#1C1C1C]">SELECT GARMENT IDEA</h3>
              </div>

              {/* Product Buttons */}
              <div className="space-y-3">
                {brandProducts.map((prod) => {
                  const isActive = selectedProduct.id === prod.id;
                  return (
                    <button
                      key={prod.id}
                      onClick={() => {
                        setSelectedProduct(prod);
                        setFabricDetailView(false);
                      }}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-300 relative overflow-hidden flex flex-col ${
                        isActive
                          ? "bg-[#1C1C1C] text-white shadow-md transform translate-x-1"
                          : "bg-[#FAF8F5] hover:bg-stone-100 text-[#1C1C1C] border border-[#D9C3B0]/10"
                      }`}
                    >
                      <span className={`font-mono text-[9px] tracking-widest block uppercase mb-1 ${isActive ? "text-[#D9C3B0]" : "text-stone-400"}`}>
                        {prod.category}
                      </span>
                      <span className="font-display font-medium text-xs tracking-wide">
                        {prod.name}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-stone-100">
                <div className="flex items-center justify-between mb-3 text-xs font-semibold text-[#1C1C1C] font-display">
                  <span className="flex items-center space-x-1.5">
                    <Sliders className="w-3.5 h-3.5 text-[#D9C3B0]" />
                    <span>COLOR PALETTE TUNER</span>
                  </span>
                  <span className="text-[10px] font-mono font-normal text-stone-400">SELECT 1</span>
                </div>

                {/* Color Swatch Selector */}
                <div className="grid grid-cols-4 gap-2">
                  {colorPresets.map((color) => {
                    const isSelected = currentColor.name === color.name;
                    return (
                      <button
                        key={color.name}
                        onClick={() => setCurrentColor(color)}
                        className={`group relative h-12 rounded-lg border flex flex-col items-center justify-center transition-all ${
                          isSelected
                            ? "border-[#1C1C1C] scale-105"
                            : "border-[#D9C3B0]/30 hover:border-neutral-500"
                        }`}
                        title={color.name}
                        style={{ backgroundColor: color.hex }}
                      >
                        {isSelected && (
                          <motion.div
                            layoutId="swatch-ring"
                            className="absolute -inset-1 rounded-xl border border-[#1C1C1C]"
                            transition={{ duration: 0.2 }}
                          />
                        )}
                        <span className={`text-[10px] select-none font-bold uppercase ${
                          color.name === "Sleek Charcoal" ? "text-white" : "text-stone-900"
                        }`}>
                          {color.name.split(" ")[0]}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Subtext info about color */}
                <p className="mt-3 text-[11px] text-neutral-500 leading-normal italic font-serif">
                  * {currentColor.name} : {currentColor.subtext}
                </p>
              </div>

            </div>

            {/* Micro Stats or Key Selling Points card */}
            <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#D9C3B0]/30 space-y-3.5">
              <span className="text-[10px] font-mono tracking-widest text-[#D9C3B0] block uppercase">DEVELOPMENT ATTRIBUTES</span>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-stone-400 font-medium">실용성 (Versatility)</span>
                  <span className="font-semibold text-stone-800">100% 매일웨어 착용</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400 font-medium">소재 성격 (Materiality)</span>
                  <span className="font-semibold text-stone-800">친환경 유기농 모달</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400 font-medium">생산 조력처 (Suppliers)</span>
                  <span className="font-semibold text-stone-800">서울 봉제 마이스터</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Preview Output Card (8 COLS) */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl border border-[#D9C3B0]/30 overflow-hidden shadow-lg grid grid-cols-1 md:grid-cols-2">
              
              {/* Product Visual Container */}
              <div className="relative h-[320px] md:h-[480px] bg-[#FAF8F5] flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${selectedProduct.id}-${currentColor.name}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    <img
                      src={selectedProduct.imageUrl}
                      alt={selectedProduct.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Visual Color Overlay filter effect */}
                    <div
                      className="absolute inset-0 mix-blend-color opacity-35"
                      style={{ backgroundColor: currentColor.hex }}
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white flex justify-between items-end">
                      <span className="text-xs font-mono uppercase tracking-widest text-neutral-300">
                        LIVRHYCO PROJECT MOCKUP
                      </span>
                      <span className="text-lg font-serif">Est. 2026</span>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Hover control pills */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1.5 text-[9px] font-mono bg-white/90 backdrop-blur-md text-stone-800 tracking-wider rounded-full border border-stone-100 shadow-sm">
                    {selectedProduct.category}
                  </span>
                </div>

                <button
                  onClick={() => toggleLike(selectedProduct.id)}
                  className="absolute top-4 right-4 p-2.5 bg-white/95 hover:bg-white rounded-full text-stone-700 hover:text-rose-500 shadow-md transition-all active:scale-95"
                >
                  <Heart
                    className={`h-4.5 w-4.5 transition-colors duration-300 ${
                      isLiked[selectedProduct.id] ? "fill-rose-500 text-rose-500" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Product Text Details Container */}
              <div className="p-8 flex flex-col justify-between space-y-6">
                
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-mono tracking-[0.2em] text-[#D9C3B0] uppercase block">
                      Aesthetic Identity Detail
                    </span>
                    <h3 className="font-display font-light text-2xl text-[#1C1C1C] mt-1">
                      {selectedProduct.name}
                    </h3>
                  </div>

                  <p className="text-xs text-stone-500 leading-relaxed font-sans">
                    {selectedProduct.description}
                  </p>

                  {/* Material checklist */}
                  <div className="pt-4 border-t border-stone-100 space-y-2">
                    <span className="text-[10px] font-mono text-stone-400 block tracking-widest uppercase">
                      FABRIC & AESTHETIC KEY
                    </span>
                    
                    <div className="flex items-center space-x-2 text-xs text-stone-700 font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#D9C3B0]" />
                      <span>{selectedProduct.material}</span>
                    </div>

                    <div className="flex items-center space-x-2 text-xs text-stone-600 italic">
                      <span className="font-serif">Style: {selectedProduct.aesthetic}</span>
                    </div>
                  </div>

                  {/* Interactive toggle block */}
                  <div className="pt-4">
                    <button
                      onClick={() => setFabricDetailView(!fabricDetailView)}
                      className="text-xs text-[#D9C3B0] hover:text-[#1C1C1C] font-semibold flex items-center space-x-1.5 transition-colors"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>{fabricDetailView ? "가치 분석 숨기기" : "소비자 가치 디코딩"}</span>
                    </button>

                    <AnimatePresence>
                      {fabricDetailView && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-3 p-3 bg-stone-50 rounded-xl border border-stone-100 text-[11px] text-stone-600 space-y-1"
                        >
                          <p>• <strong>성인 발레 피드백 반영:</strong> 일반 애슬레저 팬츠 위에 어색함 없이 레이어드되어, Y존 부각 우려를 해소하는 조절 가능 기장.</p>
                          <p>• <strong>출퇴근 겸용:</strong> 바디 라인은 견고하게 직조해 수트를 겹쳐 코디하면 일상 생활에서도 무용복의 오라를 유지할 수 있습니다.</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* CTA Action within catalog */}
                <div className="pt-6 border-t border-stone-150 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono text-stone-400 uppercase">SUGGESTED PRICE</span>
                    <span className="font-display font-bold text-[#1C1C1C] text-sm">기획안 반영 검토중</span>
                  </div>
                  
                  <button className="flex items-center space-x-2 bg-stone-900 hover:bg-[#D9C3B0] text-white hover:text-[#1C1C1C] text-xs font-display tracking-wider py-2.5 px-5 rounded-full transition-all">
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>펀딩 알림 신청</span>
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
