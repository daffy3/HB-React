// FSD는(Feature-Sliced Design)

// FSD는 프런트엔드 개발 아키텍처 방법론 중 하나로 FDA(Feature Driven Architecture)에서 파생된 설계방식
// 크게 Layer, Slice, Segment라는 개념으로 구분하며 그 하위에 세부 개념이 추가된다.
// 레이어는 계층 수준의 개념이 있으며, 각 레이어는 하위 레이어만 참조할 수 있다. (단방향 참조)

// 1. App
// 레이어(Layer)는 최상위에 위치하는 디렉토리
// - 애플레케이션 로직이 초기화 되는 곳
// - ex) Providers, Routers, Global Styles, Global Type Declarations 등을 정의
// - 애플리케이션의 진입점 역할을 수행

// 2. Pages
// 애플리케이션의 페이지를 포함하는 레이어

// 3. Widgets
// 페이지 상에서 사용되는 독립적인 UI 컴포넌트들이 존재하는 레이어

// 4. Features
// 유저 시나리오 / 유저 케이스와 같이 기능을 다루는 레이어
// ex) 좋아요, 리뷰 작성, 제품 평가 등 유저 액션
// 선택적으로 사용이 가능한 레이어이고, 보통 페이지 내에서 기능을 구현하는데 그 부분을 덜어내어 Features에서 관리할 수 있음을 의미

// 5. Entities
// 비즈니스 엔티티를 표현하는 레이어
// 프런트엔드 개발에서 엔티티라는 개념이 잘 사용되지 않지만, 큰 정보의 틀, 객체, 타입들을 엔티티로 표현
// ex) 유저에 대한 정보, 리뷰 및 댓글에 대한 정보, 상품에 대한 정보에 대한 객체 즉, 그 정보 자체가 이루고 있는 상세 내용을 표현
// 선택적으로 사용이 가능한 레이어

// 6. Shared
// 특정 비즈니스 로직에 종속되지 않은 재사용 가능한 컴포넌트와 유틸리티가 포함된 레이어
// ex) UI 키트, axios 설정, 애플리케이션 설정, config 등이 포함된다.

// ====================================================================================================

// 슬라이스(Slice)
// 슬라이스에서는 추상적으로 정의된 것이 없기 때문에 어떤 애플리케이션을 구현하느냐에 따라 디렉토리 구성이 달라진다.
// 주요 목표는 코드를 목적에 맞게 그룹화하는 것이다.

// ====================================================================================================

// 세그먼트(Segment)
// 각 슬라이스는 세그먼트로 구성
// 세그먼트는 목적에 따라 코드를 나누는데 사용되며 합의된 내용에 따라 구성이 달라질 수 있다.
// 일반적으로 아래와 같은 파일을 생성할 수 있다.
// - api: 필요한 서버 요청
// - ui: 슬라이스의 ui 컴포넌트
// - model: 비즈니스 로직, 상태의 인터렉션(actions, selectors)
// - consts: 필요한 상수
// ...

// ====================================================================================================

// Public API
// 각 슬라이스와 세그먼트는 Public API를 가짐
// Public API는 index.tsx 같은 파일을 의미하며 이 파일을 통해 필요한 기능만 외부로 노출할 수 있다.
