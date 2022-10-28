import styles from './Product.module.css';
import cn from 'classnames';

import { Card } from "../Card/Card";
import { ProductProps } from "./Product.props";
import { Rating } from "../Rating/Rating";
import { Tag } from "../Tag/Tag";
import { Button } from "../Button/Button";
import { Htag } from "../Htag/Htag";
import { declOfNum, priceRu } from "../../helpers/helpers";
import { Divider } from "../Divider/Divider"; 
import Image from "next/image";
import { useRef, useState } from 'react';
import { Review } from '../Review/Review';
import { ReviewForm } from '../ReviewForm/ReviewForm';

export const Product = ({product, className, ...props}: ProductProps):JSX.Element => {

    const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);

    const reviewRef = useRef<HTMLDivElement>(null);

    const scrollToRef = () => {
        setIsReviewOpened(true);
        reviewRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    };

    return (
        <div className={className} {...props}>
            <Card className={styles.product}>
                <div className={styles.logo}>
                    <Image 
                        src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
                        alt={product.title}
                        width={70}
                        height={70}
                    />
                </div>
                <div className={styles.title}><Htag tag="h3">{product.title}</Htag></div>
                <div className={styles.price}>
                    {priceRu(product.price)}  
                    {product.oldPrice && <Tag color='green' className={styles.oldPrice}>{priceRu(product.price - product.oldPrice)}</Tag>}
                </div>
                <div className={styles.credit}>
                    {priceRu(product.credit)}<span className={styles.month}>/мес</span>
                </div>
                <div className={styles.rating}><Rating rating={product.reviewAvg ?? product.initialRating}/> </div>
                <div className={styles.tags}>{product.categories.map(c => <Tag color='ghost' className={styles.categories}>{c}</Tag>)}</div>
                <div className={styles.priceTitle}>цена</div>
                <div className={styles.creditTitle}>в кредит</div>
                <div className={styles.ratingTitle}><a href='#ref' onClick={scrollToRef}>{product.reviewCount} {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}</a></div>
                <Divider className={styles.hr} />
                <div className={styles.description}>{product.description}</div>
                <div className={styles.feature}>
                    {product.characteristics.map(c => (
                        <div className={styles.characteristic} key={c.name}>
                            <span className={styles.characteristicName}>{c.name}</span>
                            <span className={styles.characteristicDots}></span>
                            <span className={styles.characteristicValue}>{c.value}</span>
                        </div>
                    ))}
                </div>
                <div className={styles.advBlock}>
                    {product.advantages && <div className={styles.advantages}>
                        <div className={styles.advTitle}>Преимущества</div>
                        <div>{product.advantages}</div>
                    </div>}
                    {product.disadvantages && <div className={styles.disadvantages}>
                        <div className={styles.advTitle}>Недостатки</div>
                        <div>{product.disadvantages}</div>
                    </div>}
                </div>
                <Divider className={cn(styles.hr, styles.hr2)}/>
                <div className={styles.actions}>
                    <Button appearance='primary'>Узнать подробнее</Button>
                    <Button 
                        appearance='ghost' 
                        arrow={isReviewOpened ? 'down' : 'right'} 
                        className={styles.reviewButton}
                        onClick={() => setIsReviewOpened(!isReviewOpened)}
                    >Читать отзывы</Button>
                </div>
            </Card>
            <Card color='blue' className={cn(styles.reviews, {
                [styles.opened]: isReviewOpened,
                [styles.closed]: !isReviewOpened,
            })} ref={reviewRef}>
                {product.reviews.map(r => (
                    <div key={r._id} >
                        <Review review={r} />
                        <Divider />
                    </div>
                ))}
                <ReviewForm productId={product._id}/>
            </Card>
        </div>
    );
};