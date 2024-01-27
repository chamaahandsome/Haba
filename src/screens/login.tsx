import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Alert, ScrollView } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import Spinner from 'react-native-loading-spinner-overlay';
import { Ionicons } from '@expo/vector-icons';

import { UserService } from '../services/user-services';
import { LoginModal } from './login-modal';


export const Login = ({ changeType, navigation }: any) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState('');
  const [showLoadingSpinner, setShowLoadingSpinner] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = (data: { email: string, password: string; }) => {
    setShowLoadingSpinner(true);

    const { email, password } = data;
    UserService.login(email, password)
      .then((res) => {
        if (res.data.error) {
          setShowLoadingSpinner(false);
          Alert.alert('Error', res.data.error, [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ]);
        }

        if (res.data.access_token) {
          setModalVisible(true);

          const auth = getAuth();
          signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              setShowLoadingSpinner(false);
              navigation.navigate('LoggedInScreen', { name: 'Jane' });
            })
            .catch((error) => {
              console.log(error, 'err signing in with Firebase');
              setShowLoadingSpinner(false);
              Alert.alert('Error', 'Wrong login details', [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
              ]);
            });
        }
      })
      .catch((err) => {
        console.log(err, 'err123');
        Alert.alert('Error', 'Wrong login details', [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);
        setShowLoadingSpinner(false);
      });
  };

  const handlePress = () => {
    setHidePassword(!hidePassword);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Spinner
          visible={showLoadingSpinner}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
          overlayColor={'rgba(00, 0, 0, 0.6)'}
        />
        <View style={{ height: 100 }}>
        <LoginModal isModalVisible={isModalVisible} setModalVisible={setModalVisible} modalText={modalText} />
        </View>
        <Text style={styles.title}>Haba</Text>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.switchTypeButton} onPress={() => changeType('login')}>
            <Text style={styles.text}>Login</Text>
          </Pressable>
          <Pressable style={styles.switchTypeButton} onPress={() => changeType('signup')}>
            <Text style={styles.text}>Sign Up</Text>
          </Pressable>
        </View>
        <View style={styles.formContainer}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder='email'
                autoCapitalize='none'
              />
            )}
            name="email"
          />
          {errors.email && <Text>This is required.</Text>}
          <View style={{ flexDirection: 'row' }}>
            <Controller
              control={control}
              rules={{
                maxLength: 100,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.passwordInput}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder='password'
                  autoCapitalize='none'
                  secureTextEntry={hidePassword}
                />
              )}
              name="password"
            />
            {hidePassword ? (
              <Ionicons name="eye" size={32} style={{ top: 34, right: 45 }} onPress={handlePress} />
            ) :
              <Ionicons name="eye-off" size={32} style={{ top: 34, right: 45 }} onPress={handlePress} />
            }
          </View>
          <Pressable style={styles.button} onPress={handleSubmit(onSubmit)}>
            <Text style={styles.text}>Login</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
   
    alignItems: 'center',
    justifyContent: 'center',
    top: 140
  },
  title: {
    fontSize: 30,
    color: 'white',
  },
  input: {
    marginTop: 20,
    height: 50,
    width: 300,
    backgroundColor: 'white',
    borderRadius: 1,
    fontSize: 20,
    paddingLeft: 10
  },
  passwordInput: {
    marginTop: 20,
    height: 60,
    width: 300,
    backgroundColor: 'white',
    borderRadius: 6,
    fontSize: 20,
    paddingLeft: 10,
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginLeft: 33
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#00CED1',
    height: 60,
    width: 300,
    marginTop: 20
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  switchTypeButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 1,
    elevation: 3,
    backgroundColor: '#00CED1',
    height: 50,
    width: 140,
    marginTop: 20,
    marginRight: 10,
    marginLeft: 10,
  },
  formContainer: {
    top: '5%',
    margin: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    height: 60,
    borderWidth: 4,
    borderColor: 'red',
    width: 60,
    backgroundColor: 'white'
  },
  spinnerTextStyle: {
    color: '#FFF'
  },
});


// import React, { useState } from 'react';
// import { Text, TextInput, Pressable, Alert, ScrollView } from 'react-native';
// import { useForm, Controller } from 'react-hook-form';
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
// import Spinner from 'react-native-loading-spinner-overlay';
// import { Ionicons } from '@expo/vector-icons';
// import styled from 'styled-components/native';

// import { UserService } from '../services/user-services';
// import { LoginModal } from './login-modal';

// const Container = styled.View`
//   align-items: center;
//   justify-content: center;
//   margin-top: 140px;
// `;

// const Title = styled.Text`
//   font-size: 30px;
//   color: white;
// `;

// const ButtonContainer = styled.View`
//   flex-direction: row;
// `;

// const SwitchTypeButton = styled.Pressable`
//   align-items: center;
//   justify-content: center;
//   padding-vertical: 12px;
//   padding-horizontal: 32px;
//   border-radius: 1px;
//   elevation: 3;
//   background-color: #00CED1;
//   height: 50px;
//   width: 140px;
//   margin-top: 20px;
//   margin-right: 10px;
//   margin-left: 10px;
// `;

