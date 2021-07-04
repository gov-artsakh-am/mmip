const axios = require('axios');
const BASE = 'https://api.airtable.com/v0/';
const DB = 'app2R8cRirkeFZY8R';


function buildRequestUrl(table, params, get = false) {
    let query = '?';
    params && Object.keys(params).forEach((key) => {
        if (key != 'table') {
            query += `${key}=${params[key]}`;
        }
    });
    return `${BASE}${DB}/${table}${get ? query : ''}`;
}

function buildRequest(apiKey, method, url, params, res) {
    axios.defaults.headers['Authorization'] = `Bearer ${apiKey}`;
    axios[method](encodeURI(url), params).then(({ data }) => {
        res.status(200).json(data);
    }).catch(error => {
        res.status(400).end(error.message);
    });
}

exports.post = function (req, res) {
    const table = req.body.table;
    const apiKey = req.apiKey;
    const url = buildRequestUrl(table, req.body);
    buildRequest(apiKey, 'post', url, req.body, res);
};
exports.get = function (req, res) {
    const table = req.query.table;
    const apiKey = req.apiKey;
    const url = buildRequestUrl(table, req.query, true);
    buildRequest(apiKey, 'get', url, req.query, res);
};
exports.update = function (req, res) {
    const table = req.body.table;
    const apiKey = req.apiKey;
    const url = buildRequestUrl(table, req.body);
    buildRequest(apiKey, 'put', url, req.body, res);
};
exports.delete = function (req, res) {
    const table = req.query.table;
    const ids = req.query.ids;
    const apiKey = req.apiKey;
    const url = buildRequestUrl(table);
    buildRequest(apiKey, 'delete', url, ids, res);
};