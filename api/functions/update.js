import handler from '../util/handler';
import dynamoDb from '../util/dynamodb';

export const main = handler(async (req) => {
  const userId = req.requestContext.authorizer.iam.cognitoIdentity.identityId;
  const noteId = req.pathParameters.id;
  const { content, attachment } = JSON.parse(req.body);

  await dynamoDb.update({
    TableName: process.env.TABLE_NAME,
    Key: {
      userId,
      noteId,
    },
    UpdateExpression: 'SET content = :content, attachment = :attachment',
    ExpressionAttributeValues: {
      ':attachment': attachment || null,
      ':content': content || null,
    },
    ReturnValues: 'ALL_NEW',
  });

  return { status: true };
});
