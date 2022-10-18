import { Advantages, HhData, Htag, P, Tag } from "../../components";
import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from "./TopPageComponent.module.css";
import { TopLevelCatecory } from "../../interfaces/page.interface";

export const TopPageComponent = ({ firstCategory, page, products }:TopPageComponentProps):JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				<Htag tag="h1">{page.title}</Htag>
				{products && <Tag size="m" color="grey">{products.length}</Tag>}
				<div>Сортировка</div>
			</div>
			<div>
				{products && products.map(p => (<div key={p._id}>{p.title}</div>))}
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