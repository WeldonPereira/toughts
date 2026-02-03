const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("thoughts", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Conectado com sucesso!");
} catch (error) {
  console.log("Não foi possível realizar a conexão com o banco: ", error);
}

module.exports = sequelize;
