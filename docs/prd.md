# PRD — 브랜드 콘텐츠 기획자 포트폴리오 사이트

| 항목 | 내용 |
|------|------|
| **문서 ID** | PRD-PORTFOLIO-001 |
| **버전** | v1.1 |
| **기준일** | 2026-06-02 |
| **상태** | QA 정합 반영 (구현 갭 추적 중) |
| **입력 문서** | [design-system.md](./design-system.md), [tech-stack.md](./tech-stack.md), [ia-wireframe.md](./ia-wireframe.md), [content.md](./content.md), [review-log.md](./review-log.md) |

---

## 1. 개요 · 목표

### 1.1 제품 개요

김은지(브랜드·콘텐츠 기획자)의 **단일 페이지(SPA) 포트폴리오**로, 비영리·콘텐츠 실험 경험을 **스토리텔링·정량 성과** 중심으로 전달하고 채용·협업 문의로 전환한다. Ivory & Sage 디자인 시스템과 Vite + React 스택으로 구현하며, 콘텐츠는 C-ID 인벤토리([content.md](./content.md))와 코드 데이터(`src/data.ts`)로 이원 관리한다.

> **v1.1 정합 메모**: 콘텐츠·IA·PRD 정본은 `content.md`이다. 현재 `src/data.ts` 및 일부 컴포넌트는 구(발레/LIVRHYCO) 스토리를 담고 있어 P0-3~P0-10 구현 전환 전까지 **문서 충족·코드 충족이 분리**된다. 상세 갭은 [review-log.md](./review-log.md) RTM 참조.

### 1.2 비즈니스 목표

| # | 목표 | 성공 기준(요약) |
|---|------|----------------|
| G1 | **3초 내 정체성 전달** | Hero(S01)에서 역할·핵심 가치 파악 |
| G2 | **실무·실험 신뢰 구축** | Experience·Projects의 Problem→Solution→Result + 수치 노출 |
| G3 | **문의 전환** | Contact 폼·이메일을 통한 실제 수신 가능 |
| G4 | **채용·협업 첫 인상** | 모바일 Lighthouse Performance ≥ 90, 브랜드 톤 일관 |

### 1.3 제품 원칙

1. **단일 스크롤 스토리** — 도착(S01) → 신뢰(S02–S05) → 보조(S06) → 전환(S07).
2. **콘텐츠 ID 추적** — 화면 카피·데이터는 `C-*` ID와 1:1 매핑.
3. **운영 부담 최소** — 정적 호스팅 + 서버리스 폼·경량 분석(무료 우선).
4. **성능 > 유지보수 > 학습** — 분기 1회 콘텐츠 업데이트 전제.

---

## 2. 타깃 · 페르소나

### 2.1 1차 타깃

| 페르소나 | 니즈 | 사이트에서 찾는 것 | 주요 동선 |
|----------|------|-------------------|-----------|
| **P1 채용 담당자** | 빠른 역량·실적 검증, 팀 핏 | 경력 PSR, 프로젝트 수치, 스킬 매칭 | Hero → Experience → Projects → Contact |
| **P2 1인 사업자·브랜드 담당자** | 협업·의뢰 가능 여부, 톤·스토리 감각 | About 스토리, SNS·브랜딩 실험, 문의 UX | Hero → About → Projects → Contact |

### 2.2 2차 타깃

- 동료·멘토(포트폴리오 공유·피드백)
- 검색·SNS 유입 방문자(OG·메타로 첫인상)

### 2.3 핵심 메시지

> 비영리·콘텐츠 실험 경험 → **스토리텔링·성과 기반 콘텐츠 기획** 역량  
> 출처: `ia-wireframe.md` §0, `content.md` About

---

## 3. 범위 (포함 / 제외)

### 3.1 포함 (In Scope) — v1.0

