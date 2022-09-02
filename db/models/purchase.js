module.exports = function (sequelize, DataTypes) {
    const purchase = sequelize.define('purchase', { // TODO: trade the name of the const
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        total: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: true
        },
        paymentType: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
        {
            timestamps: true,
            underscored: true,
            freezeTableName: true
        },
    );

    purchase.associate = (models) =>{
        purchase.hasMany(models.product, {
            foreignKey: 'purchaseId'
        });
    }   

    return purchase;
};