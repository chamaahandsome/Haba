// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
const stripe = require("stripe")(
  "pk_test_51Lqhy0KRh44UL5jkYgkO53zAm4rUjTZkFEPBgJrgmgsm59xoG64ugtfQUR0xFN3KOPjIMhVFRplSQzbwgrg6Gdgr00SHotwGbD"
);

const session = await stripe.financialConnections.sessions.create({
  account_holder: {
    type: "customer",
    customer: "{{CUSTOMER_ID}}",
  },
  permissions: ["balances", "ownership", "payment_method", "transactions"],
});