| 영역 | 내용 |
|------|------|
| **페이지** | 단일 SPA + 앵커 7섹션(S01–S07) + Global(G-01, G-02) |
| **콘텐츠** | [content.md](./content.md) 인벤토리 전 섹션(Hero·Contact·About·Skill C-ID는 v1.1에서 표준화 — M0 게이트) |
| **디자인** | Ivory & Sage 토큰, 반응형 3분기점(Mobile/Tablet/Desktop) |
| **기능** | 앵커 네비, CTA, 문의 폼(운영), 이메일·SNS, SEO·OG |
| **인프라** | Vercel(또는 Cloudflare Pages), Formspree/Web3Forms, Plausible/Umami |
| **품질** | Lighthouse·CWV·접근성 목표(tech-stack §5) |

### 3.2 제외 (Out of Scope) — v1.0

| 제외 항목 | 사유 | 재검토 조건 |
|-----------|------|-------------|
| 멀티 페이지·블로그·CMS | 분기 1회 Git 수정으로 충분 | 콘텐츠 주 1회 이상 변경 시 |
| Next.js/Astro 전환 | 단일 페이지에 오버스펙 | SEO 최우선 + React 인터랙션 최소화 시 |
| Express 상시 API | 무료·보안·운영 부담 | 대량 커스텀 백엔드 필요 시 |
| `@google/genai` 프로덕션 | 포트폴리오 핵심 가치와 무관 | 서버 프록시 기반 데모 명시 시 |
| GA4 기본 탑재 | 성능·쿠키 부담 | 마케팅 데이터 리터러시 어필 필요 시(보조) |
| Education GNB 노출 | 스크롤 보조 정보 | IA 변경 시 |
| 다국어(i18n) | 1차 한국어 단일 | 해외 채용 타깃 확대 시 |
| 회원·로그인·대시보드 | 포트폴리오 범위 외 | — |

출처: `tech-stack.md` §3·§4, `ia-wireframe.md` §1·§6

---

## 4. 기능 요구사항 (FR)

> **우선순위**: P0 = 출시 필수, P1 = 출시 직후·품질, P2 = 개선·선택

### 4.1 Global · 네비게이션

| ID | 요구사항 | 우선순위 | 출처 |
|----|----------|:--------:|------|
| **FR-01** | G-01 Top Navigation: About, Experience, Projects, Skills, Contact 앵커 링크 제공. Education(S06)은 GNB 생략 가능. | P0 | `ia-wireframe.md` §1 G-01, `design-system.md` TopNavBar |
| **FR-02** | Tablet/Mobile(`<1024px`)에서 햄버거 메뉴 → 전체 앵커 오버레이/드로어. Contact 링크 상단 고정 권장. | P0 | `ia-wireframe.md` §4.2·4.3 |
| **FR-03** | G-02 Footer: 저작권, Contact·SNS 보조 링크. | P1 | `design-system.md` Footer, `ia-wireframe.md` G-02 |
| **FR-04** | 스킵 링크 `#main` 제공, 키보드만으로 네비·폼 완료 가능. | P1 | `ia-wireframe.md` §7, `tech-stack.md` §5.3 |

### 4.2 S01 Hero

| ID | 요구사항 | 우선순위 | 출처 |
|----|----------|:--------:|------|
| **FR-05** | C-HERO-01(Eyebrow), C-HERO-02(H1), C-HERO-03(서브카피) 표시. C-HERO-02·03은 C-ABOUT-01 파생·동일 문장 허용. | P0 | `ia-wireframe.md` §2.1 S01, `content.md` About |
| **FR-06** | C-HERO-04a~d KPI 스트립 4칸(예: 5+ yrs NGO, 855K views, 190 posts, Seoul). C-EXP·C-PROJECT·C-ABOUT 수치 파생. **Seoul**은 C-CONTACT-02 또는 별도 C-HERO-04d 메타로 content.md에 명시. | P0 | `ia-wireframe.md` §2.1, `content.md` C-PROJECT-01·C-ABOUT-02 |
| **FR-07** | Primary CTA → `#about` 또는 `#projects`, Secondary CTA → `#experience`. | P0 | `ia-wireframe.md` §3.2 |
| **FR-08** | Desktop 2열(카피+옵션 비주얼), Mobile CTA·KPI 100%/2×2 그리드. | P1 | `ia-wireframe.md` §4.1·4.3, 토큰 `Container Max 1280px`, `Gutter 24px` |

