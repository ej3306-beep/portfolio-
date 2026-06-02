# QA 정합성 점검 로그 — 1~5단계 산출물

| 항목 | 내용 |
|------|------|
| **점검일** | 2026-06-02 (M1 반영: 2026-06-02) |
| **점검 범위** | PRD v1.2, content.md, design-system.md, ia-wireframe.md, tech-stack.md, 구현 스냅샷(`src/`) — **M1 커밋 `b8b39b8`** |
| **점검자 역할** | QA / 리뷰어 |
| **연계 PRD** | [prd.md](./prd.md) v1.1 (본 점검 반영) |

---

## 1. 요구사항 추적 매트릭스 (RTM)

> **상태 정의**  
> - **충족**: 문서 간 매핑 일치 + (구현 항목은 코드에 반영됨)  
> - **갭**: 문서 누락·모순, 또는 구현/인벤토리 미반영  

| 요구사항 ID | 콘텐츠 ID | 화면/섹션 | 컴포넌트(목표) | 상태 |
|-------------|-----------|-----------|----------------|------|
| G1 | C-HERO-01~03 | S01 Hero | `HeroSection` | **갭** — Hero 카피·KPI 미정의, 코드는 발레/LIVRHYCO 톤 |
| G2 | C-EXP-01~03, C-PROJECT-01~03 | S03, S04 | `ExperienceSection`, `ProjectsSection`(신규) | **갭** — Experience 데이터·구조 불일치, Projects 섹션 없음 |
| G3 | C-CONTACT-01~04 | S07 Contact | `ContactSection` | **갭** — C-ID·카피 미정의, Formspree 미연동(`localStorage` 데모) |
| G4 | (디자인 토큰) | Global | `index.css` `@theme`, 전 섹션 | **부분 충족** — `@theme`·`ui/`·App 글로벌 토큰 적용; 섹션 컴포넌트 hex 잔존(M2) |
| FR-01 | — | G-01 Nav | `Navigation` | **갭** — 앵커·라벨이 IA와 불일치(`#profile`, Brand Vision 등) |
| FR-02 | — | G-01 Nav | `Navigation` | **갭** — 모바일 메뉴는 있으나 드로어/Contact 상단 고정 미흡 |
| FR-03 | C-CONTACT-04 | G-02 Footer | `Footer`(신규) | **갭** — Footer 컴포넌트·문서화 콘텐츠 없음 |
| FR-04 | — | Global | `App` / skip link | **충족** — `#main`·스킵 링크 (M1) |
| FR-05 | C-HERO-01~03 | S01 | `HeroSection` | **갭** — 인벤토리·IA만 정의, content.md·코드 미반영 |
| FR-06 | C-HERO-04a~d | S01 | `HeroSection` | **갭** — KPI 4칸 미구현; `Seoul` 등 출처 C-ID 없음 |
| FR-07 | — | S01 CTA | `HeroSection` | **갭** — CTA 타깃·라벨 IA와 불일치 |
| FR-08 | C-HERO-* | S01 | `HeroSection` | **갭** — 2열·KPI 그리드 미구현 |
| FR-09 | C-ABOUT-01~03 | S02 | `ProfileSection` → `#about` | **갭** — id `#profile`, 본문은 발레 CEO 카피(인벤토리와 상이) |
| FR-10 | C-ABOUT-* | S02 | `ProfileSection` | **갭** — sticky 2열 레이아웃 미적용 |
| FR-11 | C-ABOUT-* | S02 | `ProfileSection` | **갭** — `#profile` → `#about` 미정렬 |
| FR-12 | C-EXP-01~03 | S03 | `ExperienceSection` | **갭** — PSR 구조·기간·직함이 content.md와 다름 |
| FR-13 | C-EXP-* | S03 | `ExperienceSection` | **갭** — Mobile 아코디언 미구현 |
| FR-14 | — | S03 | `ExperienceSection` | **갭** — Tertiary CTA 없음 (P2) |
| FR-15 | C-PROJECT-01~03 | S04 | `ProjectsSection`(신규) | **갭** — 섹션·컴포넌트 없음 (`BrandVisionPlayground` 잔존) |
| FR-16 | C-PROJECT-02-NOTE | S04 | `ProjectsSection` | **갭** — 디스클레이머 UI 없음 (본문만 content.md에 존재) |
| FR-17 | C-PROJECT-* | S04 | `ProjectsSection` | **갭** — 반응형 카드 그리드 없음 |
| FR-18 | — | S04 | `ProjectsSection` | **갭** — 협업 문의 CTA 없음 (P2) |
| FR-19 | C-SKILL-01~04 | S05 | `SkillsSection` | **갭** — 카테고리 4분할 vs 별점·언어 스킬 UI |
| FR-20 | C-SKILL-* | S05 | `SkillsSection` | **갭** — 4열/아코디언 패턴 미적용 |
| FR-21 | C-EDU-01~05 | S06 | `EducationSection`(신규) | **갭** — 섹션 없음 (content.md에 데이터만 존재) |
| FR-22 | C-EDU-* | S06 | `EducationSection` | **갭** — GNB 미노출은 일치, 섹션 자체 없음 |
| FR-23 | C-CONTACT-01~04 | S07 | `ContactSection` | **갭** — 헤드라인·SNS·복사 UX 미정의/미구현 |
| FR-24 | C-CONTACT-03 | S07 | `ContactSection` | **갭** — Formspree/Web3Forms 미연동 |
| FR-25 | C-CONTACT-03 | S07 | `ContactSection` | **갭** — 제출 피드백·44px 타깃 검증 필요 |
| FR-26 | C-CONTACT-02 | S07 | `ContactSection` | **갭** — mailto/복사 Secondary 없음 |
| FR-27 | — | S07 | `ContactSection` | **갭** — sticky 문의하기 없음 (P2) |
| FR-28 | C-* 전체 | S01~S07 | `src/content/site-content.ts` | **부분 충족** — site-content.ts = content.md (M1); `data.ts`·화면 연동은 M2 |
| FR-29 | C-HERO-02, 섹션 제목 | S01~S07 | 전 섹션 | **갭** — H1 중복·위계 검증 필요 |
| FR-30 | — | Global | analytics 스니펫 | **갭** — Plausible/Umami 미연동 |
| FR-31 | — | 다수 | CTA·카드 | **갭** — 이벤트 추적 미정의 (P2) |
| FR-32 | — | Global | `index.css` | **충족** — Ivory & Sage `@theme` (M1) |
| FR-33 | — | Global | Button 유틸 | **충족** — `src/components/ui/Button` + `.btn-*` (M1) |
| FR-34 | — | Global | typography | **충족** — Geist Variable·JetBrains Mono (M1) |
| NFR-01~04 | — | Global | 빌드·배포 | **갭** — 프로덕션 URL·Lighthouse 미측정 |
| NFR-08~11 | — | Global | a11y | **부분 충족** — `:focus-visible`·스킵 링크(M1); Lighthouse a11y 88 — 섹션 색 대비(M2) |
| NFR-12~14 | C-HERO-02·03 | `<head>` | `index.html` | **갭** — OG·한글 description 파생 규칙 미적용 |
| NFR-17 | — | Global | Tailwind breakpoints | **충족** — IA·PRD·tech-stack 분기점 일치 |
| NFR-19 | — | S01~S07 | section `id` | **갭** — `#about`·`#projects`·`#education` 누락 |
| NFR-22~23 | — | Infra | Vite/React | **충족** — tech-stack·package.json와 일치 |
| KPI-11 | C-* | docs ↔ code | `content.md`, `site-content.ts` | **부분 충족** — M1 동기화; `data.ts` 제거·컴포넌트 import는 M2 |

