module.exports = {
  development: {
    dialect: "postgres",
    host: "localhost",
    username: "postgres",
    password: "postgres",
    database: "feed",
    define: {
      timestamps: true,
      underscored: true,
    },
  },
  test: {
    dialect: "postgres",
    host: "localhost",
    username: "postgres",
    password: "postgres",
    database: "test",
    define: {
      timestamps: true,
      underscored: true,
    },
  },
};