### 4.3 S02 About

| ID | 요구사항 | 우선순위 | 출처 |
|----|----------|:--------:|------|
| **FR-09** | 섹션 `id="about"`. C-ABOUT-01~03 단락 3개 표시. | P0 | `ia-wireframe.md` §2.2, `content.md` About |
| **FR-10** | Desktop 2열(40% 제목 sticky / 60% 본문), Mobile 단일 열 스택. | P1 | `ia-wireframe.md` §4.1·4.3 |
| **FR-11** | 기존 `#profile` → `#about` 정렬 및 `ProfileSection` 콘텐츠 ID 매핑. | P0 | `ia-wireframe.md` §6 |

### 4.4 S03 Experience

| ID | 요구사항 | 우선순위 | 출처 |
|----|----------|:--------:|------|
| **FR-12** | C-EXP-01~03 카드: 제목·기간·Problem·Solution(불릿)·Result(불릿). | P0 | `content.md` C-EXP-*, `ia-wireframe.md` §2.2 |
| **FR-13** | Desktop 타임라인+카드 2열, Mobile 아코디언(Problem 노출 → 탭 시 S/R) 권장. | P1 | `ia-wireframe.md` §4.3, §5 |
| **FR-14** | 카드 하단 Tertiary CTA「관련 프로젝트」→ `#projects`. | P2 | `ia-wireframe.md` §3.2 |

### 4.5 S04 Projects

| ID | 요구사항 | 우선순위 | 출처 |
|----|----------|:--------:|------|
| **FR-15** | **신규 섹션** `id="projects"`. C-PROJECT-01~03 PSR 카드. C-PROJECT-01 수치 하이라이트. 기존 `BrandVisionPlayground`는 **v1.0에서 제거·대체**(의류 카탈로그 UI는 범위 외). | P0 | `ia-wireframe.md` §6, `content.md` C-PROJECT-* |
| **FR-16** | C-PROJECT-02-NOTE 디스클레이머(※ 실제 브랜드 론칭 미진행) 배지/주석 필수. | P0 | `content.md` C-PROJECT-02, `ia-wireframe.md` §5 |
| **FR-17** | Desktop 3열, Tablet 2+1, Mobile 1열·수치 칩 그리드. | P1 | `ia-wireframe.md` §4 |
| **FR-18** | 카드 CTA「협업 문의」→ `#contact`. | P2 | `ia-wireframe.md` §3.2 |

### 4.6 S05 Skills

| ID | 요구사항 | 우선순위 | 출처 |
|----|----------|:--------:|------|
| **FR-19** | C-SKILL-01~04 카테고리 카드 4분할(콘텐츠 전략, SNS, 브랜딩, Clifton 강점). **별점·언어 스킬 UI는 v1.0 제외.** | P0 | `content.md` Skills, `ia-wireframe.md` §2.2 |
| **FR-20** | Desktop 4열, Tablet 2×2, Mobile 1열 아코디언. | P1 | `ia-wireframe.md` §4 |

### 4.7 S06 Education

| ID | 요구사항 | 우선순위 | 출처 |
|----|----------|:--------:|------|
| **FR-21** | **신규 섹션** `id="education"`. C-EDU-01~05(학교·전공·학위·재학·학점) 표시. | P0 | `content.md` C-EDU-*, `ia-wireframe.md` §2.2 |
| **FR-22** | 시각적 무게 낮게(하단 배치, 컴팩트 테이블/팩트 스트립). GNB 미노출. | P1 | `ia-wireframe.md` §1·§5 |

### 4.8 S07 Contact

