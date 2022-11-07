import cn from "classnames";
import { KeyboardEvent } from "react";
import styles from './Sort.module.css';
import { SortEnum, SortPrors } from "./Sort.props";

import SortIcon from './sort.svg';

export const Sort = ({sort, setSort, className, ...props}: SortPrors): JSX.Element => {
    
    return (
        <div className={cn(styles.sort, className)} {...props}>
            <button 
                onClick={() => setSort(SortEnum.Rating)}
                className={cn({
                    [styles.active]: sort == SortEnum.Rating
                })}>
                <SortIcon className={cn(styles.sortIcon)}/>По рейтингу 
            </button>
            <button 
                onClick={() => setSort(SortEnum.Price)}
                className={cn({
                    [styles.active]: sort == SortEnum.Price
                })}>
                <SortIcon className={cn(styles.sortIcon)}/>По цене
            </button>
        </div>
    );
};
