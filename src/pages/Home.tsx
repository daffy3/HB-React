import { useEffect, useState } from "react";
import axios from "axios";
// Shadcn UI
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "../components/ui/table";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "../components/ui/tooltip";
import { Pagination, PaginationContent, PaginationItem } from "../components/ui/pagination";
// CSS
import styles from "./page.module.scss";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Image } from "lucide-react";

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

function Home() {
    const [data, setData] = useState<TData[]>([]);

    const API_KEY = "TUTlP6w31Z3sjH2VfJmyc9HcydCTgReCnl2dVhRA";
    const API_URL = `https://api.nasa.gov/planetary/apod?start_date=2024-07-02&end_date=2024-07-11&api_key=${API_KEY}`;
    const getData = async () => {
        await axios.get(API_URL).then((res) => {
            console.log(res);
            setData(res.data);
        });
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className={styles.page}>
            <Card className="w-[1200px]">
                <CardHeader>
                    <CardTitle>Get NASA Open API !</CardTitle>
                    <CardDescription>Made by React + Vite</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className={styles.page__container}>
                        <Table className="flex flex-col rounded-md">
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
                                {data.map((item: TData) => {
                                    return (
                                        <TableRow className="cursor-pointer" key={item.title}>
                                            <TableCell className="flex items-center justify-center w-[80px] p-2">
                                                <img src={item.url} alt="image" className="w-12 h-12 rounded-md" />
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
                    </div>
                </CardContent>
                <CardFooter className="flex items-center justify-end w-full">
                    <div className="font-normal mr-10">Page 1 of 2</div>
                    <Pagination className="w-fit mx-0">
                        <PaginationContent>
                            <PaginationItem>
                                <Button variant={"outline"} className="w-9 h-9 p-0">
                                    <ChevronsLeft className="w-4 h-4" />
                                </Button>
                            </PaginationItem>
                            <PaginationItem>
                                <Button variant={"outline"} className="w-9 h-9 p-0">
                                    <ChevronLeft className="w-4 h-4" />
                                </Button>
                            </PaginationItem>
                            <PaginationItem>
                                <Button variant={"outline"} className="w-9 h-9 p-0">
                                    <ChevronRight className="w-4 h-4" />
                                </Button>
                            </PaginationItem>
                            <PaginationItem>
                                <Button variant={"outline"} className="w-9 h-9 p-0">
                                    <ChevronsRight className="w-4 h-4" />
                                </Button>
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </CardFooter>
            </Card>
        </div>
    );
}

export default Home;