| ID | 요구사항 | 우선순위 | 출처 |
|----|----------|:--------:|------|
| **FR-23** | C-CONTACT-01(헤드라인), C-CONTACT-02(이메일 클릭·복사), C-CONTACT-03(폼: 이름·이메일·메시지), C-CONTACT-04(SNS). | P0 | `ia-wireframe.md` §2.2 S07 |
| **FR-24** | 폼 제출을 Formspree/Web3Forms로 POST. `localStorage` 데모는 **dev 전용** 분기. `VITE_FORM_ENDPOINT` 사용. | P0 | `tech-stack.md` ADR-003, §7 |
| **FR-25** | 제출 성공/실패 피드백, Primary CTA「메시지 보내기」. Mobile 입력 터치 타깃 ≥44px. | P0 | `ia-wireframe.md` §4.3, `tech-stack.md` §2.5 |
| **FR-26** | Secondary: 이메일 복사·`mailto:`. | P1 | `ia-wireframe.md` §3.2 |
| **FR-27** | Mobile 선택: 하단 sticky「문의하기」→ `#contact`. | P2 | `ia-wireframe.md` §4.3 |

### 4.9 콘텐츠 · 데이터

| ID | 요구사항 | 우선순위 | 출처 |
|----|----------|:--------:|------|
| **FR-28** | 화면 데이터 `src/data.ts`(또는 JSON), 기획 인벤토리 [content.md](./content.md) C-ID 동기화. 분기 업데이트 시 양쪽 갱신. **현재 코드베이스는 미동기화(갭) — P0-3 필수.** | P0 | `tech-stack.md` ADR-005, `review-log.md` |
| **FR-29** | 페이지 H1 1개(S01), 섹션 H2, 카드 H3 위계 준수. | P1 | `ia-wireframe.md` §7 |

### 4.10 분석 · 이벤트

| ID | 요구사항 | 우선순위 | 출처 |
|----|----------|:--------:|------|
| **FR-30** | Plausible/Umami 연동. 이벤트: `section_view`, `contact_submit`, `cv_download`(이력서 제공 시). | P1 | `tech-stack.md` ADR-004 |
| **FR-31** | CTA 클릭, 폼 제출, 이메일 복사, Experience/Project 카드 expand 추적. | P2 | `ia-wireframe.md` §7 |

### 4.11 디자인 시스템 적용

| ID | 요구사항 | 우선순위 | 출처 |
|----|----------|:--------:|------|
| **FR-32** | Tailwind `@theme`에 브랜드 컬러·타이포·간격 매핑: Primary `#45645E`, Accent `#84A59D`, Surface `#FAF9F6`, Outline `#717976` 등. | P0 | `design-system.md`, `tech-stack.md` ADR-002 |
| **FR-33** | 버튼 Primary/Secondary/Accent, Radius `4px`, Container max `1280px`, Gutter `24px`. | P0 | `design-system.md` Design Tokens |
| **FR-34** | Display/Headline/Body/Code 타이포 스케일(Geist·JetBrains Mono). | P1 | `design-system.md` Typography |

---

## 5. 비기능 요구사항 (NFR)

### 5.1 성능

| ID | 요구사항 | 우선순위 | 목표치 | 출처 |
|----|----------|:--------:|--------|------|
| **NFR-01** | Lighthouse Performance (모바일, Slow 4G) | P0 | ≥ 90 | `tech-stack.md` §5.1 |
| **NFR-02** | LCP (75th percentile) | P0 | ≤ 2.5s | `tech-stack.md` §5.2 |
| **NFR-03** | INP | P1 | ≤ 200ms | `tech-stack.md` §5.2 |
| **NFR-04** | CLS | P0 | ≤ 0.1 | `tech-stack.md` §5.2 |
| **NFR-05** | 초기 JS (gzip) | P1 | < 150KB | `tech-stack.md` §5.5 |
| **NFR-06** | Hero LCP 이미지 WebP/AVIF, `width`/`height`, `fetchpriority="high"` | P1 | — | `tech-stack.md` §5.5 |
| **NFR-07** | Motion 애니메이션: `prefers-reduced-motion` 시 축소/비활성 | P1 | — | `tech-stack.md` §5.3, Motion 12.x |

### 5.2 접근성

