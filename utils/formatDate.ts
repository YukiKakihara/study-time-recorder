// Notion API 側のバグによって timezone 設定が上手くいかないとの噂.
// パッチとして現状ぼ Notion API にとって都合の良いように良い感じに date を format し直す関数を作る.
// cf. https://www.hanatare-papa.jp/entry/technology-notion-1_3

export const formatDate = (rawDate: Date): string => {
  const year = rawDate.getFullYear();
  const month = zeroPadding(rawDate.getMonth() + 1);
  const date = zeroPadding(rawDate.getDate());
  const hour = zeroPadding(rawDate.getHours());
  const minute = zeroPadding(rawDate.getMinutes());
  const second = zeroPadding(rawDate.getSeconds());

  return `${year}-${month}-${date}T${hour}:${minute}:${second}.000+09:00`;
};

const zeroPadding = (num: number): string => {
  return `00${num}`.slice(-2);
};
