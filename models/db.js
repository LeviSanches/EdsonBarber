const Sequelize = require("sequelize");
const sequelize = new Sequelize("agendabarber", "root", "B@ss10051997456456", {
    host: "89.116.214.43",
    dialect: "mysql"
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}