import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import styles from "./widget-summary.module.scss";
import { Telescope } from "lucide-react";

function WidgetSummary() {
    return (
        <Card className={styles.card}>
            <div className={styles.card__header}>
                <span className={styles.card__header__label}>오늘의 천문사진</span>
                <Telescope className="w-5 h-5 text-neutral-600" />
            </div>
            <div className={styles[`card__info-box`]}>
                <div className={styles[`card__info-box__column`]}>
                    <Badge className="rounded-sm bg-neutral-600">날짜</Badge>
                    <span className="text-sm">2024. 12. 31</span>
                </div>
                <div className={styles[`card__info-box__column`]}>
                    <Badge className="rounded-sm bg-neutral-600">제목</Badge>
                    <span className="text-sm">호출된 API 정보 데이터 제목입니다.</span>
                </div>
                <div className={styles[`card__info-box__column`]}>
                    <Badge className="rounded-sm bg-neutral-600">미디어 타입</Badge>
                    <span className="text-sm">image</span>
                </div>
            </div>
        </Card>
    );
}

export default WidgetSummary;
