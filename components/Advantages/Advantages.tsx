import React from "react";
import { AdvantagesProps } from "./Advantages.props";
import styles from './Advantages.module.css';
import CheckIcon from './check.svg';
import { Htag } from "../Htag/Htag";
import { P } from "../P/P";

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
    return (
        <div className={styles.advantageWrapper}>
            {advantages.map(a => (
                <div key={a._id} className={styles.block}>
                    <div className={styles.icon}>
                        <CheckIcon/>
                    </div>
                    <Htag tag="h3">{a.title}</Htag>
                    <div className={styles.divider}></div>
                    <P size="l">{a.description}</P>
                </div>
            ))}
        </div>
    );
};