import CoursesIcon from './icons/courses.svg';
import BoorsIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';
import ServicesIcon from './icons/services.svg';


import { FirstLevelMenuItem } from '../interfaces/menu.interface';
import { TopLevelCatecory } from '../interfaces/page.interface';

export const firstLevelMenu: FirstLevelMenuItem[] = [
	{route: 'courses', name: 'Курсы', icon: <CoursesIcon/>, id: TopLevelCatecory.Courses},
	{route: 'services', name: 'Сервисы', icon: <ServicesIcon/>, id: TopLevelCatecory.Services},
	{route: 'books', name: 'Книги', icon: <BoorsIcon/>, id: TopLevelCatecory.Books},
	{route: 'products', name: 'Товары', icon: <ProductsIcon/>, id: TopLevelCatecory.Products}
];

export const priceRu = (price:number): string => {
	return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' ₽');
};