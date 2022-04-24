exports.handler=async (event,context,callback)=>{
    // push or pull
    // push=> s3, api gateway
    // pull => dynamodb, kinessis,sqs

    // context =>  remaining time for millisecond
    // context.functionName()
    // context.functionVersion();
    // context.awsRequestId();
    // context.memoryLimitInMB();
    // context.identity;
    // context.logGroupName;
    // context.logStreamName;
    // context.clientContext......

    // const error=new Error("Failed");
    // callback(error);
    // if using async await, then you can use throw error simply
    // whenever you throw error/ console.log it display in cloudwatch


    // limits
    // MEMory size : 128 mB to 3008MB
    // temp storage to fx => 512 mb
    // timeout => 15mins
    // payload => 6Mb for sync and 128KB for async invocation
    // concurency -> 1000 execution , at at time call 1000  different lambda funcions withing region
    // AWS Lambda prcing 
    // No. of request + time taken  
    // 1million/month is free and 400000GBsecond/mon free generating from all possible lambda fxs
    
    // after that $0.2 + $0......00



    return {
        message:"Good"
    }
    
}
// once you deploy a lambda function associated hooked lambda in api gateway gets automatically triggered


exports.handler = async (event) => {
    // TODO implement
    let name=event?.queryStringParameters?.name;
    let userId=event?.pathParameters?.name
    
    console.log("NAME",name)
    // cors error can also be implemented in gatway settings

    const response = {
        statusCode: 200,
        headers:{
            "Access-Control-Allow-Origin":"*"
        },
        body: JSON.stringify({
            name:name,
            userId:userId
        }),
    };
    return response;
};

// we can always get ready made documentation from consoler
// in swagger or postman format

// api key security configure in console - usage palnce
// x-api-key = asdfaf 
// otherwise you will receive forbidden
// we can also add validator in query/header/body using console
