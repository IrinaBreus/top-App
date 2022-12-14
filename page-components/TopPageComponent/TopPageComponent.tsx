import { Advantages, HhData, Htag, Product, Sort, Tag } from "../../components";
import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from "./TopPageComponent.module.css";
import { TopLevelCatecory } from "../../interfaces/page.interface";
import { SortEnum } from "../../components/Sort/Sort.props";
import { useEffect, useReducer } from "react";
import { sortReducer } from "./sort.reducer";
import { useScrollY } from "../../hooks/useScrollY";

export const TopPageComponent = ({ firstCategory, page, products }:TopPageComponentProps):JSX.Element => {
	
	const [{sort, products: sortedProducts}, dispatchSort] = useReducer(sortReducer, {sort: SortEnum.Rating, products});
	const y = useScrollY();

	const setSort = (sort: SortEnum) => {
		dispatchSort({type: sort});
	};

	useEffect(() => {
		dispatchSort({type: 'reset', initialState: products});
	}, [products]);

	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				<Htag tag="h1">{page.title}</Htag>
				{products && <Tag size="m" color="grey" aria-label={products.length + 'элементов'}>{products.length}</Tag>}
				<Sort sort={sort} setSort={setSort}/>
			</div>
			<div role='list'>
				{sortedProducts && sortedProducts.map(p => (<Product role='listitem' layout product={p} key={p._id}/>))}
			</div>
			<div className={styles.hhTitle}>
				<Htag tag="h2">Вакансии - {page.category}</Htag>
				{products && <Tag size="s" color="red">hh.ru</Tag>}
			</div>
			
			{firstCategory == TopLevelCatecory.Courses && page.hh && <HhData {...page.hh}/>}
			
			{page.advantages && page.advantages.length > 0 && <>
				<Htag tag="h2">Преимущества</Htag>
				<Advantages advantages={page.advantages} />
			</>}
			
			{page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page.seoText}} />}
			
            <Htag tag='h2'>Получаемые навыки</Htag>
            {page.tags.map(t => (
				<Tag size="s" color="primary" key={t}>{t}</Tag>
				))}
		</div>
	);
};