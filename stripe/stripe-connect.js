import React from "react";
import { Alert, View } from "react-native";
import {
  useFinancialConnectionsSheet,
  StripeProvider,
} from "@stripe/stripe-react-native";
import Button from "./button";
import { API_URL } from "./config";
import { SafeArea } from "../utils/safe-area.component";

export const DashboardStripe = () => {
  const [clientSecret, setClientSecret] = React.useState("");
  const {
    loading,
    collectBankAccountToken,
    collectFinancialConnectionsAccounts,
  } = useFinancialConnectionsSheet();

  React.useEffect(() => {
    fetchClientSecret();
  }, []);

  const fetchClientSecret = async () => {
    const response = await fetch(`${API_URL}/financial-connections-sheet`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { clientSecret: secret, error } = await response.json();
    if (error) {
      Alert.alert("Error fetching client secret: ", error);
    } else {
      setClientSecret(secret);
    }
  };

  const handleCollectTokenPress = async () => {
    const { session, token, error } = await collectBankAccountToken(
      clientSecret
    );

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
      console.log(error);
    } else {
      Alert.alert("Success");
      console.log(
        "Successfully obtained session: ",
        JSON.stringify(session, null, 2)
      );
      console.log(
        "Successfully obtained token: ",
        JSON.stringify(token, null, 2)
      );
    }
  };

  const handleCollectSessionPress = async () => {
    const { session, error } = await collectFinancialConnectionsAccounts(
      clientSecret
    );

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
      console.log(error);
    } else {
      Alert.alert("Success");
      console.log(
        "Successfully obtained session: ",
        JSON.stringify(session, null, 2)
      );
    }
  };

  return (
    <SafeArea>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <StripeProvider
          publishableKey="pk_test_51Lqhy0KRh44UL5jkYgkO53zAm4rUjTZkFEPBgJrgmgsm59xoG64ugtfQUR0xFN3KOPjIMhVFRplSQzbwgrg6Gdgr00SHotwGbD"
          urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
          merchantIdentifier="merchant.com.{{Haba Pay}}" // required for Apple Pay
        >
          {/* <Button
        variant="primary"
        onPress={handleCollectTokenPress}
        title={!clientSecret ? 'loading...' : 'Collect token'}
        loading={loading}
        disabled={!clientSecret}
      /> */}
          <Button
            variant="primary"
            onPress={handleCollectSessionPress}
            title={!clientSecret ? "Connect Your Bank" : "Collect session"}
            loading={loading}
            disabled={!clientSecret}
          />
        </StripeProvider>
      </View>
    </SafeArea>
  );
};
