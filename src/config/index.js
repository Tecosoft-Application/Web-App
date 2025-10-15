const config = {
  production: {
    url: "",
    apiUrl: "",
    bucketName: "",
    AWS_REGION: "ap-southeast-1",
    COGNITO_REGION: "ap-south-1",
    COGITO_IDENTITY_POOL_ID: process.env.NEXT_PUBLIC_COGNITO_IDENTITY_POOL_ID,
  },
  development: {
    url: "",
    apiUrl: "",
    bucketName: "",
    AWS_REGION: "ap-southeast-1",
    COGNITO_REGION: "ap-southeast-1",
    COGITO_IDENTITY_POOL_ID: process.env.NEXT_PUBLIC_COGNITO_IDENTITY_POOL_ID,
  },
  local: {
    url: "http://localhost:3000/",
    apiUrl: "http://localhost:7001/dev/",
    bucketName: "",
    AWS_REGION: "ap-southeast-1",
    COGNITO_REGION: "ap-southeast-1",
    COGITO_IDENTITY_POOL_ID: process.env.NEXT_PUBLIC_COGNITO_IDENTITY_POOL_ID,
  },
};

const environment = "local";

const hostConfig = {
  WEB_URL: config[environment].url,
  IMAGE_URL: `https://${config[environment].bucketName}.s3.amazonaws.com`,
  IMAGE_URL1: `https://${config[environment].bucketName}.s3.${config[environment].AWS_REGION}.amazonaws.com`,
  API_URL: config[environment].apiUrl,
  S3_BUCKET: `${config[environment].bucketName}`,
  intervals: 500,
  COGNITO_REGION: `${config[environment].COGNITO_REGION}`,
  COGITO_IDENTITY_POOL_ID: `${config[environment].COGITO_IDENTITY_POOL_ID}`,
};

const intervals = {
  reload: 1500,
};

export { hostConfig, intervals };
