import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";

import { FontAwesome } from '@expo/vector-icons';
import getSymbolFromCurrency from 'currency-symbol-map';

import { FormattedDate, TransactionInterface } from '../services/interfaces';
import {Category} from '../components/plaid/plaid-categories';
import { SafeArea } from '../../utils/safe-area.component';


// const Transaction = ({ transaction, show, hide }: { [key: string]: TransactionInterface; }) => {
export const Transactions = ({ transaction, show, hide }: { [key: string]: TransactionInterface; }) => {

  const upperCaseFirstLetter = string =>
    `${string.slice(0, 1).toUpperCase()}${string.slice(1)}`;

  const lowerCaseAllWordsExceptFirstLetters = string =>
    string.replaceAll(/\S*/g, word =>
      `${word.slice(0, 1)}${word.slice(1).toLowerCase()}`
    );

  return (
    <SafeArea>
    <View style={styles.container}>
      <View style={styles.left}>
        <View style={{
          backgroundColor: '#FC0086', shadowRadius: 8, borderRadius: 10, justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          height: '50%',
          width: '80%'
        }}>

          <FontAwesome name={Category.categories.filter((el) => el.category_id === transaction.category_id)[0].icon ?? 'random'} size={30} color="#4B0D60" />
        </View>

      </View>
      <View style={styles.center}>

        <Text style={{ fontSize: 18, color: '#CBD3F7' }}>{upperCaseFirstLetter(lowerCaseAllWordsExceptFirstLetters(transaction.name))}</Text>
        <Text style={{ color: '#CBD3F7' }}>{transaction.payment_channel}</Text>
      </View>
      <View style={styles.right}>

        <Text style={{ fontSize: 20, color: '#CBD3F7', position: 'absolute', zIndex: 9999, elevation: 10000 }}>{getSymbolFromCurrency(transaction.iso_currency_code)}{transaction.amount.toString().indexOf('.') > 0 ? transaction.amount.toFixed(2) : transaction.amount}</Text>
      </View>
    </View>
    </SafeArea>
  );
};



const styles = StyleSheet.create({
  container: {
    color: '#FFF',
    height: 100,
    borderBottomColor: 'grey',
    borderWidth: 2,
    marginBottom: 10,
    width: Dimensions.get("window").width,
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 4,
    // zIndex: -1
  },
  left: {
    flexBasis: '15%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  center: {
    flexBasis: '65%',
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    paddingRight: 14,
    paddingLeft: 10
  },
  right: {
    flexBasis: '20%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  }
});
