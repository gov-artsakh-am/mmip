const utils = require('../utils');

function buildRequest(apiKey, method, url, params, res) {
    utils.buildRequest(apiKey, method, url, params).then(({ data }) => {
        res.status(200).json(data);
    }).catch(error => {
        res.status(400).end(error.message);
    });
}

exports.post = function (req, res) {
    const table = req.body.table;
    const apiKey = req.apiKey;
    const url = utils.buildRequestUrl(table, req.body);
    buildRequest(apiKey, 'post', url, req.body, res);
};
exports.get = function (req, res) {
    const table = req.query.table;
    const apiKey = req.apiKey;
    const url = utils.buildRequestUrl(table, req.query, true);
    buildRequest(apiKey, 'get', url, req.query, res);
};
exports.update = function (req, res) {
    const table = req.body.table;
    const apiKey = req.apiKey;
    const url = utils.buildRequestUrl(table, req.body);
    buildRequest(apiKey, 'put', url, req.body, res);
};
exports.delete = function (req, res) {
    const table = req.query.table;
    const ids = req.query.ids;
    const apiKey = req.apiKey;
    const url = utils.buildRequestUrl(table);
    buildRequest(apiKey, 'delete', url, ids, res);
};