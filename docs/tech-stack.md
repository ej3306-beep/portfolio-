# 기술 정의서 — 브랜드 콘텐츠 기획자 포트폴리오

> **문서 목적**: 단일 페이지 포트폴리오의 프론트엔드 기술 선택 근거, 비교, ADR, 품질 목표를 한곳에 정리한다.  
> **기준일**: 2026-06-02  
> **관련 문서**: [design-system.md](./design-system.md), [content.md](./content.md), [review-log.md](./review-log.md)  
> **구현 스냅샷**: M1 완료 (2026-06-02) — `src/index.css` `@theme`, `src/content/site-content.ts`

---

## 1. 프로젝트 전제 (조건)

| 항목 | 가정값 | 근거 |
|------|--------|------|
| **페이지 규모** | 단일 페이지(SPA) + 앵커 7섹션 (Hero, About, Experience, Projects, Skills, Education, Contact) | [ia-wireframe.md](./ia-wireframe.md) §1 |
| **콘텐츠 변경 빈도** | 분기 1회 (경력·스킬·문구·이미지 위주) | 포트폴리오 특성상 대규모 기능 추가 빈도 낮음 |
| **익숙한 기술** | HTML/CSS, React 기초, Vite 사용 경험 | 저장소가 이미 Vite + React + Tailwind 스택 |
| **우선순위** | 성능 > 유지보수 > 학습 | 채용 담당자·클라이언트의 **첫 인상(로딩·가독성)** 이 핵심 |
| **예산** | 무료 우선 (호스팅·분석·폼 백엔드) | 개인 포트폴리오, 서버 운영 부담 최소화 |

### 비기능 요구사항 요약

- 모바일·데스크톱에서 **한 화면에 브랜드 톤**이 전달될 것
- 경력·콘텐츠는 **코드 또는 마크다운 데이터**로 수정 가능할 것
- 연락 폼은 **실제 수신** 가능해야 하며, 데모용 `localStorage`만으로는 운영 부적합
- 검색·SNS 공유 시 **메타·OG**가 정상 노출될 것

---

## 2. 영역별 후보 비교

### 2.1 프레임워크 / 렌더링

| 후보 | 장점 | 단점 | 선택 | 이유 |
|------|------|------|:----:|------|
| **Vite + React (CSR/SPA)** | 빠른 HMR, 학습 곡선 낮음, 현재 코드베이스와 100% 일치, 섹션 앵커·인터랙션 구현 용이 | 초기 HTML이 비어 SEO·OG는 별도 prerender/메타 처리 필요 | ✅ | 이미 구축됨. 분기 1회 업데이트·단일 페이지에 **과도한 프레임워크 전환 비용** 없음 |
| **Astro (정적 + React Islands)** | 기본 SSG로 Lighthouse·SEO 유리, 필요한 섹션만 React 하이드레이션 | 마이그레이션·빌드 파이프라인 재학습 필요 | — | SEO가 최우선이고 React 인터랙션이 적을 때 2차 전환 후보 |
| **Next.js (SSG/ISR)** | 메타·라우팅·이미지 최적화 내장, 채용 시장 인지도 높음 | App Router 학습·빌드 복잡도, 단일 페이지에는 기능 과잉 | — | 다국어·블로그·CMS 연동 확장 전까지는 오버스펙 |

### 2.2 스타일링

| 후보 | 장점 | 단점 | 선택 | 이유 |
|------|------|------|:----:|------|
| **Tailwind CSS v4** | 유틸리티로 섹션별 빠른 조정, 디자인 토큰을 `@theme`로 중앙 관리, 번들 최적화 | 클래스 문자열 길어질 수 있음 | ✅ | `index.css`·컴포넌트에 이미 적용. [design-system.md](./design-system.md) 토큰을 CSS 변수로 매핑하기 쉬움 |
| **CSS Modules** | 컴포넌트 스코프 명확, 런타임 의존 없음 | 토큰·반응형 일관성을 직접 설계해야 함 | — | Tailwind와 병행 시 이중 스택이 됨 |
| **styled-components / Emotion** | 동적 테마·props 스타일 | 런타임 비용, 포트폴리오 규모 대비 설정 부담 | — | 정적 브랜드 페이지에는 이점 대비 비용 큼 |

