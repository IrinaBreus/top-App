import styles from './Search.module.css';
import cn from 'classnames';

import { SearchProps } from './Search.props';
import GlassIcon from './glass.svg';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { KeyboardEvent, useState } from 'react';
import { useRouter } from 'next/router';

export const Search = ({ className, ...props }:SearchProps ):JSX.Element => {
    
    const [search, setSearch] = useState<string>('');

    const router = useRouter();

    const goToSearch = () => {
        router.push({
            pathname: '/search',
            query: {
                q: search
            }
        });
    };

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.code == 'Enter') {
            goToSearch();
        }
    };

    return (
        <form className={cn(styles.search, className)} {...props} role="search">
            <Input
                placeholder='Поиск...'
                className={styles.input}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyDown}/>
            <Button 
                    appearance='primary'
                    className={styles.button}
                    onClick={goToSearch}
                    aria-label='Искать по сайту'>
                <GlassIcon/>
            </Button>
        </form>
    );
};