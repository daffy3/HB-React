import { CommonNav } from "@/widgets";
import { Button } from "@/shared";
// CSS
import styles from "./header.module.scss";

function CommonHeader() {
    return (
        <header className={styles.header}>
            {/* 네비게이션 ui */}
            <CommonNav />
            <div></div>
            <div className={styles.header__logo}>
                <img src="/logo.svg" alt="" />
            </div>
            <div className={styles.header__end}>
                <Button variant="outline">회원가입</Button>
                <Button>로그인</Button>
            </div>
        </header>
    );
}

export { CommonHeader };