### 2.3 배포

| 후보 | 장점 | 단점 | 선택 | 이유 |
|------|------|------|:----:|------|
| **Vercel** | Git push 자동 배포, Preview URL, 무료 티어, Vite 친화 | 상업적 대규모 트래픽 시 유료 | ✅ (1순위) | 설정 최소, 채용용 Preview 링크 유리 |
| **Cloudflare Pages** | 글로벌 CDN, 무료 대역폭 넉넉, 빠른 정적 호스팅 | 일부 고급 빌드 설정은 문서 탐색 필요 | ✅ (대안) | 커스텀 도메인·CDN 성능 중시 시 동등 선택 |
| **GitHub Pages** | 완전 무료, 저장소와 동일 플랫폼 | SPA fallback·환경변수·Preview 제한 | — | `react-router` 없는 앵커 SPA는 가능하나 DX가 Vercel 대비 열세 |

### 2.4 분석 (Analytics)

| 후보 | 장점 | 단점 | 선택 | 이유 |
|------|------|------|:----:|------|
| **Plausible / Umami (셀프호스트 또는 클라우드)** | 경량 스크립트, 쿠키 배너 부담 적음, 페이지뷰·유입 경로 파악 | 고급 퍼널·광고 연동 약함 | ✅ | 포트폴리오 규모·개인정보·성능에 균형 |
| **Google Analytics 4** | 무료, 이벤트·전환 설계 유연, 채용·마케팅 업계 친숙 | 스크립트 무거움, GDPR/쿠키 동의 이슈 | △ | 콘텐츠 기획자로서 **데이터 리터러시**를 보여줄 때 보조로 추가 가능 |
| **없음 (서버 로그만)** | 성능·프라이버시 최고 | UX 개선 근거 부족 | — | Contact 전환율 개선을 위해 최소 페이지뷰 추적 권장 |

### 2.5 폼 처리

| 후보 | 장점 | 단점 | 선택 | 이유 |
|------|------|------|:----:|------|
| **Formspree / Web3Forms** | 백엔드 없이 이메일·웹훅 수신, 무료 티어, 구현 1일 이내 | 월 제출 한도, 스팸은 reCAPTCHA 등 추가 필요 | ✅ | 현재 `localStorage` 데모를 **운영 수준**으로 대체하기 적합 |
| **Google Forms embed** | 완전 무료, 스팸 방어 내장 | 브랜드 UI 일체감 저하, 커스텀 UX 제한 | — | 긴급 MVP용만 권장 |
| **자체 API (Express 등)** | 완전 통제, `package.json`에 express 이미 존재 | 호스팅·보안·스팸·키 관리 부담, 무료 우선 조건과 충돌 | — | 포트폴리오 문의량에는 서버리스/폼 SaaS가 유지보수 유리 |

---

## 3. 최종 스택 (한 줄 요약)

**Vite 6 + React 19 + TypeScript + Tailwind CSS v4** 로 단일 페이지를 구현하고, **Vercel(또는 Cloudflare Pages)** 에 정적 배포하며, **Formspree/Web3Forms** 로 문의를 수신하고, **Plausible 또는 Umami** 로 경량 분석을 수행한다.

### 권장 버전 (저장소 기준, 2026-06)

| 영역 | 기술 |
|------|------|
| 런타임 | Node.js 20 LTS+ |
| 빌드 | Vite 6.x |
| UI | React 19.x |
| 언어 | TypeScript 5.8.x |
| 스타일 | Tailwind CSS 4.x (`@tailwindcss/vite`) |
| 애니메이션 | Motion 12.x (필요 섹션만) |
| 아이콘 | lucide-react |
| 콘텐츠 | `src/content/site-content.ts` (화면) + `docs/content.md` (기획 인벤토리) · `src/data.ts`는 M2에서 폐기 예정 |
| 품질 | `tsc --noEmit`, Lighthouse CI(선택) |

### 의도적으로 제외·축소하는 것

