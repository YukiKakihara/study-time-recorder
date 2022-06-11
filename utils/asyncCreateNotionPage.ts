import { Client } from '@notionhq/client';

export const asyncCreateNotionPage = async (
  date: string,
  title: string
): Promise<any> => {
  const notion: Client = new Client({ auth: process.env.NOTION_KEY });
  const databaseId: string = process.env.NOTION_DATABASE_ID || '';
  const datePropertyKey: string = '%3B%3E_~';

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
              content: title,
            },
          },
        ],
        type: 'title',
      },
    },
  });
};
