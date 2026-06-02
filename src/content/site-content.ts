import type { SiteContent } from "./types";

/**
 * 화면 표시용 단일 텍스트 소스 (정본: docs/content.md, IA: docs/ia-wireframe.md)
 * M2+ 섹션 컴포넌트는 이 객체를 import하여 C-ID와 1:1 매핑한다.
 */
export const siteContent: SiteContent = {
  meta: {
    siteName: "김은지 포트폴리오",
    title: "김은지 | 브랜드·콘텐츠 기획자",
    description:
      "비영리·콘텐츠 실험 경험을 바탕으로 스토리텔링과 성과 중심의 콘텐츠를 기획하는 김은지의 포트폴리오입니다.",
    locale: "ko",
  },
  nav: {
    about: "About",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
  },
  hero: {
    eyebrow: "CONTENT STRATEGIST",
    headline: "사람의 이야기를 콘텐츠로 연결하는 콘텐츠 기획자, 김은지",
    subcopy:
      "사람마다 다른 이야기와 강점을 발견하고 콘텐츠로 연결하는 콘텐츠 기획자 김은지입니다.",
    kpis: [
      { id: "C-HERO-04a", label: "NGO 경력", value: "5+ yrs" },
      { id: "C-HERO-04b", label: "콘텐츠 조회", value: "855K views" },
      { id: "C-HERO-04c", label: "블로그 포스팅", value: "190 posts" },
      { id: "C-HERO-04d", label: "활동 지역", value: "Seoul" },
    ],
    cta: {
      primary: "소개 보기",
      secondary: "경력 보기",
    },
  },
  about: {
    sectionTitle: "About",
    paragraphs: [
      {
        id: "C-ABOUT-01",
        text: "사람마다 다른 이야기와 강점을 발견하고 콘텐츠로 연결하는 콘텐츠 기획자 김은지입니다.",
      },
      {
        id: "C-ABOUT-02",
        text: "비영리단체에서 5년 이상 다양한 프로젝트를 운영하며 사람과 사회를 이해하는 경험을 쌓았습니다. 이후 브랜드 브랜딩 연구, SNS 콘텐츠 기획, SEO 기반 블로그 운영을 통해 콘텐츠가 사람의 행동과 감정에 어떤 영향을 주는지 직접 실험해 왔습니다.",
      },
      {
        id: "C-ABOUT-03",
        text: "현재는 인스타그램과 블로그를 직접 운영하며 콘텐츠 제작을 원하는 1인 사업자와 브랜드가 자신만의 이야기를 효과적으로 전달할 수 있도록 연구하고 있습니다.",
      },
    ],
  },
  experience: [
    {
      id: "C-EXP-01",
      title: "국제날개달기운동본부 활동가",
      period: "2014.03 ~ 2016.07",
      problem:
        "캄보디아 지역 아동과 주민들은 의료·위생·교육 지원이 부족했고, 국내 소아암 환아 지원사업 역시 지속적인 운영 체계가 필요했습니다.",
      solution: [
        "해외봉사단 기획 및 운영",
        "의료봉사 및 방역활동 진행",
        "메디박스 지원사업 운영",
        "모발기부 캠페인 및 환아 지원사업 운영",
        "후원자 응대 및 경영지원 업무 수행",
      ],
      result: [
        "캄보디아 6개 학교 대상 메디박스 지원사업 운영",
        "캄보디아 4개 마을 약 900명 대상 의료봉사 진행",
        "소아암 환아 지원사업 및 병동 행사 지속 운영",
      ],
    },
    {
      id: "C-EXP-02",
      title: "국제날개달기운동본부 대리",
      period: "2017.03 ~ 2020.03",
      problem:
        "백혈병·소아암 환아 가정은 치료비 부담이 크고 후원금이 필요한 상황이었습니다.",
      solution: [
        "치료비 지원사업 운영",
        "후원 캠페인 기획 및 운영",
        "후원자 관리 및 CS 업무 담당",
        "어린이날·크리스마스 병동 행사 기획",
      ],
      result: [
        "2017년 환아 3명 대상 34,400,000원 지원",
        "2018년 환아 2명 대상 15,000,000원 지원",
        "2019년 환아 5명 대상 35,000,000원 지원",
        "생활비 지원사업 병행 운영",
      ],
    },
    {
      id: "C-EXP-03",
      title: "키자미테이블 SNS 콘텐츠 기획 인턴",
      period: "2024.04 ~ 2024.07",
      problem:
        "SNS 채널 운영을 통해 브랜드 인지도를 높이고 콘텐츠 성과를 분석할 필요가 있었습니다.",
      solution: [
        "인스타그램 콘텐츠 기획 및 제작",
        "블로그 콘텐츠 작성",
        "콘텐츠 성과 분석 및 리포트 작성",
        "SNS 운영 데이터 모니터링",
      ],
      result: [
        "콘텐츠 분석 기반 인사이트 도출 경험 확보",
        "SNS 콘텐츠 기획 및 운영 프로세스 습득",
      ],
    },
  ],
  projects: [
    {
      id: "C-PROJECT-01",
      title: "개인 인스타그램 성장 프로젝트",
      problem:
        "콘텐츠 제작자가 아닌 일반 개인 계정으로도 공감형 스토리텔링 콘텐츠가 실제 성장에 영향을 주는지 검증이 필요했습니다.",
      solution: [
        "릴스 중심 콘텐츠 기획 및 제작",
        "스토리텔링 구조 설계",
        "썸네일 및 자막 최적화",
        "시청시간 및 반응 데이터 분석",
      ],
      result: [
        "단일 콘텐츠 조회수 855,671회",
        "좋아요 1,028개 · 저장 149개 · 공유 39회 · 댓글 28개",
        "팔로워 198명 증가 · 비팔로워 유입 비율 96.7%",
      ],
    },
    {
      id: "C-PROJECT-02",
      title: "Livrhyco 발레웨어 브랜딩 프로젝트",
      problem:
        "발레 의류 브랜드를 기획하기 위해 시장과 고객을 이해하는 브랜딩 체계가 필요했습니다.",
      solution: [
        "경쟁사 분석",
        "타겟 고객 분석",
        "브랜드 스토리 설계",
        "제품 제작 프로세스 학습",
        "브랜드 아이덴티티 기획",
      ],
      result: [
        "브랜드 기획 전 과정을 직접 경험",
        "브랜딩 및 콘텐츠 전략 역량 확보",
        "콘텐츠와 브랜드의 연결 구조 이해",
      ],
      note: "※ 실제 브랜드 론칭은 진행되지 않음",
    },
    {
      id: "C-PROJECT-03",
      title: "SEO 블로그 운영 프로젝트",
      problem:
        "검색 기반 콘텐츠가 실제 유입을 만들 수 있는지 검증이 필요했습니다.",
      solution: [
        "SEO 키워드 리서치",
        "정보성 콘텐츠 작성",
        "검색 의도 기반 포스팅 제작",
        "사용자 반응 분석 및 개선",
      ],
      result: [
        "누적 190여 개 포스팅 작성",
        "SEO 기반 검색 유입 실험 지속 운영",
        "콘텐츠 아카이빙 및 글쓰기 역량 강화",
      ],
    },
  ],
  skills: [
    {
      id: "C-SKILL-01",
      title: "콘텐츠 전략",
      items: [
        "콘텐츠 기획",
        "스토리텔링 설계",
        "콘텐츠 분석 및 개선",
        "브랜드 메시지 구조화",
      ],
    },
    {
      id: "C-SKILL-02",
      title: "SNS 마케팅",
      items: [
        "인스타그램 릴스 기획",
        "블로그 콘텐츠 제작",
        "썸네일 제작",
        "성과 데이터 분석",
      ],
    },
    {
      id: "C-SKILL-03",
      title: "브랜딩",
      items: [
        "타깃 분석",
        "경쟁사 분석",
        "브랜드 스토리텔링",
        "브랜드 아이덴티티 설계",
      ],
    },
    {
      id: "C-SKILL-04",
      title: "강점 기반 역량",
      items: [
        "Ideation (아이디어 발상)",
        "Adaptability (유연한 대응)",
        "Individualization (개인 맞춤 관점)",
        "Empathy (공감 능력)",
      ],
    },
  ],
  education: {
    school: "청주대학교",
    major: "법학과",
    degree: "학사",
    period: "2010.03 ~ 2014.02",
    gpa: "3.73 / 4.5",
  },
  contact: {
    headline: "협업·채용 문의를 환영합니다",
    email: "kim.eunji@example.com",
    formLabels: {
      name: "이름",
      email: "이메일",
      message: "메시지",
      submit: "메시지 보내기",
    },
    snsLabel: "SNS",
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} 김은지. All rights reserved.`,
  },
};
