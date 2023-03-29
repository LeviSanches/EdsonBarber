const Sequelize = require("sequelize");
const sequelize = new Sequelize("agendabarber", "root", "B@ss10051997456456", {
    host: "localhost",
    dialect: "mysql"
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}