import type { NextPage } from 'next';
import { formatDate } from 'utils/formatDate';

const Page: NextPage = () => {
  return (
    <>
      <div>NOTION_KEY：{process.env.NOTION_KEY}</div>
      <div>NOTION_DATABASE_ID：{process.env.NOTION_DATABASE_ID}</div>
      <button onClick={onClick}>click</button>
    </>
  );
};

const onClick = () => {
  fetch('/api/add_memo', {
    body: JSON.stringify({
      date: formatDate(new Date()),
      title: 'onClickテスト',
    }),
    method: 'POST',
  });
};

export default Page;
