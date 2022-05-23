import type { NextPage } from 'next';

const Page: NextPage = () => {
  return (
    <>
      <div>NOTION_KEY：{process.env.NOTION_KEY}</div>
      <div>NOTION_DATABASE_ID：{process.env.NOTION_DATABASE_ID}</div>
    </>
  );
};

export default Page;
