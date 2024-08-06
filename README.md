## 한빛앤 리액트 완벽 가이드 - 소스코드

### 프로젝트 환경설정

1. 프로젝트 설치: Shadcn UI 웹사이트에서 vite 환경으로 생성

-   경로: `https://ui.shadcn.com/docs/installation`
-   설치: `npm create vite@latest` <br />
    `npm install -D tailwindcss postcss autoprefixer` <br />
    `npx tailwindcss init -p` <br />
    `npm install -D sass` <br /><br />
    Add the following code to the vite.config.ts so your app can resolve paths without error <br />
    `npm i -D @types/node` <br />

2. 리액트 라우터 설치: `npm install react-router-dom` <br />
3. Shadcn UI 설치: `npx shadcn-ui@latest init` <br />
   Button - `npx shadcn-ui@latest add button` <br />
   Badge - `npx shadcn-ui@latest add badge` <br />
   Card - `npx shadcn-ui@latest add card` <br />
   Table - `npx shadcn-ui@latest add table` <br />
   Tooltip - `npx shadcn-ui@latest add tooltip` <br />
   Pagination - `npx shadcn-ui@latest add pagination`
