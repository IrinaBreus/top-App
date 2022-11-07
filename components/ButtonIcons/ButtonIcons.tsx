import { ButtonIconsProps, icons } from "./ButtonIcons.props";
import cn from "classnames";
import styles from './ButtonIcons.module.css';

export const ButtonIcon = ({color, icon, className, ...props}: ButtonIconsProps): JSX.Element => {

    const IconComp = icons[icon];

    return (
        <button 
            className={cn(styles.button, className, {
                [styles.primary]: color == 'primary',
                [styles.white]: color == 'white'
            })}  
            {...props}  
        >
            <IconComp/>
        </button>
    );
};