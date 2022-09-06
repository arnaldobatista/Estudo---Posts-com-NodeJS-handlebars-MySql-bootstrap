const Sequelize = require('sequelize')
// conexão com banco de dados
const sequelize = new Sequelize('postapp', 'root', 'suaSenha', {
    host: 'localhost',
    dialect: 'mysql',
    query:{raw:true}
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}