| 제외 | 이유 |
|------|------|
| 풀스택 Express 상시 운영 | 문의 폼·정적 콘텐츠만 필요, 무료·보안 부담 증가 |
| CMS (Sanity, Contentful) | 분기 1회 수정은 Git + `data.ts`로 충분 |
| `@google/genai` 프로덕션 의존 | 포트폴리오 핵심 가치(기획·브랜드)와 무관 시 빌드·키 노출 리스크만 증가 |

---

## 4. ADR (Architecture Decision Records)

### ADR-001: 단일 페이지 SPA 유지 (Vite + React)

| | |
|---|---|
| **맥락** | 섹션 앵커 네비게이션, 스크롤 기반 스토리텔링, Brand Vision 인터랙션 등 클라이언트 UI가 많음. 콘텐츠는 분기 1회 수준으로 변경됨. |
| **결정** | 멀티 페이지 프레임워크 전환 없이 **Vite + React SPA**를 유지한다. SEO 보완은 `index.html` 메타·OG, 필요 시 `vite-plugin-prerender` 또는 빌드 시 정적 HTML 스냅샷으로 처리한다. |
| **결과** | 개발·배포 경로 단순, 기존 컴포넌트 재사용. SEO는 메타·시맨틱 HTML·성능 최적화로 보완해야 하며, 검색 노출이 최우선이 되면 ADR-002(Astro 검토)를 재개한다. |

### ADR-002: Tailwind CSS v4를 단일 스타일 소스로 사용

| | |
|---|---|
| **맥락** | [design-system.md](./design-system.md)에 Ivory & Sage 토큰이 정의되어 있으나, 구현체(`index.css`)와 일부 불일치 가능. |
| **결정** | Tailwind `@theme`에 브랜드 컬러·폰트·간격을 정의하고, 컴포넌트는 유틸리티 클래스로 스타일한다. |
| **결과** | 분기별 톤 조정 시 CSS 변수만 수정하면 전역 반영. 디자인 문서와 코드 동기화 체크리스트를 PR 시 적용한다. |

### ADR-003: 정적 호스팅 + 서버리스 폼 (백엔드 미운영)

| | |
|---|---|
| **맥락** | Contact 섹션이 현재 `localStorage` 데모. 채용·협업 문의는 실제 수신이 필요함. 예산 무료, 운영 인력 없음. |
| **결정** | **Formspree 또는 Web3Forms**로 POST 전환. Express 서버는 로컬 실험용으로만 두거나 의존성 정리한다. |
| **결과** | SMTP·스팸 설정은 SaaS에 위임. UI는 기존 Motion 폼 UX 유지 가능. 환경 변수로 엔드포인트 URL만 관리. |

### ADR-004: 경량 프라이버시 친화 분석 도입

| | |
|---|---|
| **맥락** | 콘텐츠 기획자 포트폴리오는 “방문·이탈·Contact 클릭” 정도의 지표면 충분. |
| **결정** | **Plausible 또는 Umami**를 기본으로 하고, 마케팅 분석 역량 어필 시 GA4를 보조 채널로 추가한다. |
| **결과** | Lighthouse 성능 점수 하락 최소화. 이벤트: `section_view`, `contact_submit`, `cv_download`(이력서 제공 시). |

### ADR-005: 콘텐츠는 코드 데이터 + 문서 인벤토리 이원화

| | |
|---|---|
| **맥락** | `docs/content.md`에 C-ID 기반 콘텐츠 인벤토리가 있음. |
| **결정** | 화면 표시는 `src/content/site-content.ts`(또는 JSON), 기획·검수 상태는 `content.md`에서 관리. 분기 업데이트 시 두 파일을 함께 갱신한다. |
| **결과** | CMS 비용 없이 버전 관리 가능. 오타·누락 방지를 위해 ID 매핑 표를 유지한다. |

---

## 5. 품질 목표 (성능 · 접근성 · SEO)

### 5.1 Lighthouse (모바일 기준, 프로덕션 URL)

| 카테고리 | 목표 | 측정 조건 |
|----------|------|-----------|
| Performance | **≥ 90** | Slow 4G 스로틀, Moto G Power 클래스 |
| Accessibility | **≥ 95** | axe 수동 검증 병행 |
| Best Practices | **≥ 95** | HTTPS, 콘솔 에러 0 |
| SEO | **≥ 95** | `title`, `meta description`, OG, `lang="ko"` |

