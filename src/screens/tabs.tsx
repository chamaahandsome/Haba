// import React, { useEffect, useState } from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import AsyncStorage from '@react-native-async-storage/async-storage';

// import {Main} from './main-page';
// import {Transactions} from './transactions';
// import {PlaidConnection} from '../components/plaid/plaid-screen';
// import {Profile} from './profile';
// // import {Home} from './home-page';
// // import {Login} from './login';
// import {LinkedAccounts} from './linked-accounts';
// import { SafeArea } from '../../utils/safe-area.component';

// const Tab = createBottomTabNavigator();

// export const HabaTabs = () => {
//   const [loggedIn, setLoggedIn] = useState(false);
//   useEffect(() => {
//     const getAcessToken = async () => {

//       const token = await AsyncStorage.getItem('access_token');

//       if (!token) {
//         setLoggedIn(false);
//       }
//       else {
//         setLoggedIn(true);
//       };
//       // await AsyncStorage.removeItem('access_token');
//       // setLoggedIn(false);
//     };

//     getAcessToken();

//   }, []);

//   if (!loggedIn) return <Home />;
//   return (
//     <SafeArea>
//     <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: { backgroundColor: '#1A1C46' } }} initialRouteName="Transactions" >
//       <Tab.Screen name="Profile" component={Profile} options={{ tabBarActiveTintColor: '#FC0086' }} />
//       <Tab.Screen name="Transactions" component={Main} options={{ tabBarActiveTintColor: '#FC0086' }} />
//       <Tab.Screen name="Linked Accounts" component={LinkedAccounts} options={{ tabBarActiveTintColor: '#FC0086' }} />
//     </Tab.Navigator>
//     </SafeArea>
//   );
// }


