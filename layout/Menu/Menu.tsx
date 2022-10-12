import { useContext } from "react";
import { AppContext } from "../../context/app.context";

import styles from './Menu.module.css';
import cn from "classnames";

import CoursesIcon from './icons/courses.svg';
import BoorsIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';
import ServicesIcon from './icons/services.svg';

import { FirstLevelMenuItem, PageItem } from "../../interfaces/menu.interface";
import { TopLevelCatecory } from "../../interfaces/page.interface";

import Link from "next/link";

const firstLevelMenu: FirstLevelMenuItem[] = [
	{route: 'courses', name: 'Курсы', icon: <CoursesIcon/>, id: TopLevelCatecory.Courses},
	{route: 'services', name: 'Сервисы', icon: <ServicesIcon/>, id: TopLevelCatecory.Services},
	{route: 'books', name: 'Книги', icon: <BoorsIcon/>, id: TopLevelCatecory.Books},
	{route: 'products', name: 'Товары', icon: <ProductsIcon/>, id: TopLevelCatecory.Products}
];

export const Menu = (): JSX.Element => {
	const {menu, firstCategory, setMenu} = useContext(AppContext);
	
	const buildFirstLevel = () => {
		return (
			<>
				{firstLevelMenu.map(m => (
					<div key={m.route}>
						<Link href={`/${m.route}`}>
							<a >
								<div className={cn(styles.firstLevel, {
									[styles.firstLevelActive]: m.id == firstCategory
								})}>
									{m.icon}
									<span>{m.name}</span>
								</div>
							</a>
						</Link>
						{m.id == firstCategory && buildSecondLevel(m)}
					</div>
				))}
			</>
		);
	};

	const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
		return (
			<div className={styles.secondBlock}>
				{menu.map(m => (
					<div key={m._id.secondCategory}>
						<div className={styles.secondLevel}>
							{m._id.secondCategory}
						</div>
						<div className={cn(styles.secondLevelBlock, {
							[styles.secondLevelBlockOpened]: m.isOpened
						})}>
							{buildThirdLevel(m.pages, menuItem.route)}
						</div>
					</div>
				))}
			</div>
		);
	};

	const buildThirdLevel = (pages: PageItem[], route: string) => {
		return (
			pages.map(p => (
				<Link href={`/${route}/${p.alias}`}>
					<a className={cn(styles.thirdLevel, {
							[styles.thirdLevelActive]: false
						})}>
						{p.category}
					</a>
				</Link>
			))
		);
	};

	return (
		<div className={styles.menu}>
			{buildFirstLevel()}
		</div>
	);
};