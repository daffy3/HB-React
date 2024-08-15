import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "@pages/home/index";
import AboutPage from "@pages/about/index";
import BookmarkPage from "@pages/bookmark/index";

// 리액트 페이지 라우팅을 진행하기 위해서 우리는 react-router-dom 이라는 라이브러리를 설치했습니다.
// 1. BrowserRouter: HTML5 의 history API를 사용하여 브라우저의 주소 표시줄을 관리합니다.
// 이 컴포넌트는 애플리케이션의 루트에서 사용되며, 모두 라우트와 링크를 감싸줍니다. 브라우저의 URL을 변경하거나
// 페이지를 새로고침 할 때, 라우터가 적절하게 작동하도록 도와줍니다.

// 2. Routes: 여러 개의 Route 컴포넌트를 담고 있는 컨테이너입니다.
// Routes는 현재 URL에 따라 적절한 Route를 렌더링합니다.
// Routes를 사용하여 애플리케이션의 모든 라우트를 정의할 수 있습니다.

// 3. Route: 특정 경로에 대해 어떤 컴포넌트를 렌더링 할 지 정의합니다.
// path 속성으로 경로를 지정하고, element 속성으로 해당 경로에 맞는 컴포넌트를 설정합니다.

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* 라우트 정의 */}
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/about" element={<AboutPage />}></Route>
                <Route path="/bookmark/:id" element={<BookmarkPage />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
