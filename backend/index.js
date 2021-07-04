const express = require("express");
const cors = require("cors");

const app = express();

const db = require("./models");

// During development
db.sequelize.sync({force: true}).then(() => {
  console.log("Drop and re-sync db.");
  db.users.create({
    ssn: '1111111111',
    password: '21232f297a57a5a743894a0e4a801fc3',
    roleId: 1,
  });
  db.users.create({
    ssn: '2222222222',
    password: 'ee11cbb19052e40b07aac0ca060c23ee',
    roleId: 2,
  });
});

const corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to mmip application." });
});

require("./routes/auth.routes")(app);
require("./routes/main.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});