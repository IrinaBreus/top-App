import { Button, Htag, P, Tag } from "../components";


export default function Home(): JSX.Element {
  return (
    <div >
      <Htag tag='h1'>Курсы по Photoshop</Htag>
      <Button appearance="primary" arrow="right">Кнопка</Button>
      <Button appearance="ghost" arrow="down">Кнопка</Button>
      <P size="l">sdfslkjfslkdfsldkf</P>
      <P size="m">sdfslkjfslkdfsldkf</P>
      <P size="s">sdfslkjfslkdfsldkf</P>
      <Tag size="s">ghost</Tag>
      <Tag size="m" color="green">green</Tag>
      <Tag size="s" color="primary">primary</Tag>
      <Tag size="m" color="red">ghost</Tag>
    </div>
  );
}