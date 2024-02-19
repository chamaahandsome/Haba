// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
const stripe = require("stripe")(
  "pk_test_51Lqhy0KRh44UL5jkYgkO53zAm4rUjTZkFEPBgJrgmgsm59xoG64ugtfQUR0xFN3KOPjIMhVFRplSQzbwgrg6Gdgr00SHotwGbD"
);

const customer = await stripe.customers.create({
  email: "{{CUSTOMER_EMAIL}}",
});

const paymentIntent = await stripe.paymentIntents.create({
  amount: 20000,
  currency: "usd",
  customer: "{{CUSTOMER_ID}}",
  payment_method_types: ["us_bank_account"],
  payment_method_options: {
    us_bank_account: {
      financial_connections: {
        permissions: ["transactions", "payment_method"],
      },
    },
  },
});

const session = await stripe.financialConnections.sessions.create({
  account_holder: {
    type: "customer",
    customer: "{{CUSTOMER_ID}}",
  },
  permissions: ["balances", "ownership", "payment_method", "transactions"],
});