### RTM 요약

| 구분 | 충족 | 갭 |
|------|:----:|:--:|
| 비즈니스 목표 (G1~G4) | 0 | 4 (G4 부분 1) |
| 기능 요구 (FR, P0 중심) | 4 | 24+ (FR-04, 32~34 충족; FR-28 부분) |
| 비기능 (NFR, 표본) | 2 | 6+ (NFR-08~11 부분) |
| **문서 간 C-ID 매핑** | 부분 | Hero·Contact·About·Skill ID가 content.md에 미부여 |

---

## 2. 누락 · 모순 · 중복

### 2.1 누락 (Omissions)

| # | 유형 | 설명 | 수정안 |
|---|------|------|--------|
| O-01 | **파일** | 실제 콘텐츠 파일은 `docs/content.md`인데 PRD·IA·tech-stack은 `docscontent.md` 참조 | **단일 정본**: `docs/content.md`로 통일하고 모든 문서 링크·FR-28·ADR-005 수정 |
| O-02 | **C-ID** | `content.md`에 C-HERO-*, C-CONTACT-*, C-ABOUT-00~03, C-SKILL-01~04 ID 미기재 | content.md 상단에 **C-ID 표 추가**(IA §2.2와 동일 ID) |
| O-03 | **C-ID** | Hero·Contact 카피·이메일·SNS URL 미작성 | M0 게이트: C-CONTACT-02(이메일), C-CONTACT-04(링크), C-HERO-02(이름+포지션) 확정 후 content.md 반영 |
| O-04 | **섹션** | 구현에 S04 Projects, S06 Education, G-02 Footer 없음 | `ProjectsSection`, `EducationSection`, `Footer` 신규; `BrandVisionPlayground`는 FR-15에 따라 제거 또는 Projects 카드로 흡수 |
| O-05 | **디자인** | design-system에 포트폴리오 GNB/Footer 스펙 없음 (Ollama 템플릿 잔존) | design-system §Shared Components를 IA G-01/G-02에 맞게 교체 |
| O-06 | **데이터** | `languageItems`, `brandProducts`가 PRD·content 인벤토리에 없음 | v1.0 범위에서 **제거**하거나 C-PROJECT-02 보조 UI로 명시적 매핑 후 PRD 범위에 추가 |
| O-07 | **운영** | Formspree 엔드포인트·`.env.example`·OG 이미지 | tech-stack §6·§7 순서대로 산출물 추가 |

