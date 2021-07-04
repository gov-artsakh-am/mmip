module.exports = {
    HOST: "localhost",
    USER: "david",
    PASSWORD: "david",
    DB: "mmip",
    dialect: "sqlite",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};