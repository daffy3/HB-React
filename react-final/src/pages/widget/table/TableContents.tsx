import { TData } from "@/types/table-data";

// COMPONENTS
import { Badge, Button, Table, TableHead, TableBody, TableRow, TableCell, TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components";
import { Image } from "lucide-react";
import styles from "./table-contents.module.scss";

interface Props {
    data: TData[];
}

function TableContents({ data }: Props) {
    return (
        <div className={styles.container}>
            <Table className="flex flex-col rounded-md">
                <div className={styles.container__header}>
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
                                        <p className="font-normal text-xs">이미지</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </TableHead>
                        <TableHead className="font-normal text-sm text-center w-[224px]">Title</TableHead>
                        <TableHead className="font-normal text-sm text-center w-[200px]">Date</TableHead>
                        <TableHead className="font-normal text-sm text-center w-[100px]">
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
                        <TableHead className="font-normal text-sm text-center w-[160px]">Media Type</TableHead>
                        <TableHead className="font-normal text-sm text-center w-[200px]">Copyright</TableHead>
                        <TableHead className="font-normal text-sm text-center w-[160px]">License</TableHead>
                    </TableRow>
                </div>
                <TableBody>
                    {data.map((item: TData) => {
                        return (
                            <TableRow className="cursor-pointer" key={item.title}>
                                <TableCell className="flex items-center justify-center w-[80px] p-2">
                                    <img src={item.url} alt="image" className="w-9 h-9 rounded-md" />
                                </TableCell>
                                <TableCell className="table-cell font-normal text-center w-[224px] p-2">{item.title}</TableCell>
                                <TableCell className="table-cell font-normal text-center w-[200px] p-2">{item.date}</TableCell>
                                <TableCell className="table-cell font-normal text-center w-[100px] p-2">
                                    <Badge variant="outline" className="px-3 py-1 rounded-md">
                                        {item.service_version}
                                    </Badge>
                                </TableCell>
                                <TableCell className="table-cell font-normal text-center w-[160px] p-2">
                                    <Badge variant="outline" className="px-3 py-1 rounded-md">
                                        {item.media_type}
                                    </Badge>
                                </TableCell>
                                <TableCell className="table-cell font-normal text-center w-[200px] p-2">{item.copyright ? item.copyright : "-"}</TableCell>
                                <TableCell className="table-cell font-normal text-center w-[160px] p-2">9Diin</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </div>
    );
}

export default TableContents;
