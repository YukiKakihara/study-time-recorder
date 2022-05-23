import type { NextApiRequest, NextApiResponse } from 'next';
import { Client } from '@notionhq/client';
import { CreatePageResponse } from '@notionhq/client/build/src/api-endpoints';

export type RequestBody = {
  date: string;
  title: string;
};

type ResponseBody = {
  body: CreatePageResponse;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseBody>
) {
  if (req.method !== 'POST') {
    res.status(404).end();
  }

  const reqBody: RequestBody = JSON.parse(req.body);
  const { date, title } = reqBody;

  const notion: Client = new Client({ auth: process.env.NOTION_KEY });
  const databaseId: string = process.env.NOTION_DATABASE_ID || '';
  const datePropertyKey: string = '%3B%3E_~';

  const response: CreatePageResponse = await notion.pages.create({
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
              content: title,
            },
          },
        ],
        type: 'title',
      },
    },
  });

  res.status(200).json({ body: response });
}
