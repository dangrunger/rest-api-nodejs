module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('product', 'purchaseId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'purchase',
        key: 'id'
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('product', 'purchaseId');
  }
};
