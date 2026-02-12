const config = {
  local: {
    url: "http://localhost:3000/",
    apiUrl: "http://localhost:8000/api/tecosoft-admin/",
    adminUrl: "http://localhost:3033/",

  },
  staging: {
    url: "http://localhost:3000/",
    apiUrl: "http://localhost:7001/api/tecosoft-admin/",
    // apiUrl: "https://crr2m74m-7001.inc1.devtunnels.ms/api/tecosoft-admin/",
    adminUrl: "http://localhost:3033/",
  },
  production: {
    url: "https://www.tecosoft.ai/",
    apiUrl: "https://api.tecosoft.ai/api/tecosoft-admin/",
    adminUrl: "https://admin.tecosoft.ai/",
  },
};

const environment = "production"; // Change this to 'local', 'staging', or 'production' as needed

const hostConfig = {
  WEB_URL: config[environment].url,
  API_URL: config[environment].apiUrl,
  intervals: 500,
};

const intervals = {
  reload: 1500,
};

export { hostConfig, intervals };
