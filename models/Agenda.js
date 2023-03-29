const db = require("./db");

const agenda = db.sequelize.define("agenda", {
    id: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    barbeiro: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    servico: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    data: {
        type: db.Sequelize.DATEONLY,
        allowNull: false
    },
    hora: {
        type: db.Sequelize.STRING,
        allowNull: false
    }
})

module.exports = agenda;

//agenda.sync({force: true})