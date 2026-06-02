# 김은지 — 브랜드·콘텐츠 기획자 포트폴리오

비영리·콘텐츠 실험 경험을 **스토리텔링·정량 성과** 중심으로 전달하는 단일 페이지(SPA) 포트폴리오입니다.  
디자인 시스템 **Ivory & Sage**, 스택 **Vite 6 + React 19 + TypeScript + Tailwind CSS v4**.

## 문서

| 문서 | 설명 |
|------|------|
| [docs/prd.md](./docs/prd.md) | 제품 요구사항·마일스톤 |
| [docs/content.md](./docs/content.md) | C-ID 콘텐츠 인벤토리 (기획 정본) |
| [docs/design-system.md](./docs/design-system.md) | 컬러·타이포·토큰 |
| [docs/ia-wireframe.md](./docs/ia-wireframe.md) | IA·와이어·앵커 |
| [docs/tech-stack.md](./docs/tech-stack.md) | 기술 스택·ADR·품질 목표 |
| [docs/review-log.md](./docs/review-log.md) | QA RTM·갭 추적 |

## 구현 현황 (마일스톤)

| 단계 | 상태 | 산출물 |
|------|:----:|--------|
| **M1** 디자인 토큰·부트스트랩 | ✅ 완료 | `src/index.css` `@theme`, `src/content/`, `src/components/ui/`, 스킵 링크·Geist/JetBrains Mono |
| **M2** IA·콘텐츠 화면 반영 | ⏳ 예정 | 섹션 컴포넌트 ↔ `siteContent` 연동, `#about` 정렬 |
| **M3~M8** | ⏳ 예정 | Projects/Education, Contact 운영, SEO, 배포, 분석, v1.0 |

> 화면 카피는 **`src/content/site-content.ts`** (`docs/content.md`와 C-ID 동기화).  
> 레거시 **`src/data.ts`** 는 M2에서 교체 예정.

## 로컬 실행

**필요:** Node.js 20 LTS 이상

```powershell
npm install
npm run dev
```

브라우저: [http://localhost:3000/](http://localhost:3000/)

| 스크립트 | 용도 |
|----------|------|
| `npm run dev` | 개발 서버 (포트 3000) |
| `npm run build` | 프로덕션 빌드 |
| `npm run preview` | 빌드 결과 미리보기 |
| `npm run lint` | `tsc --noEmit` |

## 환경 변수

문의 폼·분석 연동 시 [`.env.example`](./.env.example) 참고.  
`GEMINI_API_KEY`는 AI 실험용이며 **v1.0 포트폴리오 핵심 범위 밖**입니다.

## 프로젝트 구조 (요약)

```
src/
├── content/          # C-ID 중앙 텍스트 (site-content.ts)
├── components/ui/    # Button, Container (토큰 기반)
├── index.css         # @theme 디자인 토큰
└── components/       # 섹션 (M2+에서 siteContent 연동)
docs/                 # PRD·IA·콘텐츠·QA
```

## 품질 목표

Lighthouse 모바일: Performance·SEO **≥ 90**, Accessibility **≥ 95** ([tech-stack.md](./docs/tech-stack.md) §5).

**M1 스냅샷 (로컬 프리뷰):** Performance 95 · Accessibility 88 · SEO 92 — 구 섹션 하드코딩 색상·OG 미구현으로 a11y/SEO는 M2·M5에서 개선 예정.
