const { DocumentClient } = require('aws-sdk/clients/dynamodb')
const { TABLE_NAME } = require('../constants')

module.exports.handler = async (event, context) => {
  try {
    const docClient = new DocumentClient()

    const allToDos = await docClient.scan({
      TableName: process.env[TABLE_NAME],
    }).promise()

    return {
      statusCode: 200,
      body: allToDos
    };
  }
  catch (error) {
    return {
      statusCode: 500,
      body: err.message
    };
  }
}