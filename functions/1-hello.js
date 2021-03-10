// domain/.netlify/functions/1-hello

// exports function name should be handler

// event has usefull information about the request

exports.handler = async (event, context) => {
  //   console.log(event, context);

  return {
    statusCode: 200,
    body: "Our First Netlify Function Example", // always return the string only
  };
};

// in case of not using async alternative is using callback

// exports.handler = (event, context, cb) => {
//   cb(null, {
//     statusCode: 200,
//     body: "Hello world!",
//   });
// };
