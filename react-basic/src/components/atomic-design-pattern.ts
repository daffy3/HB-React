// 1. 아토믹디자인 패턴이란 무엇인가?
// 가장 작은 컴포넌트를 원자(Atoms)로 설정하고, 이를 기초 or 토대로 상위 컴포넌트를 만들어 재활용성을 극대화한 방법론이다.
// 상위 컴포넌트는 순서대로 분자(Moleculs), 유기체(Organisms), 템플릿(Templates)의 개념으로 확장되며 최종적으로는 페이지(Pages)를 관리

// 📌 원자(Atoms)
// Atoms 컴포넌트는 디자인과 기능의 최소 단위라 이해할 수 있다.
// 서비스 혹은 프로젝트를 진행하기에 앞서 디자이너와 협업을 통해 컴포넌트의 구조 및 이해에 관련된 문서화를 통해 기준을 정하여
// 개발에 필요한 디자인과 기능의 최소 단위라 생각하면 된다.
// 프로젝트를 진행하면서 만들어 낼 상위 컴포넌트에 재사용해야 하기 때문에 가장 작고, 미니멀하게 제작한다.
// 대표적인 Atoms 컴포넌트로는 input-field / button / layout-container / icon 등이 있다.

// 📌 분자(Molecules)
// Atoms 컴포넌트보다 한 단계 위의 컴포넌트이다.
// 프런트엔드 개발자들이 컴포넌트를 만들 때, 가장 많이 만드는 단위의 컴포넌트이며
// 대표적인 예로 Card / Search-bar / Widget 등이 있다.
// 사실 예시로 설명한 것도 좋지만, 직접 개발을 진행하면서 Atoms들의 집합이라고 이해해도 무방하다.

// 📌 유기체(Organisms)
// 분자들을 묶어 관리하는 컴포넌트이다.
// 공통적으로 사용되는 내비게이션 메뉴 / 테이블 / 헤더 / 푸터 등 생각보다 큼직한 UI들이 여기에 해당된다.
// 여러 카드를 관리하는 그리드 등을 예로 들 수 있으며, 생각보다 재사용성이 낮아 보이지만 앞서 설명한 것처럼 가장 사용 빈도수가 많을 수가 있다.
