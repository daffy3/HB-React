import { useState, useEffect } from "react";
import { TData } from "@/types/table-data";
import axios from "axios";

// COMPONENTS
import { Button, Card, CardHeader, CardTitle, CardDescription, CardFooter, Pagination, PaginationContent, PaginationItem } from "@/components";
import { ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from "lucide-react";
import TableContents from "./TableContents";
import styles from "./table.module.scss";

function Table() {
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
        <Card>
            <CardHeader>
                <CardTitle className={styles.title}>Get NASA Open API !</CardTitle>
                <CardDescription className={styles.desc}>Made by React + Vite</CardDescription>
            </CardHeader>
            <div className={styles.table__contents}>
                <TableContents data={data} />
            </div>
            <CardFooter className="flex items-center justify-end w-full">
                <div className={styles[`table__footer__page-count`]}>Page 1 of 2</div>
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
    );
}

export { Table };
