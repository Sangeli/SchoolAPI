
const Sequelize = require('sequelize');
const config = require('./config');

const awsUser = config.awsUser;
const awsPassword = config.awsPassword;
const awsEndpoint = config.awsEndpoint;
const uri = `mysql://${awsUser}:${awsPassword}@${awsEndpoint}`;

const sequelize = new Sequelize(uri);


sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });


// StudentClass = sequelize.define('StudentClass', {});
// Student.belongsToMany(Class, { through: StudentClass });
// Class.belongsToMany(Studnet, { through: StudentClass });

