import type { NextApiRequest, NextApiResponse } from 'next';
import { Client } from '@notionhq/client';
import { CreatePageResponse } from '@notionhq/client/build/src/api-endpoints';
import { formatDate } from 'utils/formatDate';

type ResponseBody = {
  body: CreatePageResponse;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseBody>
) {
  const notion = new Client({ auth: process.env.NOTION_KEY });
  const databaseId = process.env.NOTION_DATABASE_ID || '';
  const datePropertyKey = '%3B%3E_~';

  const add = async (date: string, text: string) =>
    await notion.pages.create({
      parent: { database_id: databaseId, type: 'database_id' },
      properties: {
        [datePropertyKey]: {
          date: { end: null, start: date },
          type: 'date',
        },
        title: {
          title: [
            {
              text: {
                content: text,
              },
            },
          ],
          type: 'title',
        },
      },
    });

  const response = await add(formatDate(new Date()), 'テスト');

  res.status(200).json({ body: response });
}
