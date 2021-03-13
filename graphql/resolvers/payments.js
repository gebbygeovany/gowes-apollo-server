// const checkAuth = require("../../util/check-auth");

module.exports = {
  Query: {
    createPayment: async (_, __, { dataSources }) =>
      dataSources.midTransApi.createPayment(),
  },
};
