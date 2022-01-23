const pkg = require("../../package.json");
const axios = require("axios");
const qs = require("qs");

class Client {
  constructor(options = {}) {
    this.accessToken = options.accessToken;
    this.webhookToken = options.webhookToken;
    this.version = pkg.version;

    this.http = axios.create({
      withCredentials: false,
      baseURL: "https://www.wrike.com/api/v4",
      headers: {
        common: {
          'Authorization': 'bearer ' + this.accessToken
        }
      },
      paramsSerializer: params => {
        return qs.stringify(params)
      }
    });
  }

  async get(url, params = {}) {
    const { data } = await this.http.get(url, { ...params });
    return data;
  }

  async post(url, params = {}) {
    const { data } = await this.http.post(url, params);
    return data;
  }

  async put(url, params = {}) {
    const { data } = await this.http.put(url, params);
    return data;
  }

  async delete(url, params = {}) {
    const { data } = await this.http.delete(url, params);
    return data;
  }
}

module.exports = Client;