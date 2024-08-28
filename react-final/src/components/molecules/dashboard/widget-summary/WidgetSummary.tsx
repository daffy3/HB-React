import { Link } from "react-router-dom";
import { AstronomyPhotoOfTodayType } from "@/types/astronomy-today";
import { NASAImageAndVideoLibraryType } from "@/types/astronomy-imageAndVideo";
import { AstronomyEpic } from "@/types/astronomy-epic";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import styles from "./widget-summary.module.scss";
import { Telescope, Rocket, Earth } from "lucide-react";

interface Props {
    label: string;
    data: AstronomyPhotoOfTodayType | NASAImageAndVideoLibraryType | AstronomyEpic;
}

function WidgetSummary({ label, data }: Props) {
    // 타입 좁히기 함수 정의
    const isAstronomyPhotoOfToday = (data: any): data is AstronomyPhotoOfTodayType => {
        return (data as AstronomyPhotoOfTodayType).date !== undefined;
    };

    const isNASAImageAndVideoLibrary = (data: any): data is NASAImageAndVideoLibraryType => {
        return (data as NASAImageAndVideoLibraryType).nasa_id !== undefined;
    };

    const isAstronomyEpic = (data: any): data is AstronomyEpic => {
        return (data as AstronomyEpic).caption !== undefined;
    };

    return (
        // <Card className={styles.card}>
        //     <div className={styles.card__header}>
        //         <span className={styles.card__header__label}>오늘의 천문사진</span>
        //         <Telescope className="w-5 h-5 text-neutral-600" />
        //     </div>
        //     <div className={styles[`card__info-box`]}>
        //         <div className={styles[`card__info-box__column`]}>
        //             <Badge className="rounded-sm bg-neutral-600">날짜</Badge>
        //             <span className="text-sm">2024. 12. 31</span>
        //         </div>
        //         <div className={styles[`card__info-box__column`]}>
        //             <Badge className="rounded-sm bg-neutral-600">제목</Badge>
        //             <span className="text-sm">호출된 API 정보 데이터 제목입니다.</span>
        //         </div>
        //         <div className={styles[`card__info-box__column`]}>
        //             <Badge className="rounded-sm bg-neutral-600">미디어 타입</Badge>
        //             <span className="text-sm">image</span>
        //         </div>
        //     </div>
        // </Card>
        <Card className={styles.card}>
            <div className={styles.card__header}>
                <span className={styles.card__header__label}>{label}</span>
                {label === "오늘의 천문사진" && <Telescope className="w-5 h-5 text-neutral-600" />}
                {label === "NASA 이미지 & 비디오 라이브러리" && <Rocket className="w-5 h-5 text-neutral-600" />}
                {label === "지구 다색 이미징 카메라" && <Earth className="w-5 h-5 text-neutral-600" />}
            </div>
            {label === "오늘의 천문사진" && isAstronomyPhotoOfToday(data) && (
                <div className={styles[`card__info-box`]}>
                    <div className={styles[`card__info-box__column`]}>
                        <Badge className="rounded-sm bg-neutral-600">날짜</Badge>
                        <span className="text-sm">{data.date}</span>
                    </div>
                    <div className={styles[`card__info-box__column`]}>
                        <Badge className="rounded-sm bg-neutral-600">제목</Badge>
                        <span className="text-sm">{data.title}</span>
                    </div>
                    <div className={styles[`card__info-box__column`]}>
                        <Badge className="rounded-sm bg-neutral-600">미디어 타입</Badge>
                        <span className="text-sm">{data.media_type}</span>
                    </div>
                </div>
            )}
            {label === "NASA 이미지 & 비디오 라이브러리" && isNASAImageAndVideoLibrary(data) && (
                <div className={styles[`card__info-box`]}>
                    <div className={styles[`card__info-box__column`]}>
                        <Badge className="rounded-sm bg-neutral-600">NASA ID</Badge>
                        <span className="text-sm">{data.nasa_id}</span>
                    </div>
                    <div className={styles[`card__info-box__column`]}>
                        <Badge className="rounded-sm bg-neutral-600">포토그래퍼</Badge>
                        <span className="text-sm">{data.photographer}</span>
                    </div>
                    <div className={styles[`card__info-box__column`]}>
                        <Badge className="rounded-sm bg-neutral-600">제목</Badge>
                        <span className="text-sm">{data.title}</span>
                    </div>
                </div>
            )}
            {label === "지구 다색 이미징 카메라" && isAstronomyEpic(data) && (
                <div className={styles[`card__info-box`]}>
                    <div className={styles[`card__info-box__column`]}>
                        <Badge className="rounded-sm bg-neutral-600">중심 좌표</Badge>
                        <span className="text-sm">
                            {data.centroid_coordinates.lat} / {data.centroid_coordinates.lon}
                        </span>
                    </div>
                    <div className={styles[`card__info-box__column`]}>
                        <Badge className="rounded-sm bg-neutral-600">이미지 파일 이름</Badge>
                        <span className="text-sm">{data.image}</span>
                    </div>
                    <div className={styles[`card__info-box__column`]}>
                        <Badge className="rounded-sm bg-neutral-600">이미지 파일 링크</Badge>
                        <span className="text-sm">
                            <Link
                                to={`https://epic.gsfc.nasa.gov/archive/natural/${data.date.split(" ")[0].split("-")[0]}/${
                                    data.date.split(" ")[0].split("-")[1]
                                }/${data.date.split(" ")[0].split("-")[2]}/png/${data.image}.png`}
                                target="_blank"
                                className="text-blue-600"
                            >
                                이미지 파일 보기
                            </Link>
                        </span>
                    </div>
                </div>
            )}
        </Card>
    );
}

export default WidgetSummary;
