import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface SortPrors extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    sort: SortEnum;
    setSort: (sort: SortEnum) => void;
}

export enum SortEnum {
    Price,
    Rating
}