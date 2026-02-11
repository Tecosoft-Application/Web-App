const config = {
  local: {
    url: "http://localhost:3000/",
    apiUrl: "http://localhost:8000/api/tecosoft-admin/",
    adminUrl: "http://localhost:3033/",

  },
  staging: {
    url: "http://localhost:3000/",
    apiUrl: "http://localhost:7001/api/tecosoft-admin/",
    adminUrl: "http://localhost:3033/",
  },
  production: {
    url: "https://www.tecosoft.ai/",
    apiUrl: "http://api.tecosoft.ai/",
    adminUrl: "http://admin.tecosoft.ai/",
  },
};

const environment = "staging";

const hostConfig = {
  WEB_URL: config[environment].url,
  API_URL: config[environment].apiUrl,
  intervals: 500,
};

const intervals = {
  reload: 1500,
};

export { hostConfig, intervals };