| ID | 요구사항 | 우선순위 | 목표치 | 출처 |
|----|----------|:--------:|--------|------|
| **NFR-08** | Lighthouse Accessibility | P0 | ≥ 95 | `tech-stack.md` §5.1 |
| **NFR-09** | 색 대비 WCAG AA (본문 4.5:1, 대형 3:1) | P0 | Pass | `tech-stack.md` §5.3, `design-system.md` palette |
| **NFR-10** | 의미 있는 `alt`, 장식 `alt=""` | P0 | 100% | `tech-stack.md` §5.3 |
| **NFR-11** | `:focus-visible` 포커스 링 가시 | P0 | — | `tech-stack.md` §5.3 |

### 5.3 SEO · 공유

| ID | 요구사항 | 우선순위 | 목표치 | 출처 |
|----|----------|:--------:|--------|------|
| **NFR-12** | Lighthouse SEO | P0 | ≥ 95 | `tech-stack.md` §5.1 |
| **NFR-13** | `title`, `meta description`(한글 50~60자), `lang="ko"` — C-HERO-02·03 파생 | P0 | — | `ia-wireframe.md` §7, `tech-stack.md` §5.4 |
| **NFR-14** | OG `og:title`, `og:description`, `og:image` 1200×630 | P0 | — | `tech-stack.md` §5.4 |
| **NFR-15** | `sitemap.xml`, `robots.txt` 배포 루트 | P1 | — | `tech-stack.md` §5.4 |
| **NFR-16** | 시맨틱 `header`, `main`, `section` + `aria-labelledby` | P1 | — | `tech-stack.md` §5.4 |

### 5.4 반응형 · UI

| ID | 요구사항 | 우선순위 | 목표치 | 출처 |
|----|----------|:--------:|--------|------|
| **NFR-17** | 브레이크포인트: Mobile `<768px`, Tablet `768–1023px`, Desktop `≥1024px` | P0 | — | `ia-wireframe.md` §0 |
| **NFR-18** | 모바일·데스크톱에서 Ivory & Sage 브랜드 톤 일관 전달 | P0 | — | `tech-stack.md` §1, `design-system.md` |
| **NFR-19** | 섹션 `id` = 네비 `href` 일치 | P0 | — | `ia-wireframe.md` §7 |

### 5.5 보안 · 운영

| ID | 요구사항 | 우선순위 | 목표치 | 출처 |
|----|----------|:--------:|--------|------|
| **NFR-20** | HTTPS 프로덕션, 콘솔 에러 0 (Best Practices ≥ 95) | P0 | — | `tech-stack.md` §5.1 |
| **NFR-21** | API 키·비밀 클라이언트 번들 미포함. `.env.example` 유지, Vercel Env만 실키 | P0 | — | `tech-stack.md` §7 |
| **NFR-22** | 정적 배포 Vercel 1순위 / Cloudflare Pages 대안 | P0 | — | `tech-stack.md` §2.3, ADR-003 |
| **NFR-23** | 스택: Vite 6 + React 19 + TS 5.8 + Tailwind 4 | P0 | — | `tech-stack.md` §3, ADR-001 |

### 5.6 유지보수

| ID | 요구사항 | 우선순위 | 목표치 | 출처 |
|----|----------|:--------:|--------|------|
| **NFR-24** | `tsc --noEmit` 통과 | P0 | 0 error | `tech-stack.md` §3 |
| **NFR-25** | design-system ↔ `index.css` `@theme` PR 시 동기화 체크 | P1 | — | `tech-stack.md` ADR-002, §8 |
| **NFR-26** | 폰트 `font-display: swap`, 서브셋/폴백 | P2 | — | `tech-stack.md` §5.5 |

---

## 6. KPI · 측정 계획

