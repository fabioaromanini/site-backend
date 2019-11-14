'use strict';
const { DynamoDB } = require('aws-sdk');

const dynamodbClient = new DynamoDB.DocumentClient();
const { PROJECTS_DYNAMO_DB_TABLE } = process.env;

exports.get = async (event, context) => {
  const response = await dynamodbClient
    .scan({ TableName: PROJECTS_DYNAMO_DB_TABLE })
    .promise();

  return {
    statusCode: 200,
    body: JSON.stringify(response.Items),
  };
};
