const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('toughts2', 'root','', {
    host: 'localhost',
    dialect: 'mysql',
})

try {
    sequelize.authenticate();
    console.log('Conexão com o banco de dados realizada com sucesso.');
} catch (err) {
    console.log(`Não foi possível conectar ao banco de dados: ${err}`);
}

module.exports = sequelize;
