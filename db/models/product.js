module.exports = function (sequelize, DataTypes) {
    const product = sequelize.define('product', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    },
        {
            timestamps: true,
            underscored: true,
            freezeTableName: true
        },
    );

    product.associate = (models) => {
        product.belongsTo(models.compra,{
            foreignKey: 'purchaseId'
        });
        }
    return product;
};

