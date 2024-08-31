import axios from "axios";
import { atom } from "jotai";
import { AstronomyPhotoOfTodayType, NASAImageAndVideoLibraryType, AstronomyEpicType } from "@/types";

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

const API_KEY = "FTwwmPy8pQlNtzNIBwyzWDE044Wehv4iKUzjqtGo";

// 오늘의 천문사진 API 조회
export const astronomyPhotoOfTodayAtom = atom(async (get): Promise<AstronomyPhotoOfTodayType> => {
    // 비동기 작업
    try {
        const res = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);

        if (res.status !== 200) throw new Error("Failed to fetch API Data");
        else return res.data;
    } catch (error) {
        console.error("Error fetching NASA API: ", error);
        throw error;
    }
});

// NASA 이미지 및 비디오 라이브러리 API 조회
export const NASAImageAndVideoLibraryAtom = atom(async (get): Promise<NASAImageAndVideoLibraryType> => {
    // 비동기 작업
    try {
        const res = await axios.get(`https://images-api.nasa.gov/search?q=orion`);

        if (res.status !== 200) throw new Error("Failed to fetch API Data");
        else return res.data.collection.items[5].data[0];
    } catch (error) {
        console.error("Error fetching NASA API: ", error);
        throw error;
    }
});

// 지구 다색 이미지 카메라 API 조회
export const epicAtom = atom(async (get): Promise<AstronomyEpicType> => {
    // 비동기 작업
    try {
        const res = await axios.get(`https://api.nasa.gov/EPIC/api/natural/date/2024-08-27?api_key=${API_KEY}`);

        if (res.status !== 200) throw new Error("Failed to fetch API Data");
        else return res.data[res.data.length - 1];
    } catch (error) {
        console.error("Error fetching NASA API: ", error);
        throw error;
    }
});

// 화성 탐사차 사진 API 조회
export const marsAtom = atom(async (get): Promise<TData[]> => {
    // 비동기 작업
    try {
        const res = await axios.get(`https://api.nasa.gov/planetary/apod?start_date=2024-07-15&end_date=2024-08-20&api_key=${API_KEY}`);

        if (res.status !== 200) throw new Error("Failed to fetch API Data");
        else return res.data;
    } catch (error) {
        console.error("Error fetching NASA API: ", error);
        throw error;
    }
});
