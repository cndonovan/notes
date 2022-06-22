import handler from '../util/handler';
import dynamoDb from '../util/dynamodb';

export const main = handler(async (req) => {
  const userId = req.requestContext.authorizer.iam.cognitoIdentity.identityId;
  const noteId = req.pathParameters.id;

  await dynamoDb.delete({
    TableName: process.env.TABLE_NAME,
    Key: {
      userId,
      noteId,
    },
  });

  return { status: true };
});