| KPI ID | 지표 | 측정 방법 | 목표치 | 관련 FR/NFR | 출처 |
|--------|------|-----------|--------|-------------|------|
| **KPI-01** | **Hero 이탈 전 스크롤률** | Plausible/Umami: 첫 방문 대비 `#about` 또는 `#experience` 스크롤(커스텀 이벤트 또는 스크롤 depth) | ≥ 55% (출시 4주 후) | FR-05~07, FR-30 | `ia-wireframe.md` §3.1 도착→신뢰 |
| **KPI-02** | **Contact 섹션 도달률** | `section_view` where section=contact / 세션 | ≥ 25% | FR-23, FR-30 | `ia-wireframe.md` 전환 구간 |
| **KPI-03** | **문의 폼 제출 수** | `contact_submit` 이벤트 / 월 | ≥ 3건/월 (초기), 스팸 제외 | FR-24, FR-30 | `tech-stack.md` ADR-003·004 |
| **KPI-04** | **폼 제출 성공률** | 성공 응답 / 제출 시도 | ≥ 95% | FR-24, FR-25 | Formspree 대시보드 |
| **KPI-05** | **Lighthouse Performance** | PageSpeed Insights 또는 Lighthouse CI, 모바일 프로덕션 URL | ≥ 90 | NFR-01 | `tech-stack.md` §5.1 |
| **KPI-06** | **LCP** | CrUX 또는 Lighthouse (75th) | ≤ 2.5s | NFR-02 | `tech-stack.md` §5.2 |
| **KPI-07** | **Accessibility 점수** | Lighthouse + axe 수동 샘플 | ≥ 95 | NFR-08~11 | `tech-stack.md` §5.1·5.3 |
| **KPI-08** | **SEO 점수** | Lighthouse SEO 카테고리 | ≥ 95 | NFR-12~16 | `tech-stack.md` §5.1 |
| **KPI-09** | **평균 체류 시간** | Plausible/Umami visit duration | ≥ 90초 (유입 품질 지표) | FR-30 | 포트폴리오 스토리 길이 |
| **KPI-10** | **CTA 클릭률 (Hero Primary)** | hero_cta_primary / Hero PV | ≥ 15% | FR-07, FR-31 | `ia-wireframe.md` §3.2 |
| **KPI-11** | **콘텐츠 동기화 준수** | PR 체크: `content.md` C-ID ↔ `data.ts` 누락 0 | 100% (분기 릴리스) | FR-28 | `tech-stack.md` ADR-005 |
| **KPI-12** | **OG 미리보기 정상** | Facebook/Twitter/Slack 디버거 수동 1회/배포 | Pass | NFR-14 | `tech-stack.md` §5.4 |

### 6.1 측정 운영

- **도구**: Plausible 또는 Umami(기본), GA4(선택·보조).
- **리뷰 주기**: 배포 후 1주(기술 KPI), 4주(행동 KPI).
- **대시보드**: 호스팅 분석 + Formspree 제출 로그 + Lighthouse 스냅샷(선택 CI).

---

## 7. 마일스톤

| 단계 | 기간(권장) | 산출물 | 완료 기준 (Gate) | 주요 FR/NFR | 상태 |
|------|------------|--------|------------------|-------------|------|
| **M0 문서 정합** | D0 | PRD v1.1, [review-log.md](./review-log.md), content.md C-ID 표 | Hero·Contact·About·Skill ID 부여, `content.md` 명칭 통일, design-system GNB 정의 | FR-28, KPI-11 | ⏳ |
| **M1 디자인 토큰** | D1–D3 | `index.css` `@theme`, `src/content/`, `src/components/ui/` | Primary/Surface/타이포·스킵 링크·폰트 검수 | FR-32~34, NFR-18, FR-04 | ✅ 2026-06-02 |
| **M2 IA·콘텐츠** | D4–D10 | S01–S07 + `site-content.ts` 화면 연동 | C-EXP·PROJECT·EDU·ABOUT·SKILL 노출, `#about` 정렬 | FR-05~22, FR-11 | ⏳ |
| **M3 신규 섹션** | D8–D14 | Projects, Education 컴포넌트 | FR-15~16, FR-21 통과, C-PROJECT-02-NOTE | FR-15~18, FR-21~22 | ⏳ |
| **M4 Contact 운영화** | D12–D16 | Formspree/Web3Forms 연동 | 실제 메일 수신, dev `localStorage` 분리 | FR-23~25, KPI-03~04 | ⏳ |
| **M5 SEO·메타** | D14–D18 | `index.html` OG, sitemap | NFR-12~14, KPI-12 Pass | NFR-13~15 | ⏳ |
| **M6 배포** | D18–D20 | Vercel Production URL | Preview → Prod, HTTPS | NFR-20~22 | ⏳ |
| **M7 분석·품질** | D20–D24 | Analytics 스니펫, Lighthouse | KPI-05~08 달성, FR-30 | NFR-01~08, FR-30~31 | ⏳ |
| **M8 v1.0 릴리스** | D25 | 고정 URL 공유 | P0 FR·NFR 전부 Pass, KPI 4주 모니터링 시작 | 전체 P0 | ⏳ |

