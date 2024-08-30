import { useParams } from "react-router-dom";

function index() {
    // useParams의 역할
    // useParams는 react-router-dom 라이브러리에서 제공하는 훅(hook)으로
    // URL 경로에서 동적 파라미터를 추출하는데 사용됩니다. 이를 통해 라우트에서 정의한 변수 부분의 값을 쉽게 가져와서 사용할 수 있습니다.
    // useParams는 현재 경로의 URL 파라미터를 객체 형태로 반환합니다.
    // 이 훅을 사용하면, 라우트에서 정의한 동적 경로 변수에 접근할 수 있습니다.
    const { id } = useParams();

    return (
        <div>
            <h1>북마크 페이지 컴포넌트</h1>
            <h2>사용자 ID: {id}</h2>
        </div>
    );
}

export default index;
