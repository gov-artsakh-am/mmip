const jwt = require('jsonwebtoken');
const md5 = require('md5');

const config = require('../config/auth.config');
const utils = require('../utils');
const apiKey = 'keyorpixGaKGRLY3u';


exports.signin = (req, res) => {
  let url = utils.buildRequestUrl('Users');
  url += `?filterByFormula=({ssn} ='${req.body.ssn}')`;
  utils.buildRequest(apiKey, 'get', url).then(({ data }) => {
    if (!data.records[0]) {
      return res.status(404).send({ message: "User Not found." });
    }
    const user = data.records[0].fields;
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      const passwordIsValid = md5(req.body.password) === user.password;

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      const token = jwt.sign({ id: user.id, apiKey: user.apiKey }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      res.status(200).send({
        id: user.id,
        ssn: user.ssn,
        name: ((user.name || '') + ' ' + (user.surname || '')).trim(),
        role: user.role,
        accessToken: token
      });
  })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};