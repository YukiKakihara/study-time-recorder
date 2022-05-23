import type { NextPage } from 'next';
import { formatDate } from 'utils/formatDate';
import { Root } from 'templates/Root';

const Page: NextPage = () => {
  return <Root />;
};

// const onClick = () => {
//   const apiPath = '/api/add_memo';
//   fetch(apiPath, {
//     body: JSON.stringify({
//       date: formatDate(new Date()),
//       title: 'onClickテスト',
//     }),
//     method: 'POST',
//   });
// };

export default Page;
