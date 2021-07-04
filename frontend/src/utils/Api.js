/* eslint-disable class-methods-use-this */
import axios from 'axios';

axios.defaults.baseURL = 'https://api.airtable.com/v0/';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

/// TODO: change api key to user api
const API_KEY = 'keyorpixGaKGRLY3up';

class Api {
  constructor() {
    this.instance = axios.create();
    this.instance.defaults.timeout = 2500;
  }

  queryParams(params, get = false) {
    let query = '?';
    if (get && params) {
      Object.keys(params).forEach((key) => {
        query += `${key}=${params[key]}&`;
      });
    }
    query += `api_key=${API_KEY}`;
    return query;
  }

  successCallback(data) {
    // eslint-disable-next-line no-console
    console.log(data);
  }

  errorCallback(error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }

  buildRequest(method, url, params, success = this.successCallback, error = this.errorCallback) {
    axios[method](url, params).then(({ data }) => success(data)).catch(error);
  }

  get(url, params, success, error) {
    const query = this.queryParams(params);
    this.buildRequest('get', url + query, null, success, error);
  }

  post(url, params, success, error) {
    const query = this.queryParams(params);
    this.buildRequest('post', url + query, params, success, error);
  }

  delete(url, params, success, error) {
    const query = this.queryParams(params);
    this.buildRequest('delete', url + query, null, success, error);
  }
}

const api = new Api();
export default api;
