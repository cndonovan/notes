import handler from '../util/handler';
import dynamoDb from '../util/dynamodb';

export const main = handler(async (event) => {
  const userId = '123';
  const noteId = event.pathParameters.id;

  const result = await dynamoDb.get({
    TableName: process.env.TABLE_NAME,
    Key: {
      userId,
      noteId,
    },
  });

  if (!result.Item) {
    throw new Error('Item not found.');
  }

  return result.Item;
});
