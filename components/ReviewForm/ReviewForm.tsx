import { ReviewFormProps } from "./ReviewForm.props";
import styles from './ReviewForm.module.css';
import cn from "classnames";
import { Input } from "../Input/Input";
import { Rating } from "../Rating/Rating";
import { Textarea } from "../Textarea/Textarea";
import { Button } from "../Button/Button";

import CloseIcon from './close.svg';
import { Controller, useForm } from "react-hook-form";
import { IReviewForm, IReviewSentResponse } from "./ReviewForm.interface";
import axios from "axios";
import { API } from "../../helpers/api";
import { useState } from "react";

export const ReviewForm = ({ productId, isOpened, className, ...props}: ReviewFormProps): JSX.Element => {

    const { register, control, handleSubmit, formState: {errors}, reset } = useForm<IReviewForm>();
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [error, setError] = useState<string>();
    
    const onSubmit = async (formData: IReviewForm) => {
        try {
            const {data} = await axios.post<IReviewSentResponse>(API.review.createDemo, {...formData, productId});
            if (data.message) {
                setIsSuccess(true);
                reset();
            } else {
                setError('Что-то пошло не так');
            }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
            setError(e.message);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={cn(styles.reviewForm, className)} {...props}>
                <Input 
                    {...register('name', 
                        {required: 
                            {value: true, message: "Введите имя"}})}
                    className={styles.input} 
                    placeholder="Имя"
                    tabIndex={isOpened ? 0 : -1}
                    error={errors.name} />
                <Input 
                    {...register('title', {
                        required: {
                            value: true,
                            message: 'Введите название'
                        }
                    })} 
                    className={styles.input} 
                    placeholder="Заголовок отзыва"
                    tabIndex={isOpened ? 0 : -1}
                    error={errors.title}/>
                <div className={styles.rating}>
                    <span>Оценка:</span> 
                    <Controller 
                        control={control}
                        name='rating'
                        rules={{required: 
                            {value: true, message: "Поставьте Вашу оценку"}}}
                        render={({ field }) => (
                            <Rating    
                                isEditable 
                                rating={field.value} 
                                ref={field.ref} 
                                setRating={field.onChange} 
                                error={errors.rating} 
                                tabIndex={isOpened ? 0 : -1}
                            />
                        )}
                    />
                </div>
                <Textarea 
                    {...register('description', {
                        required: {
                            value:true,
                            message: "Введите сообщение"
                        }
                    })} 
                    placeholder="Текст отзыва"
                    tabIndex={isOpened ? 0 : -1}
                    className={styles.description}
                    error={errors.description}/>
                <div className={styles.submit}>
                    <Button appearance="primary" className={styles.button} tabIndex={isOpened ? 0 : -1}>Отправить</Button>
                    <span className={styles.info}> 
                        * Перед публикацией отзыв пройдет предварительную модерацию и проверку
                    </span>
                </div>
            </div>
            {isSuccess && <div className={cn(styles.panel, styles.success)} >
                <div className={styles.successTitle}>Ваш отзыв отправлен</div>
                <div>Спасибо, Ваш отзыв будет опубликован после проверки</div>
                <CloseIcon className={styles.closed} onClick={() => setIsSuccess(false)}/>
            </div>}

            {error && <div className={cn(styles.panel, styles.error)} >
                Что-то пошло не так, попробуйте обновить страницу
                <CloseIcon className={styles.closed} onClick={() => setError(undefined)}/>
            </div>}
        </form>
    );
};