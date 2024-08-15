import styles from "./footer.module.scss";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__copyright}>
                <span className="text-xs">시스템 이용약관 | 개인정보처리방침</span>
                <span className="text-xs">Copyright © 2024 by hanbit Co., Ltd. All rights reserved.</span>
            </div>
        </footer>
    );
}

export default Footer;
