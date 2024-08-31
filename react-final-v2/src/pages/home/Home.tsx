// COMPONENTS
import { CommonHeader, WidgetCategory } from "@/widgets";
import { Button } from "@/shared";
import { CodeXml, PowerCircle } from "lucide-react";
// CSS
import styles from "./page.module.scss";

interface CategoryWidget {
    path: string;
    icon: React.ReactNode;
    label: string;
    desc1: string;
    desc2: string;
    btnText: string;
}

function Home() {
    const CATEGORY_WIDGETS: CategoryWidget[] = [
        {
            path: "/dashboard",
            icon: (
                <Button size={"icon"} className="bg-[#F0E1F9] hover:bg-[#F0E1F9]">
                    <PowerCircle className="w-[22px] h-[22px] text-[#9d34da]" />
                </Button>
            ),
            label: "About Me",
            desc1: "제가 누군지 궁금하시다면",
            desc2: "여기를 살펴보세요!",
            btnText: "자세히 보기",
        },
        {
            path: "/dashboard",
            icon: (
                <Button size={"icon"} className="bg-[#FCE9E8] hover:bg-[#FCE9E8]">
                    <CodeXml className="w-[22px] h-[22px] text-[#ea4e43]" />
                </Button>
            ),
            label: "React",
            desc1: "보시는 웹 애플리케이션은",
            desc2: "리액트로 만들었습니다!",
            btnText: "자세히 보기",
        },
        {
            path: "/dashboard",
            icon: (
                <Button size={"icon"} className="bg-[#FFF6D6] hover:bg-[#FFF6D6]">
                    <CodeXml className="w-[22px] h-[22px] text-[#FAA700]" />
                </Button>
            ),
            label: "SCSS",
            desc1: "보시는 웹 애플리케이션은",
            desc2: "SCSS로 스타일링을 진행하였습니다!",
            btnText: "자세히 보기",
        },
        {
            path: "/dashboard",
            icon: (
                <Button size={"icon"} className="bg-[#e2ecf3] hover:bg-[#e2ecf3]">
                    <CodeXml className="w-[22px] h-[22px] text-[#0a85d1]" />
                </Button>
            ),
            label: "TypeScript",
            desc1: "보시는 웹 애플리케이션은",
            desc2: "TypeScriopt로 개발을 진행하였습니다!",
            btnText: "자세히 보기",
        },
        {
            path: "/dashboard",
            icon: (
                <Button size={"icon"} className="bg-[#ddfcfa] hover:bg-[#ddfcfa]">
                    <CodeXml className="w-[22px] h-[22px] text-[#03c1ba]" />
                </Button>
            ),
            label: "Jotai",
            desc1: "보시는 웹 애플리케이션은",
            desc2: "Jotai로 상태관리를 진행하였습니다!",
            btnText: "자세히 보기",
        },
    ];
    return (
        <>
            <CommonHeader />
            <div className={styles.page}>
                <div className={styles.page__container}>
                    <div className={styles.page__container__intro}>
                        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">React, TypeScript, Jotai</h1>
                        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Basic Portfolio</h1>
                        <p className="flex items-center mt-2">
                            <img src="src/assets/logo.svg" alt="" className="h-10 mb-3 mr-[1px]" />
                            <span className="scroll-m-20 text-xl font-md tracking-tight">는 리액트 기초과정 토이 프로젝트 입니다.</span>
                        </p>
                        <img src="src/assets/intro.svg" alt="" className="mt-12" />
                    </div>
                    <section className={styles.page__container__section}>
                        {/* 메뉴 카테고리 카드 컴포넌트 UI 삽입 부분 */}
                        {CATEGORY_WIDGETS.map((item: CategoryWidget) => {
                            return <WidgetCategory data={item} />;
                        })}
                    </section>
                </div>
            </div>
        </>
    );
}

export default Home;
