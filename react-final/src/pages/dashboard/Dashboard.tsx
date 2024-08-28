import { useState, useEffect } from "react";
import axios from "axios";
import { AstronomyPhotoOfTodayType } from "@/types/astronomy-today";
import { NASAImageAndVideoLibraryType } from "@/types/astronomy-imageAndVideo";
import { AstronomyEpic } from "@/types/astronomy-epic";

import CommonHeader from "@/components/organisms/header/CommonHeader";
import WidgetSummary from "@/components/molecules/dashboard/widget-summary/WidgetSummary";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Image } from "lucide-react";
import styles from "./page.module.scss";

interface TData {
    copyright: string;
    date: string;
    explanation: string;
    hdurl: string;
    media_type: string;
    service_version: string;
    title: string;
    url: string;
}

function Dashboard() {
    // 오늘의 천문사진 API 조회
    const [astronomyPhotoOfToday, setAstronomyPhotoOfToday] = useState<AstronomyPhotoOfTodayType>({
        date: "",
        explanation: "",
        media_type: "",
        service_version: "",
        title: "",
        url: "",
    });
    const fetchAstronomyPhotoOfTodayApi = async () => {
        const API_KEY = "FTwwmPy8pQlNtzNIBwyzWDE044Wehv4iKUzjqtGo";
        const res = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);

        setAstronomyPhotoOfToday(res.data);
    };

    // ====================================================================================================
    // NASA 이미지 및 비디오 라이브러리 API 조회
    const [NASAImageAndVideoLibrary, setNASAImageAndVideoLibrary] = useState<NASAImageAndVideoLibraryType>({
        center: "",
        date_created: "",
        description: "",
        description_508: "",
        keywords: [],
        media_type: "",
        nasa_id: "",
        photographer: "",
        secondary_creator: "",
        title: "",
    });
    const fetchNASAImageAndVideoLibraryApi = async () => {
        const res = await axios.get(`https://images-api.nasa.gov/search?q=orion`);
        setNASAImageAndVideoLibrary(res.data.collection.items[5].data[0]);
    };

    // ====================================================================================================
    // 지구 다색 이미지 카메라 API 조회
    const [epic, setEpic] = useState<AstronomyEpic>({
        attitude_quaternions: { q0: 0, q1: 0, q2: 0, q3: 0 },
        caption: "",
        centroid_coordinates: { lat: 0, lon: 0 },
        coords: {
            attitude_quaternions: { q0: 0, q1: 0, q2: 0, q3: 0 },
            centroid_coordinates: { lat: 0, lon: 0 },
            dscovr_j2000_position: { x: 0, y: 0, z: 0 },
            lunar_j2000_position: { x: 0, y: 0, z: 0 },
            sun_j2000_position: { x: 0, y: 0, z: 0 },
        },
        date: "",
        dscovr_j2000_position: { x: 0, y: 0, z: 0 },
        identifier: "",
        image: "",
        lunar_j2000_position: { x: 0, y: 0, z: 0 },
        sun_j2000_position: { x: 0, y: 0, z: 0 },
        version: "",
    });
    const fetchEpicApi = async () => {
        const API_KEY = "FTwwmPy8pQlNtzNIBwyzWDE044Wehv4iKUzjqtGo";
        const res = await axios.get(`https://api.nasa.gov/EPIC/api/natural/date/2024-08-17?api_key=${API_KEY}`);

        setEpic(res.data[res.data.length - 1]);
    };

    // ====================================================================================================
    // 화성 탐사차 사진 API 조회
    const [mars, setMars] = useState<TData[]>([]);
    const fetchMarsApi = async () => {
        const API_KEY = "FTwwmPy8pQlNtzNIBwyzWDE044Wehv4iKUzjqtGo";
        const res = await axios.get(`https://api.nasa.gov/planetary/apod?start_date=2024-07-02&end_date=2024-07-11&api_key=${API_KEY}`);

        setMars(res.data);
    };

    // ====================================================================================================

    useEffect(() => {
        fetchAstronomyPhotoOfTodayApi();
        fetchNASAImageAndVideoLibraryApi();
        fetchEpicApi();
        fetchMarsApi();
    }, []);

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
                                <WidgetSummary label={"오늘의 천문사진"} data={astronomyPhotoOfToday} />
                                <WidgetSummary label={"NASA 이미지 & 비디오 라이브러리"} data={NASAImageAndVideoLibrary} />
                                <WidgetSummary label={"지구 다색 이미징 카메라"} data={epic} />
                            </div>
                            <Card>
                                <Table className="flex flex-col w-full h-full rounded-md">
                                    <TableHeader>
                                        <TableRow className="bg-muted/50">
                                            <TableHead className="text-sm text-center w-[80px]">
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger asChild>
                                                            <Button variant="ghost" size={"icon"}>
                                                                <Image className="w-[18px] h-[18px]" />
                                                            </Button>
                                                        </TooltipTrigger>
                                                        <TooltipContent side="bottom">
                                                            <p className="font-normal">이미지</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </TableHead>
                                            <TableHead className="font-normal text-sm text-center w-[224px]">Title</TableHead>
                                            <TableHead className="font-normal text-sm text-center w-[224px]">Date</TableHead>
                                            <TableHead className="font-normal text-sm text-center w-[224px]">
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger asChild>
                                                            <Button variant="ghost" size={"sm"}>
                                                                <p>Version</p>
                                                            </Button>
                                                        </TooltipTrigger>
                                                        <TooltipContent side="bottom">
                                                            <p>Service Version</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </TableHead>
                                            <TableHead className="font-normal text-sm text-center w-[224px]">Media Type</TableHead>
                                            <TableHead className="font-normal text-sm text-center w-[224px]">Copyright</TableHead>
                                            <TableHead className="font-normal text-sm text-center w-[224px]">License</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {mars.map((item: TData) => {
                                            return (
                                                <TableRow className="cursor-pointer" key={item.title}>
                                                    <TableCell className="flex items-center justify-center w-[80px] p-2">
                                                        {item.media_type === "video" ? (
                                                            <Image className="w-10 h-10 text-neutral-300" />
                                                        ) : (
                                                            <img src={item.url} alt="image" className="w-12 h-12 rounded-md" />
                                                        )}
                                                    </TableCell>
                                                    <TableCell className="table-cell font-normal text-center w-[224px] p-2">{item.title}</TableCell>
                                                    <TableCell className="table-cell font-normal text-center w-[224px] p-2">{item.date}</TableCell>
                                                    <TableCell className="table-cell font-normal text-center w-[224px] p-2">
                                                        <Badge variant="outline" className="px-3 py-1 rounded-md">
                                                            {item.service_version}
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell className="table-cell font-normal text-center w-[224px] p-2">
                                                        <Badge variant="outline" className="px-3 py-1 rounded-md">
                                                            {item.media_type}
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell className="table-cell font-normal text-center w-[224px] p-2">
                                                        {item.copyright ? item.copyright : "-"}
                                                    </TableCell>
                                                    <TableCell className="table-cell font-normal text-center w-[224px] p-2">9Diin </TableCell>
                                                </TableRow>
                                            );
                                        })}
                                    </TableBody>
                                </Table>
                            </Card>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
