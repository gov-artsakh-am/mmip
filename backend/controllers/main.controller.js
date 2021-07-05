const utils = require('../utils');

function buildRequest(apiKey, method, url, params, res) {
    utils.buildRequest(apiKey, method, url, params).then(({ data }) => {
        res.status(200).json(data);
    }).catch(error => {
        res.status(400).end(error.message);
    });
}

async function getPropertyData(apiKey, table) {
    const currentUrl = utils.buildRequestUrl(table, null, true);
    return await utils.buildRequest(apiKey, 'get', currentUrl, null)
}

exports.post = function (req, res) {
    const table = req.body.table;
    const apiKey = req.apiKey;
    const url = utils.buildRequestUrl(table, req.body);
    buildRequest(apiKey, 'post', url, req.body, res);
};
exports.get = async function(req, res) {
    const table = req.query.table;
    const apiKey = req.apiKey;
    const agregations = JSON.parse(req.query.agregations);
    try {
        let ags = await Promise.all(agregations.map(async (relation) => {
            const value = await getPropertyData(apiKey, relation.table);
            return { key : relation.field, value: value.data.records };
        }));
        const url = utils.buildRequestUrl(table, req.query, true);
        utils.buildRequest(apiKey, 'get', url, null).then(({ data }) => {
            data.records.map((record) => {
                ags.forEach((agregation) => {
                    if (record.fields[agregation.key]) {
                        record.fields[agregation.key] = record.fields[agregation.key].map((refId) => {
                            const current = agregation.value.find(({ id }) => id == refId);
                            return current ? current.fields : null;
                        }).filter((item) => item);
                    }
                });
                return record;
            })
            res.status(200).json(data);
        }).catch(error => {
            res.status(400).json({ message: error.message });
        });
    } catch(e) {
        console.log(e)
        res.status(400).json({ message: e });
    }
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