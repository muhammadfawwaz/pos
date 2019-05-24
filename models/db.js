const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_URI);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  var Owner = sequelize.define('owner', {
    name: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    },
    password: {
        type: Sequelize.STRING,
    }
});

var Cashier = sequelize.define('cashier', {
  name: {
      type: Sequelize.STRING,
  },
  email: {
      type: Sequelize.STRING,
  },
  password: {
      type: Sequelize.STRING,
  },
  emailOwner: {
      type: Sequelize.STRING,
  },
});

var Trans = sequelize.define('transaction', {
  cashierEmail: {
      type: Sequelize.STRING,
  },
  name: {
      type: Sequelize.ARRAY(Sequelize.STRING),
  },
  count: {
      type: Sequelize.ARRAY(Sequelize.STRING),
  },
  totalCount: {
      type: Sequelize.STRING,
  },
  money: {
      type: Sequelize.STRING,
  },
  change: {
      type: Sequelize.STRING,
  },
});

exports.Owner = Owner
exports.Cashier = Cashier
exports.Trans = Trans