// const FormContainer = styled.View`
//   top: 5%;
//   margin: auto;
//   align-items: center;
//   justify-content: center;
// `;

// const Input = styled.TextInput`
//   margin-top: 20px;
//   height: 50px;
//   width: 300px;
//   background-color: white;
//   border-radius: 1px;
//   font-size: 20px;
//   padding-left: 10px;
// `;

// const PasswordInput = styled.TextInput`
//   margin-top: 20px;
//   height: 60px;
//   width: 300px;
//   background-color: white;
//   border-radius: 6px;
//   font-size: 20px;
//   padding-left: 10px;
//   margin: auto;
//   display: flex;
//   justify-content: center;
//   align-content: center;
//   align-items: center;
//   margin-left: 33px;
// `;

// const Button = styled.Pressable`
//   align-items: center;
//   justify-content: center;
//   padding-vertical: 12px;
//   padding-horizontal: 32px;
//   border-radius: 4px;
//   elevation: 3;
//   background-color: #00CED1;
//   height: 60px;
//   width: 300px;
//   margin-top: 20px;
// `;

// const SpinnerTextStyle = styled.Text`
//   color: #FFF;
// `;

// export const Login = ({ changeType, navigation }: any) => {
//   const [isModalVisible, setModalVisible] = useState(false);
//   const [modalText, setModalText] = useState('');
//   const [showLoadingSpinner, setShowLoadingSpinner] = useState(false);
//   const [hidePassword, setHidePassword] = useState(true);

//   const { control, handleSubmit, formState: { errors } } = useForm({
//     defaultValues: {
//       email: '',
//       password: '',
//     },
//   });

//   const onSubmit = (data: { email: string, password: string }) => {
//     setShowLoadingSpinner(true);

//     const { email, password } = data;
//     UserService.login(email, password)
//       .then((res) => {
//         if (res.data.error) {
//           setShowLoadingSpinner(false);
//           Alert.alert('Error', res.data.error, [
//             { text: 'OK', onPress: () => console.log('OK Pressed') },
//           ]);
//         }

//         if (res.data.access_token) {
//           setModalVisible(true);

//           const auth = getAuth();
//           signInWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//               setShowLoadingSpinner(false);
//               navigation.navigate('LoggedInScreen', { name: 'Jane' });
//             })
//             .catch((error) => {
//               console.log(error, 'err signing in with Firebase');
//               setShowLoadingSpinner(false);
//               Alert.alert('Error', 'Wrong login details', [
//                 { text: 'OK', onPress: () => console.log('OK Pressed') },
//               ]);
//             });
//         }
//       })
//       .catch((err) => {
//         console.log(err, 'err123');
//         Alert.alert('Error', 'Wrong login details', [
//           { text: 'OK', onPress: () => console.log('OK Pressed') },
//         ]);
//         setShowLoadingSpinner(false);
//       });
//   };

//   const handlePress = () => {
//     setHidePassword(!hidePassword);
//   };

//   return (
//     <ScrollView>
//       <Container>
//         <Spinner
//           visible={showLoadingSpinner}
//           textContent={'Loading...'}
//           textStyle={SpinnerTextStyle}
//           overlayColor={'rgba(00, 0, 0, 0.6)'}
//         />
//         <View style={{ height: 100 }}>
//           <LoginModal isModalVisible={isModalVisible} setModalVisible={setModalVisible} modalText={modalText} />
//         </View>
//         <Title>Haba</Title>
//         <ButtonContainer>
//           <SwitchTypeButton onPress={() => changeType('login')}>
//             <Text style={styles.text}>Login</Text>
//           </SwitchTypeButton>
//           <SwitchTypeButton onPress={() => changeType('signup')}>
//             <Text style={styles.text}>Sign Up</Text>
//           </SwitchTypeButton>
//         </ButtonContainer>
//         <FormContainer>
//           <Controller
//             control={control}
//             rules={{
//               required: true,
//             }}
//             render={({ field: { onChange, onBlur, value } }) => (
//               <Input
//                 onBlur={onBlur}
//                 onChangeText={onChange}
//                 value={value}
//                 placeholder='email'
//                 autoCapitalize='none'
//               />
//             )}
//             name="email"
//           />
//           {errors.email && <Text>This is required.</Text>}
//           <View style={{ flexDirection: 'row' }}>
//             <Controller
//               control={control}
//               rules={{
//                 maxLength: 100,
//               }}
//               render={({ field: { onChange, onBlur, value } }) => (
//                 <PasswordInput
//                   onBlur={onBlur}
//                   onChangeText={onChange}
//                   value={value}
//                   placeholder='password'
//                   autoCapitalize='none'
//                   secureTextEntry={hidePassword}
//                 />
//               )}
//               name="password"
//             />
//             {hidePassword ? (
//               <Ionicons name="eye" size={32} style={{ top: 34, right: 45 }} onPress={handlePress} />
//             ) : (
//               <Ionicons name="eye-off" size={32} style={{ top: 34, right: 45 }} onPress={handlePress} />
//             )}
//           </View>
//           <Button onPress={handleSubmit(onSubmit)}>
//             <Text style={styles.text}>Login</Text>
//           </Button>
//         </FormContainer>
//       </Container>
//     </ScrollView>
//   );
// };