### 2.2 모순 (Contradictions)

| # | 유형 | 설명 | 수정안 |
|---|------|------|--------|
| C-01 | **페르소나** | content.md = 콘텐츠 기획자·NGO·SNS/SEO; `data.ts`·Hero = 발레 10년·LIVRHYCO CEO | **정본을 content.md로 확정** 후 `data.ts`·전 컴포넌트 전면 교체 (단일 스토리) |
| C-02 | **네비** | IA/PRD: About, Experience, Projects, Skills, Contact / 코드: About→`#profile`, Brand Vision, Experiences, Expertise | `Navigation`을 IA §1 표와 동일 앵커로 수정 |
| C-03 | **Experience** | content: 3카드(활동가·대리·인턴 PSR) / data: 3건(회사·역할·불릿 상이, NGO 2역할 병합) | `data.ts`를 C-EXP-01~03 스키마(title, period, problem, solution[], result[])로 재작성 |
| C-04 | **기간** | C-EXP-03 종료 2024.07 vs data `2024/08` | content.md 기준으로 통일 |
| C-05 | **스킬 UI** | PRD FR-19 카테고리 카드 vs 코드 별점·언어 3종 | Skills를 C-SKILL-01~04 불릿 카드로 교체; 언어는 Out of Scope 또는 Contact 보조로 이동 |
| C-06 | **브랜드 비전** | `BrandVisionPlayground` = 의류 카탈로그 vs C-PROJECT-02 = 브랜딩 기획(미론칭) | Playground 제거, Projects 카드에 C-PROJECT-02-NOTE 배지 |
| C-07 | **tech-stack §1** | Hero, Profile, Brand Vision, Experience… (구조) vs IA S01~S07 | tech-stack §1 페이지 규모 행을 IA 사이트맵으로 교체 |
| C-08 | **색상** | design-system Ivory `#FAF9F6` vs Navigation/Hero `#FAF8F5`, `#D9C3B0` | ADR-002 체크리스트로 `@theme` 일괄 치환 |

### 2.3 중복 (Duplicates)

| # | 유형 | 설명 | 수정안 |
|---|------|------|--------|
| D-01 | **카피** | C-HERO-03 ≈ C-ABOUT-01 (IA·PRD에서 허용) | 유지 가능; Hero는 **한 줄 요약**, About는 **3단락 확장**으로 역할 분리 명시 |
| D-02 | **프로젝트** | C-PROJECT-02(Livrhyco) vs `brandProducts` 3종 | brandProducts 삭제, Projects 단일 카드로 통합 |
| D-03 | **경력** | C-EXP-01·02 동일 기관 vs data 단일 NGO 블록 | IA대로 2카드 유지(승진 스토리); data 병합 해소 |
| D-04 | **문서** | content vs docscontent 이중 명칭 | 파일명 하나만 유지, git에서 rename 또는 리다이렉트 문구 1회 |

---

## 3. 우선순위별 수정 작업 목록

### P0 — 출시·정합성 차단 (문서 → 데이터 → IA 핵심 UI)

