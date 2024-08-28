import CommonHeader from "@/components/organisms/header/CommonHeader";
import styles from "./page.module.scss";
import WidgetSummary from "@/components/molecules/dashboard/widget-summary/WidgetSummary";

function Dashboard() {
    return (
        <>
            <CommonHeader />
            <div className={styles.page}>
                <div className={styles.page__container}>
                    <section className={styles.page__container__intro}>
                        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">NASA API + Vite</h1>
                        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-2">React Project Dashboard</h1>
                        <img src="src/assets/dashboard.svg" alt="" className={styles.image} />
                    </section>
                    <section className={`${styles.page__container__contents} shadow-sm`}>
                        <div className={styles.header}>
                            <div className={styles.header__dots}>
                                <div className="w-[14px] h-[14px] bg-neutral-300 rounded-full"></div>
                                <div className="w-[14px] h-[14px] bg-neutral-300 rounded-full"></div>
                                <div className="w-[14px] h-[14px] bg-neutral-300 rounded-full"></div>
                            </div>
                        </div>
                        <div className={styles.body}>
                            <div className={styles[`body__widget-box`]}>
                                <WidgetSummary />
                                <WidgetSummary />
                                <WidgetSummary />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
