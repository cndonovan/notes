import * as uuid from 'uuid';
import handler from '../util/handler';
import dynamoDb from '../util/dynamodb';

export const main = handler(async (req) => {
  const userId = req.requestContext.authorizer.iam.cognitoIdentity.identityId;
  const { content, attachment } = JSON.parse(req.body);

  const Item = {
    userId,
    noteId: uuid.v1(),
    content,
    attachment,
    createdAt: Date.now(),
  };

  await dynamoDb.put({
    TableName: process.env.TABLE_NAME,
    Item,
  });

  return Item;
});
