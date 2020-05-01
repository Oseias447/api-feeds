const { Model, DataTypes } = require("sequelize");

class Feed extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        avatar: DataTypes.STRING,
        url_image: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: "feeds",
      }
    );
  }

  static associate(models) {}
}

module.exports = Feed;
