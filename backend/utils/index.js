const axios = require('axios');
const BASE = 'https://api.airtable.com/v0/';
const DB = 'app2R8cRirkeFZY8R';


function buildRequestUrl(table, params, get = false) {
    let query = '?';
    params && Object.keys(params).forEach((key) => {
        if (key != 'table' || key != 'agregations') {
            query += `${key}=${params[key]}`;
        }
    });
    return `${BASE}${DB}/${table}${get ? query : ''}`;
}

function buildRequest(apiKey, method, url, params) {
    axios.defaults.headers['Authorization'] = `Bearer ${apiKey}`;
    return axios[method](encodeURI(url), params);
}

exports.buildRequest = buildRequest;
exports.buildRequestUrl = buildRequestUrl;