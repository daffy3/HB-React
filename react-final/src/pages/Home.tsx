// Components
import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";
import { Table } from "./widget";

// CSS
import styles from "./home.module.scss";

function Home() {
    return (
        <div className={styles.page}>
            <Header />
            <div className={styles.page__contents}>
                <Table />
            </div>
            <Footer />
        </div>
    );
}

export default Home;
