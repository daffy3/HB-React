import { atom, useAtom } from "jotai";

// Jotai는 React 상태 관리를 위해 만들어진 라이브러리 이다.
// atom: atom은 상태의 단위를 정의하는 함수. 독립적인 상태 조각을 의미. atom을 사용하여 state를 생성하면
// 이 state는 React 컴포넌트 내에서 공유하고 수정할 수 있다.

// useAtom: atom의 현재 값과 상태를 업데이트할 수 있는 함수 모두를 반환한다. 상태를 읽고 동시에 수정할 때 유용하다.
// useSetAtom: 상태를 업데이트 할 수 있는 함수만을 반환한다. 상태를 읽지 않고, 단순히 수정을 할때 유용하다.

// Atom 정의
const counter = atom(0);
const theme = atom("light");
const textAtom = atom("ReadOnly Atoms");
const uppercase = atom((get) => get(textAtom).toUpperCase());

// 스타일 정의
const styleWhite = { backgroundColor: "#ffffff" };
const styleBlack = { backgroundColor: "#000000" };

function HomePage() {
    const [count, setCount] = useAtom(counter);

    const [appTheme, setAppTheme] = useAtom(theme);
    const handleAppTheme = () => setAppTheme(appTheme === "light" ? "dark" : "light");

    const [lowercaseText, setLowercaseText] = useAtom(textAtom);
    const [uppercaseText] = useAtom(uppercase); // 읽기 전용
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLowercaseText(event.target.value);
    };

    return (
        <>
            <div>
                Home 페이지 컴포넌트
                <h1>Count: {count}</h1>
                <button onClick={() => setCount(count + 1)}>증가</button>
            </div>
            <div style={appTheme === "light" ? styleWhite : styleBlack}>
                <h1>This is a theme switcher!</h1>
                <button onClick={handleAppTheme}>{appTheme === "light" ? "다크모드로 변경" : "라이트모드로 변경"}</button>
            </div>
            <div>
                <input type="text" value={lowercaseText} onChange={handleChange} />
                <h1>{uppercaseText}</h1>
            </div>
        </>
    );
}

export default HomePage;
