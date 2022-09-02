module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('purchase', 'purchaseId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'product',
        key: 'id'
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('purchase', 'purchaseId');
  }
};
