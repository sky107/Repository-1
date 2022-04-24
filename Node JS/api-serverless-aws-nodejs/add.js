'use strict';

module.exports.add = async (event) => {
    let {num1,num2}=JSON.parse(event.body);
    // always parse body

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
       num1:num1,
       num2:num2,
       result:num1+num2
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
