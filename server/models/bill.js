"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Bill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Bill.belongsTo(models.User, { foreignKey: "UserId" });
      Bill.belongsTo(models.Category, { foreignKey: "CategoryId" });
    }
  }
  Bill.init(
    {
      name: DataTypes.STRING,
      billNumber: DataTypes.STRING,
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Bill amount cannot be empty",
          },
          notNull: {
            msg: "Bill amount cannot be empty",
          },
        },
      },
      CategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Bill category cannot be empty",
          },
          notNull: {
            msg: "Bill category cannot be empty",
          },
        },
      },
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Bill owner cannot be empty",
          },
          notNull: {
            msg: "Bill owner cannot be empty",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Bill",
    }
  );
  return Bill;
};