### 5.2 Core Web Vitals (75th percentile)

| 지표 | 목표 |
|------|------|
| LCP | **≤ 2.5s** |
| INP | **≤ 200ms** |
| CLS | **≤ 0.1** |

### 5.3 접근성 체크리스트 (필수)

- 모든 이미지에 의미 있는 `alt` (장식 이미지는 `alt=""`)
- 키보드만으로 네비·폼·모달 완료 가능
- 포커스 링 가시 (`:focus-visible`)
- 색 대비 WCAG AA (본문 4.5:1, 대형 텍스트 3:1)
- `prefers-reduced-motion` 시 Motion 애니메이션 축소 또는 비활성

### 5.4 SEO · 공유

- 페이지당 고유 `title` / `description` (한글 50~60자 내 description)
- Open Graph: `og:title`, `og:description`, `og:image` (1200×630)
- 시맨틱 랜드마크: `header`, `main`, `section` + `aria-labelledby`
- `sitemap.xml`, `robots.txt` (배포 루트)
- 개인 도메인 연결 시 Search Console 등록

### 5.5 번들·에셋 가이드

- 초기 JS (gzip): **< 150KB** 목표 (Motion·아이콘 트리쉐이킹)
- LCP 이미지: WebP/AVIF, `width`/`height` 명시, hero는 `fetchpriority="high"`
- 폰트: `font-display: swap`, 서브셋 또는 시스템 폰트 폴백

---

## 6. 구현 로드맵 (권장 순서)

| 순서 | 항목 | 상태 | 산출물 |
|:----:|------|:----:|--------|
| 1 | **디자인 토큰·부트스트랩 (M1)** | ✅ | `src/index.css` `@theme`, `src/components/ui/`, `src/content/`, 스킵 링크, Geist·JetBrains Mono |
| 2 | **IA·콘텐츠 화면 반영 (M2)** | ⏳ | 섹션 ↔ `siteContent`, `#about`·네비 정렬, `data.ts` 교체 |
| 3 | **신규 섹션 (M3)** | ⏳ | Projects, Education |
| 4 | **Contact 운영화 (M4)** | ⏳ | Formspree/Web3Forms, dev `localStorage` 분리 |
| 5 | **SEO 메타 (M5)** | ⏳ | OG/Twitter, `sitemap.xml`, `robots.txt` |
| 6 | **배포 (M6)** | ⏳ | Vercel Production |
| 7 | **분석·품질 (M7)** | ⏳ | Plausible/Umami, Lighthouse 90+ |
| 8 | **v1.0 릴리스 (M8)** | ⏳ | P0 FR·NFR Pass |

---

## 7. 환경 변수 · 보안

| 변수 | 용도 | 비고 |
|------|------|------|
| `VITE_FORM_ENDPOINT` | 폼 POST URL | 공개 가능한 엔드포인트만 |
| `VITE_ANALYTICS_DOMAIN` | Plausible 도메인 | 선택 |
| `GEMINI_API_KEY` | AI 실험 기능 | **클라이언트 번들에 넣지 않음**. 사용 시 서버 프록시만 |

`.env.example`을 저장소에 유지하고, 실제 키는 Vercel Environment Variables에만 등록한다.

---

## 8. 문서 갱신 정책

- 스택 변경 시: 본 문서 ADR 섹션에 **ADR-00N 추가** (기존 ADR 삭제하지 않음)
- 분기 콘텐츠 업데이트 시: `content.md` ↔ `src/content/site-content.ts` 동기화 여부를 PR 체크리스트에 포함
- Lighthouse 목표 미달 시: Performance ADR 재검토 (이미지·폰트·Motion 범위 축소)

---

## 9. 문서 변경 이력

| 날짜 | 변경 |
|------|------|
| 2026-06-02 | 초안 |
| 2026-06-02 | M1 반영: `content.md`·`site-content.ts` 경로, IA 섹션 목록, 로드맵 상태표, ADR-005 문구 수정 |

---

*작성: 프론트엔드 테크리드 관점 권고안. 저장소 현황(Vite/React/Tailwind)을 반영했으며, 조건(익숙한 기술·우선순위·예산)이 바뀌면 §2 비교표의 「선택」 열을 재평가한다.*
