import handler from '../util/handler';
import dynamoDb from '../util/dynamodb';

export const main = handler(async () => {
  const result = await dynamoDb.query({
    TableName: process.env.TABLE_NAME,
    KeyConditionExpression: 'userId = :userId',
    ExpressionAttributeValues: {
      ':userId': '123',
    },
  });

  return result.Items;
});
