import { ReviewProps } from "./Review.props";
import styles from './Review.module.css';
import cn from "classnames";

import UserIcon from './user.svg';
import { Rating } from "../Rating/Rating";

export const Review = ({ review, className, ...props}: ReviewProps ):JSX.Element => {
    
    const { name, title, description, rating, createdAt } = review;
    const date = new Date(createdAt);
    const month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

    return (
        <div className={cn(styles.review, className)} {...props}>
            <UserIcon className={styles.user}/>
            <div className={styles.title}>
                <span className={styles.name}>{name}: </span>&nbsp;
                <span>{title}</span>
            </div>
            <div className={styles.date}>
                {`${date.getDate()} ${month[date.getMonth() - 1]} ${date.getFullYear()}`}
            </div>
            <div className={styles.rating}>
                <Rating rating={rating}/>
            </div>
            <div className={styles.description}>
                {description}
            </div>
        </div>
    );
};