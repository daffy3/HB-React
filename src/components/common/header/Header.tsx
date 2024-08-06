import { Button } from "@/components";
import { RotateCcw } from "lucide-react";
import styles from "./header.module.scss";

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles[`header__logo-box`]}>
                <img src="/assets/images/logo.svg" alt="" className={styles[`header__logo-box__logo`]} />
            </div>
            <div className={styles[`header__btn-box`]}>
                <Button variant={"outline"} size={"icon"}>
                    <RotateCcw className="w-5 h-5" />
                </Button>
                <Button className="font-semibold">로그인</Button>
            </div>
        </header>
    );
}

export default Header;
