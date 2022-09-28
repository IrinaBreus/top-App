import React, { useState } from "react";
import { Button, Htag, P, Rating, Tag } from "../components";
import { withLayout } from "../layout/Layout";



function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(0);
  return (
    < >
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
    </>
  );
}

export default withLayout(Home);