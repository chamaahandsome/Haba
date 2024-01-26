// import React, { useState } from 'react';
// import { StyleSheet, ScrollView, Dimensions } from 'react-native';

// import { Login } from './login';
// import { SignUp } from './signup';
// import { SafeArea } from '../../utils/safe-area.component';



// const width = Dimensions.get('window').width; //full width
// const height = Dimensions.get('window').height; //full height

// export const Home = ({ navigation }: any) => {
//   const [type, setType] = useState('login');

//   const changeType = (passedType: string) => {
//     return passedType === 'login' ? setType('login') : setType('signup');
//   };

//   return (
//     <SafeArea>
//     <ScrollView style={styles.container} >
//       {type === 'login' ? (
//         <Login changeType={changeType} navigation={navigation} />
//       ) :
//         (
//           <SignUp changeType={changeType} />
//         )
//       }

//     </ScrollView>
//     </SafeArea>

//   );
// };


// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     backgroundColor: '#1D1D1D',
//     height: '100%',
//     // height: height,
//     width: '100%'
//   }
// });


