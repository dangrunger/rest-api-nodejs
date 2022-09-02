module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('purchase', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    total: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: true
    },
    paymentType: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    }
},
    {
        timestamps: true,
        underscored: true,
        freezeTableName: true
    },
);
    
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('purchase')
  }
};
