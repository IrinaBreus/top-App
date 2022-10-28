import axios from 'axios';
import { GetStaticProps } from "next";
import React, { useState } from "react";
import { Button, Htag, Input, P, Rating, Tag, Textarea } from "../components";
import { API } from '../helpers/api';
import { MenuItem } from '../interfaces/menu.interface';
import { withLayout } from "../layout/Layout";



function Home({menu, firstCategory}: HomeProps): JSX.Element {
	const [rating, setRating] = useState<number>(0);
	return (
		<>
			<Htag tag='h1'>Заголовок</Htag>
			<Button appearance="primary" arrow="right" >Кнопка</Button>
			<Button appearance="ghost" arrow="down">Кнопка</Button>
			<P size="l">Большой</P>
			<P size="m">основной</P>
			<P size="s">маленький</P>
			<Tag size="s">ghost</Tag>
			<Tag size="m" color="green">green</Tag>
			<Tag size="s" color="primary">primary</Tag>
			<Tag size="m" color="red">ghost</Tag>
			<Rating rating={rating} isEditable setRating={setRating}/>
			<Input placeholder='Имя'/>
			<Textarea placeholder='Текст отзыва'/>
		</>
	);
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
	const firstCategory = 0;

	const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
		firstCategory
	});
	return {
		props: {
			menu,
			firstCategory
		}
	};
};

interface HomeProps extends Record<string, unknown>{
	menu: MenuItem[],
	firstCategory: number
}