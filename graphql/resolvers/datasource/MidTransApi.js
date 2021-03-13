const { RESTDataSource } = require("apollo-datasource-rest");

let getCurrentTimestamp = () => {
    return "" + Math.round(new Date().getTime() / 1000);
  };

class MidTransApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://app.sandbox.midtrans.com/snap/v1/";
  }

  willSendRequest(request) {
    request.headers.set(
      "Authorization",
      "Basic " +
        Buffer.from("SB-Mid-server-DZ1hya4Pkgu5LogpW7cQL3Du").toString("base64")
    );
  }

  async createPayment() {
    const data = await this.post(`transactions`, {
      transaction_details: {
        order_id: "order-csb-" + getCurrentTimestamp(),
        gross_amount: 10000,
      },
      credit_card: {
        secure: true,
      },
      customer_details: {
        first_name: "Johny",
        last_name: "Kane",
        email: "testmidtrans@mailnesia.com",
        phone: "08111222333",
      },
    });
    return data;
  }
}

module.exports = {
  MidTransApi,
};
