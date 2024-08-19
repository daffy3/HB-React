import { useEffect, useState } from "react";
import axios from "axios";
import { AstronomyPhotoOfTodayType } from "@/types/astronomy-today";
import { NASAImageAndVideoLibraryType } from "@/types/astronomy-imageAndVideo";
import { AstronomyEpic } from "@/types/astronomy-epic";

import { SummaryCard } from "@/widgets";
import styles from "./page.module.scss";

function Home() {
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
        console.log(res);
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
        console.log(res.data.collection.items[5].data);
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
        console.log(res.data[res.data.length - 1]);
    };

    // ====================================================================================================

    useEffect(() => {
        fetchAstronomyPhotoOfTodayApi();
        fetchNASAImageAndVideoLibraryApi();
        fetchEpicApi();
    }, []);

    return (
        <div className={styles.page}>
            <div className={`${styles.page__container} shadow-sm`}>
                <h1 className={styles.page__container__title}>Dashboard</h1>
                <div className={styles[`page__container__card-box`]}>
                    <SummaryCard label={"오늘의 천문사진"} data={astronomyPhotoOfToday} />
                    <SummaryCard label={"NASA 이미지 & 비디오 라이브러리"} data={NASAImageAndVideoLibrary} />
                    <SummaryCard label={"지구 다색 이미징 카메라"} data={epic} />
                </div>
            </div>
        </div>
    );
}

export default Home;
