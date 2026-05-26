import { ContactInfo, WorkExperience, SkillItem, LanguageItem, BrandProduct } from "./types";

export const contactInfo: ContactInfo = {
  phone: "010-4500-5499",
  email: "kim.eunji@livrhyco.kr",
  website: "www.livrhyco.kr",
  location: "Seoul, South Korea"
};

export const bioText = {
  quote: "우리가 함께 사랑하는 발레, 그 움직임의 우아함을 일상으로 온전히 연결합니다.",
  educationMottoDetail: "발레를 완벽히 잘하는 것보다도, 발레를 진심 어린 취미로 경험하는 성인들이 겪는 실제 고충과 몸의 변화를 깊이 이해하고 있습니다. 그러한 섬세한 공감을 바탕으로 빚어내는 옷, 그것이 LIVRHYCO(리브리코)의 본질입니다.",
  profileDetail: "발레를 시작으로 현대무용까지 취미로 무용을 10년 이상 깊게 경험한 창업가입니다. 무용이 주는 예술적 해방감과 라이프스타일을 연결하는 고감도 의류 브랜드를 기획 및 전개하고 있습니다. 무용복의 정수인 '레오타드'와 무용용 티셔츠, 워머들의 아름답고 실용적인 패턴을 차용하여, 일상 속에서도 자연스럽고 편안하게 입을 수 있는 옷을 만듭니다. 사용자 경험(UX)과 감성을 결합한 제품 가치 기획에 뛰어나며, 탄탄한 SNS 트렌드 분석력과 충성도 높은 고유 커뮤니티 빌딩 역량을 보유하고 있습니다."
};

export const workExperiences: WorkExperience[] = [
  {
    id: "exp-1",
    company: "LIVRHYCO",
    role: "브랜드 기획 팀장 / CEO",
    period: "2026/01 - 2026/05",
    description: "무용 및 애슬레저 시장의 트렌드를 다각도로 분석하여 신규 의류 라인을 기획하고, 브랜드 아이덴티티 수립과 리뉴얼 프로젝트를 총괄 주도하였습니다.",
    bulletPoints: [
      "SNS 채널 기반의 발레 및 무용 마니아 커뮤니티 러너를 육성하여 브랜드 충성도 대폭 제고",
      "프리랜서 패션 디자이너, 협업 제작사 및 생산 파트너와의 원활한 소통 및 글로벌 유통 거점 관리",
      "유행에 그치지 않고 지속 가능하며 일상 침투력이 높은 신축성 핏 설계 프로젝트 관리"
    ],
    tags: ["브랜드 전략", "제품 기획", "커뮤니티 빌딩", "트렌드 분석"]
  },
  {
    id: "exp-2",
    company: "키자미 테이블",
    role: "콘텐츠 마케팅 인턴",
    period: "2024/04 - 2024/08",
    description: "에티오피아, 우간다, 인도네시아 현지 농가에서 생산하는 고품질 저탄소 배출 원두인 '저탄소커피'의 가치를 시장에 널리 알리고 판매 증진을 이끄는 브랜드 콘텐츠 전략을 전개하였습니다.",
    bulletPoints: [
      "친환경 및 가치 소비 트렌드 결합 스토리텔링 제작으로 인스타그램 및 블로그 도달율 극대화",
      "디지털 고객 유입 행동 패턴 및 피드백 데이터를 측정하여 장기적인 이커머스 서비스 개선안 제안",
      "상생 캠페인 리드 생성 및 온라인 커머스 신규 고객 전환 기여"
    ],
    tags: ["ESG 콘텐츠", "스토리텔링 마케팅", "피드백 데이터 분석"]
  },
  {
    id: "exp-3",
    company: "국제 날개달기운동본부",
    role: "국제개발본부 대외협력팀 팀장",
    period: "2014/03 - 2020/02",
    description: "국경을 초월한 소외계층 자생 프로젝트 설계와 소아암 환우들을 위한 다채로운 생활 및 치료지원 복지사업을 종합 지헤하였습니다.",
    bulletPoints: [
      "캄보디아 반체이민처이주 등 의료 취약지 아동들을 위한 봉사단을 안정적으로 파견 및 교육 기회 기획",
      "국내 소아암 환우들의 자력 재생을 돕는 치료비 및 긴급 생계 지원 사업의 전략 기금 매칭 리드",
      "환우 정서 케어를 위한 어린이날 및 크리스마스 파티 등 대외 특별 프로모션 기획 및 대외 공조 체계 구축"
    ],
    tags: ["대외협력 소통", "글로벌 봉사단 관리", "의료 매칭 사업", "프로젝트 리더십"]
  }
];

export const skillItems: SkillItem[] = [
  {
    name: "Brand Strategy (브랜드 전략)",
    rating: 5,
    description: "시장 니즈 및 틈새시장 포착, 브랜드 아이덴티티 정립, 무용 의류 포지셔닝 타켓팅"
  },
  {
    name: "Community Marketing (커뮤니티 마케팅)",
    rating: 4,
    description: "마니아층 기반 SNS 채널 소통, 스토리텔링형 제품 바이럴, 고객 피드백 루프 구축"
  },
  {
    name: "Product Curation & Design Care (제품 큐레이션 및 트렌드 분석)",
    rating: 4,
    description: "원사 발굴, 슬림 피트니스 의류 패턴 피드백, 쉘 칼라 조합 및 감성적 디자인 디렉팅"
  },
  {
    name: "Partnership & Delivery Control (협업 & 일정 관리)",
    rating: 5,
    description: "일정 및 자원 코디네이션, 디자이너-공장 간 커뮤니케이션 조화 및 갈등 조율"
  }
];

export const languageItems: LanguageItem[] = [
  { name: "한국어 (Korean)", rating: 5, code: "KO" },
  { name: "일본어 (Japanese)", rating: 4, code: "JA" },
  { name: "영어 (English)", rating: 3, code: "EN" }
];

export const brandProducts: BrandProduct[] = [
  {
    id: "prod-1",
    name: "The Soft-Barre Drape Over",
    category: "KNITWEAR",
    description: "발레 전후 웜업은 물론, 와일드 데님이나 슬랙스 위에도 매혹적인 드레이핑 라인을 제공하는 친환경 레이온 가디건입니다.",
    material: "95% Tencel Modal, 5% Spandex",
    aesthetic: "Fluid / Organic / Minimal",
    imageUrl: "/src/assets/images/brand_hero_1779793848608.png"
  },
  {
    id: "prod-2",
    name: "Seamless Bodysuit (Silk Finish)",
    category: "LEOTARD FOR DAILY",
    description: "무용복 레오타드의 우수한 몸 매무새 보정 효과는 완벽하게 계승하되, 하단 버튼 클로저 설계를 추가하여 일상 피팅의 편의성을 극한으로 끌어올렸습니다.",
    material: "Premium Tactel Nylon, Micro-fiber Cotton Lining",
    aesthetic: "Sleek / Architectural / Elegant",
    imageUrl: "/src/assets/images/leotard_look_1779793867826.png"
  },
  {
    id: "prod-3",
    name: "Classic Movement Wrap Cardigan",
    category: "WARM-UPS",
    description: "쇄골 라인을 극적으로 돋보이게 하는 라운딩 브이넥 라프와, 견고하지만 유려하게 동여매는 얇은 리본끈 포인트가 어우러져 격조 높은 실루엣을 발산합니다.",
    material: "80% Fine Cotton, 20% Washable Silk",
    aesthetic: "Romantic / Timeless / Crafted",
    imageUrl: "/src/assets/images/ceo_portrait_1779793828342.png"
  }
];
