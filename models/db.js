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
  month: {
      type: Sequelize.STRING,
  },
  perMonth: {
      type: Sequelize.ARRAY(Sequelize.INTEGER),
  },
  total: {
      type: Sequelize.INTEGER
  },
  branch: {
      type: Sequelize.INTEGER
  }
});

var Trans = sequelize.define('transaction', {
  ownerEmail: {
      type: Sequelize.STRING,
  },
  cashierEmail: {
      type: Sequelize.STRING,
  },
  name: {
      type: Sequelize.ARRAY(Sequelize.STRING),
  },
  count: {
      type: Sequelize.ARRAY(Sequelize.INTEGER),
  },
  price: {
      type: Sequelize.ARRAY(Sequelize.INTEGER),
  },
  total: {
      type: Sequelize.INTEGER,
  },
  money: {
      type: Sequelize.INTEGER,
  },
  change: {
      type: Sequelize.INTEGER,
  },
});

var Setting = sequelize.define('Set', {
    email: {
        type: Sequelize.STRING,
    },
    store: {
        type: Sequelize.ARRAY(Sequelize.STRING)
    },
    address: {
        type: Sequelize.ARRAY(Sequelize.STRING)
    }
})


exports.Owner = Owner
exports.Cashier = Cashier
exports.Trans = Trans
exports.Setting = Setting
exports.Sequelize = sequelize