| 순서 | 작업 | 산출물 | 관련 |
|:----:|------|--------|------|
| P0-1 | 콘텐츠 정본 확정: `docs/content.md` 단일화, 전 문서 링크 수정 | content.md, prd, ia, tech-stack | O-01, D-04 |
| P0-2 | content.md에 C-HERO·C-ABOUT·C-SKILL·C-CONTACT ID·카피·연락처 채우기 | content.md | O-02, O-03, M0 |
| P0-3 | `src/data.ts`를 content C-ID 스키마로 전면 교체 | data.ts, types.ts | C-01, C-03, FR-28 |
| P0-4 | `Navigation`: IA 앵커·라벨 적용 (`#about`, `#projects` 등) | Navigation.tsx | C-02, FR-01, NFR-19 |
| P0-5 | `ProfileSection` → id `about`, C-ABOUT-01~03 본문 | ProfileSection.tsx | FR-09, FR-11 |
| P0-6 | `ProjectsSection` 신규 + App에서 BrandVision 제거/대체 | ProjectsSection.tsx, App.tsx | FR-15, FR-16, O-04 |
| P0-7 | `EducationSection` 신규 C-EDU-01~05 | EducationSection.tsx | FR-21 |
| P0-8 | `HeroSection` C-HERO·KPI·CTA 반영 | HeroSection.tsx | FR-05~07, G1 |
| P0-9 | `ExperienceSection` PSR 카드 3건 | ExperienceSection.tsx | FR-12, G2 |
| P0-10 | `SkillsSection` C-SKILL 4카테고리 | SkillsSection.tsx | FR-19, C-05 |
| P0-11 | Contact Formspree + C-CONTACT 카피 | ContactSection.tsx, .env.example | FR-23~25, G3 |
| P0-12 | design-system TopNav/Footer 포트폴리오화 + `@theme` 토큰 | design-system.md, index.css | C-08, FR-32~33, G4 — **@theme·design-system·ui 완료**; Navigation/Footer·섹션 토큰 치환은 M2 |

### P1 — 품질·UX (출시 직후)

| 순서 | 작업 | 관련 |
|:----:|------|------|
| P1-1 | Footer(G-02), 스킵 링크 `#main` | FR-03, FR-04 — **스킵 링크 ✅ (M1)** |
| P1-2 | 반응형 패턴(Experience 아코디언, Skills 2×2/4열, Hero 2열) | FR-08, 13, 17, 20 |
| P1-3 | SEO/OG를 C-HERO-02·03에서 파생 | NFR-12~14 |
| P1-4 | Plausible/Umami + `section_view` | FR-30, KPI-01~02 |
| P1-5 | Lighthouse 모바일 90+ / a11y 95+ 검증 | NFR-01, 08 |
| P1-6 | Geist·JetBrains Mono 로드 및 타이포 스케일 | FR-34 — **✅ (M1)** |

### P2 — 개선·선택

| 순서 | 작업 | 관련 |
|:----:|------|------|
| P2-1 | Experience/Projects Tertiary CTA, Hero sticky 문의 | FR-14, 18, 27 |
| P2-2 | CTA·카드 expand 분석 이벤트 | FR-31 |
| P2-3 | `cv_download`, Hero 비주얼 | PRD §7.1 백로그 |

---

## 4. 문서 간 교차 검증 체크리스트 (다음 QA 회차)

- [ ] `content.md` 모든 C-ID가 `data.ts`·화면에 1:1 존재
- [ ] PRD P0 FR 전항목 RTM **충족**
- [x] design-system 색·타이포 = `index.css` `@theme` (M1 — [design-system.md](./design-system.md) 매핑표)
- [ ] IA §6 표의 「조치」열이 모두 ✅
- [ ] Formspree 테스트 메일 1건 수신
- [ ] OG 디버거 Pass (KPI-12)

---

## 5. 변경 이력

| 날짜 | 변경 |
|------|------|
| 2026-06-02 | 1~5단계 산출물 초회 QA, RTM·이슈·P0~P2 백로그 작성 |
| 2026-06-02 | **M1 구현 반영**: FR-04·32~34 충족, FR-28/KPI-11/G4/NFR-08 부분 충족, P0-12·P1-1·P1-6 진행 상태 갱신, Lighthouse 스냅샷(Perf 95 / A11y 88 / SEO 92) |

---

## 6. M1 구현 스냅샷 (2026-06-02)

| 항목 | 내용 |
|------|------|
| **커밋** | `b8b39b8` feat(M1): Ivory & Sage 디자인 토큰 및 콘텐츠 중앙 관리 부트스트랩 |
| **토큰** | `src/index.css` `@theme` — Primary/Surface/Accent/Outline, 360·768·1280 분기, 버튼·컨테이너 |
| **콘텐츠** | `src/content/site-content.ts` — `docs/content.md` C-ID 매핑 |
| **UI** | `src/components/ui/Button`, `Container` |
| **a11y** | `App.tsx` 스킵 링크 → `#main`, `:focus-visible` |
| **폰트** | Geist Variable, JetBrains Mono (`@fontsource-*`) |
| **Lighthouse** | Performance 95 · Accessibility 88 · SEO 92 (구 섹션 hex·OG 미구현) |
| **잔여** | M2: 섹션 `siteContent` 연동·네비·색상 hex 제거; M5: OG/sitemap |
