import { KeyboardEvent, useEffect, useState } from "react";
import { RatingProps } from "./Rating.props";
import StarIcon from './star.svg';
import cn from "classnames";
import styles from './Rating.module.css';

export const Rating = ({isEditable = false, rating, setRating, ...props}: RatingProps ): JSX.Element => {
    
    const [ratingArr, setRatingArr] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        createRating(rating);
    }, [rating]);

    const createRating = (current: number) => {
        const updateArr = ratingArr.map((r: JSX.Element, i: number) => {
            return (
                <span 
                    className={cn(styles.star, {
                        [styles.filled]: i < current,
                        [styles.editable]: isEditable
                    })}
                    onMouseEnter={() => changeDisplay(i + 1)}
                    onMouseLeave={() => changeDisplay(rating)}
                    onClick={() => onClick(i + 1)}
                    >
                    <StarIcon 
                        tabIndex={isEditable ? 0 : -1}
                        onKeyDown={(e: KeyboardEvent<SVGElement>) => {
                            isEditable && handleSpace(i + 1, e);
                        }}/>
                </span>
            );
        });
        setRatingArr(updateArr);
    };

    const changeDisplay = (i: number) => {
        if (!isEditable) return;
        createRating(i);
    };

    const onClick = (i: number) => {
        if (!isEditable || !setRating) return;
        setRating(i);
    };

    const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
        if (e.code != 'Space' || !setRating) return;
        setRating(i);
    };

    return (
        <div>
            {ratingArr.map((r, i) => (<span key={i}>{r}</span>))}
        </div>
    );
};