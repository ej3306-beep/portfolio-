# Ivory & Sage — 디자인 시스템

> **적용 대상:** 김은지 브랜드·콘텐츠 기획자 포트폴리오 (단일 SPA)  
> **코드 매핑:** `src/index.css` `@theme` · 컴포넌트는 **CSS 변수(토큰)만** 참조 (hex 하드코딩 금지)  
> **기준일:** 2026-06-02 · **M1 반영:** 2026-06-02

## Brand Identity

정제된 Ivory 배경과 Sage 포인트로 **가독성·신뢰·콘텐츠 기획자 톤**을 전달한다. 개발자·채용 담당자가 3초 안에 역할과 브랜드를 인지할 수 있도록 대비와 위계를 유지한다.

## Color Palette

### Core Colors

| 토큰 | Hex | 용도 |
|------|-----|------|
| **Primary** | `#45645E` | Primary CTA, 브랜드 강조 |
| **Accent** | `#84A59D` | 보조 강조, 배경 그라데이션 |
| **Surface High** | `#E9E8E5` | 카드·elevated surface |
| **Outline** | `#717976` | 테두리·구조선·muted 텍스트 |

### Backgrounds

| 토큰 | Hex | 용도 |
|------|-----|------|
| **Surface** | `#FAF9F6` | 메인 배경 (Ivory) |
| **Surface Dim** | `#DBDADA` | 비활성·구분면 |

### Semantic (구현)

| CSS 변수 (`@theme`) | 용도 |
|---------------------|------|
| `--color-foreground` | 본문 (`#2C302E`) |
| `--color-on-primary` | Primary 버튼 텍스트 (`#FFFFFF`) |

## Typography

| 스타일 | 폰트 | 크기 | CSS 유틸 |
|--------|------|------|----------|
| **Display** | Geist Bold | 48px | `.text-display` |
| **Headline** | Geist Semibold | 24px | `.text-headline` |
| **Body** | Geist Regular | 16px | `body` / `.text-body` |
| **Code** | JetBrains Mono | 14px | `.text-code` / `.font-mono` |

**로드:** `@fontsource-variable/geist`, `@fontsource/jetbrains-mono` (`src/main.tsx`)

## Design Tokens

### Spacing & Layout

| 토큰 | 값 | CSS 변수 |
|------|-----|----------|
| Gutter | 24px | `--spacing-gutter` |
| Container Max | 1280px | `--width-container-max` |
| Radius | 4px | `--radius-default` |

### 반응형 분기 (검증: 360 / 768 / 1280)

| 이름 | 값 | Tailwind |
|------|-----|----------|
| sm | 360px | `@theme --breakpoint-sm` |
| md | 768px | Tablet+ (IA: 768–1023) |
| lg | 1024px | Desktop+ (IA) |
| xl | 1280px | 컨테이너 상한 |

### UI Elements — Buttons

| 변형 | 스펙 | 구현 |
|------|------|------|
| **Primary** | `#45645E` 배경 + `#FFFFFF` 텍스트 | `.btn-primary` / `Button variant="primary"` |
| **Secondary** | `#717976` 아웃라인 | `.btn-secondary` |
| **Accent** | `#84A59D` 배경 | `.btn-accent` |

### Inputs

Surface 배경 + Outline 테두리 (Contact 섹션 M4에서 적용)

## Shared Components (포트폴리오 IA)

| 컴포넌트 | 스펙 | 코드 |
|----------|------|------|
| **G-01 TopNavBar** | About, Experience, Projects, Skills, Contact 앵커 · `<1024px` 햄버거 | `Navigation.tsx` (M2 정렬 예정) |
| **G-02 Footer** | 저작권 · Contact·SNS 보조 링크 | 신규 예정 (M2/P1) |
| **Container** | max 1280px, gutter 24px | `src/components/ui/Container.tsx` |
| **Skip link** | `#main` 본문 건너뛰기 | `App.tsx` `.skip-link` |

## 구현 체크리스트 (PR 시)

- [ ] `design-system.md` 색·타이포 변경 시 `src/index.css` `@theme` 동기화
- [ ] 새 UI 색상은 `@theme` 변수 추가 후 Tailwind 유틸(`bg-primary` 등)만 사용
- [ ] [review-log.md](./review-log.md) RTM G4 / FR-32~34 상태 확인

## 변경 이력

| 날짜 | 변경 |
|------|------|
| 2026-06-02 | Ivory & Sage 초안 (Ollama 템플릿 문구 포함) |
| 2026-06-02 | M1: 포트폴리오 GNB/Footer 정의, `@theme` 매핑표·구현 경로 추가, Ollama 문구 제거 |
