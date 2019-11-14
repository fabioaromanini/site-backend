'use strict';

exports.get = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello, the current time is ${new Date().toTimeString()}.`,
    }),
  };
};
