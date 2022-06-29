exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify('Test GitHub webhook. Hello from Lambda with CI/CD!'),
  };
};
