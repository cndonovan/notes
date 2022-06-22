import handler from '../util/handler';
import dynamoDb from '../util/dynamodb';

export const main = handler(async (req) => {
  const userId = req.requestContext.authorizer.iam.cognitoIdentity.identityId;

  const result = await dynamoDb.query({
    TableName: process.env.TABLE_NAME,
    KeyConditionExpression: 'userId = :userId',
    ExpressionAttributeValues: {
      ':userId': userId,
    },
  });

  return result.Items;
});