### 7.1 v1.0 이후 백로그 (P2·차기)

- Astro/SSG 전환 검토(SEO 최우선 시) — `tech-stack.md` ADR-001 후속
- GA4 보조 채널 — ADR-004
- Hero 비주얼·이력서 `cv_download` — FR-06, FR-30
- ~~`BrandVisionPlayground` → Projects 병합/대체~~ → **v1.1에서 FR-15로 제거·대체 확정** — `review-log.md` P0-6

---

## 8. 부록

### 8.1 섹션 · 콘텐츠 ID 요약

| 섹션 | ID | 주요 C-ID |
|------|-----|-----------|
| S01 Hero | `#hero` | C-HERO-01~04 |
| S02 About | `#about` | C-ABOUT-01~03 |
| S03 Experience | `#experience` | C-EXP-01~03 |
| S04 Projects | `#projects` | C-PROJECT-01~03, C-PROJECT-02-NOTE |
| S05 Skills | `#skills` | C-SKILL-01~04 |
| S06 Education | `#education` | C-EDU-01~05 |
| S07 Contact | `#contact` | C-CONTACT-01~04 |

### 8.2 기술 결정 요약 (ADR)

| ADR | 결정 | PRD 연계 |
|-----|------|----------|
| ADR-001 | Vite + React SPA 유지 | NFR-23, Out of Scope Next/Astro v1 |
| ADR-002 | Tailwind v4 단일 스타일 | FR-32~34 |
| ADR-003 | 정적 호스팅 + Formspree/Web3Forms | FR-24, NFR-22 |
| ADR-004 | Plausible/Umami | FR-30, KPI-01~03 |
| ADR-005 | `site-content.ts` + [content.md](./content.md) 이원화 | FR-28, KPI-11 |

### 8.3 문서 변경 이력

| 버전 | 날짜 | 변경 |
|------|------|------|
| v1.0 | 2026-06-02 | design-system, tech-stack, ia-wireframe, content 인벤토리 통합 초안 |
| v1.1 | 2026-06-02 | QA 정합 점검([review-log.md](./review-log.md)) 반영: 콘텐츠 정본 파일명 `content.md` 통일; M0 게이트에 About·Skill C-ID 표준화·design-system GNB/Footer 정의 추가; FR-06 KPI `Seoul` 출처 명시; FR-15 `BrandVisionPlayground` 제거·Projects 대체 확정; FR-19 별점·언어 UI Out of Scope 명시; FR-28 구현 갭(P0-3) 추적; §1 v1.1 정합 메모·입력 문서에 review-log 추가 |
| v1.2 | 2026-06-02 | **M1 구현 반영**: `src/index.css` Ivory & Sage `@theme`, `src/content/site-content.ts` C-ID 중앙 관리, `src/components/ui/` 버튼·컨테이너, FR-04 스킵 링크, FR-34 폰트; §7 M1 완료 표시 |

---

*본 PRD는 구현·QA·분기 콘텐츠 업데이트의 단일 기준 문서이다. 스택·IA 변경 시 해당 ADR/IA 문서와 함께 PRD 버전을 올린다.*
