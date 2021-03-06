import handler from '../util/handler';
import dynamoDb from '../util/dynamodb';

export const main = handler(async (req) => {
  const userId = req.requestContext.authorizer.iam.cognitoIdentity.identityId;
  const noteId = req.pathParameters.id;

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
