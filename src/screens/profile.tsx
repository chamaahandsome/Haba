
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, Image, DevSettings } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import AsyncStorage from '@react-native-async-storage/async-storage';

import Ionicons from '@expo/vector-icons/Ionicons';

import {LoginModal} from './login-modal';
import {UserService} from '../services/user-services';
import { User } from '../services/interfaces';
import { SafeArea } from '../../utils/safe-area.component';

export const Profile = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const [accessToken, setAccessToken] = useState('');
  const [user, setUser] = useState<User>({
    _id: '',
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: 0,
    password: '',
    username: '',
    images: []
  });

  useEffect(() => {

    const getAccessToken = async () => {

      const token = await AsyncStorage.getItem('access_token');
      if (token) {
        setAccessToken(token);
      }
    };

    const getMe = async () => {
      if (!accessToken) {
        console.log(accessToken, 'no access token');
      }
      await UserService.getMe(accessToken)
        .then((res) => {
          if (res.data) {
            setUser(res.data);
          }
        })
        .catch((err) => {
          console.log(err, 'err123 getMe');
        });
    };
    getAccessToken();
    getMe();
  }, [accessToken]);


  const handlePress = () => {
    setHidePassword(!hidePassword);
  };

  const handleUserChange = (e: any, key: string) => {
    setUser(prevState => ({
      ...user,
      [key]: e
    }));
  };

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      id: '',
      email: '',
      firstName: '',
      lastName: '',
      mobileNumber: 0,
      password: '',
      username: ''
    }
  });

  if (!Object.keys(user).length) return <View><Text>Loading...</Text></View>;

  return (

    <View style={styles.container}>
      <View>
        <Image style={styles.imageContainer} source={!user.images.length ? require('../../assets/Default_pfp.png') : { uri: user.images[0] }} />
      </View>
      <View style={styles.formContainer}>

        <TextInput
          style={styles.input}
          onChangeText={(e) => handleUserChange(e, 'firstName')}
          value={user.firstName}
          placeholder='First Name'
          autoCapitalize='none'
        />

        <TextInput
          style={styles.input}
          onChangeText={(e) => handleUserChange(e, 'lastName')}
          value={user.lastName}
          placeholder='Last Name'
          autoCapitalize='none'
        />

        <TextInput
          style={styles.input}
          onChangeText={(e) => handleUserChange(e, 'email')}
          value={user.email}
          placeholder='Email'
          autoCapitalize='none'
        />

        <View style={{ flexDirection: 'row' }}>

          <TextInput
            style={styles.passwordInput}
            onChangeText={(e) => handleUserChange(e, 'password')}
            value={user.password}
            placeholder='Password'
            autoCapitalize='none'
            secureTextEntry={hidePassword}
          />

          {hidePassword ? (
            <Ionicons name="eye" size={32} style={{ top: 34, right: 45 }} onPress={handlePress} />
          ) :
            <Ionicons name="eye-off" size={32} style={{ top: 34, right: 45 }} onPress={handlePress} />
          }
        </View>
        <Pressable style={styles.button}
        >
          <Text style={styles.text}>Update</Text>
        </Pressable>
      </View>
    </View>

  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D1D1D',
    height: '100%',
    // height: height,
    width: '100%',
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally
  },
  imageContainer: {
    // display: 'flex',
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally
    // flex: 1,
    top: -20,
    width: 160,
    height: 160,
    borderRadius: 80

  },
  formContainer: {

    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally
    // flex: 1
  },
  input: {
    color: 'white',
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
    height: 50,
    width: 300,
    backgroundColor: 'white',
    borderRadius: 1,
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

    height: 50,
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
});



// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, Pressable, Image } from 'react-native';
// import { useForm, Controller } from "react-hook-form";
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { SafeArea } from '../../utils/safe-area.component';
// import { LoginModal } from './login-modal';
// import { UserService } from '../services/user-services';
// import { User } from '../services/interfaces';
// import { Ionicons } from '@expo/vector-icons';
// import styled from 'styled-components/native';

// const ProfileContainer = styled(SafeArea)`
//   flex: 1;
//   background-color: #1D1D1D;
//   height: 100%;
//   width: 100%;
//   justify-content: center;
//   align-items: center;
// `;

// const ImageContainer = styled(View)`
//   justify-content: center;
//   align-items: center;
//   top: -20px;
//   width: 160px;
//   height: 160px;
//   border-radius: 80px;
// `;

// const FormContainer = styled(View)`
//   justify-content: center;
//   align-items: center;
// `;

// const Input = styled(TextInput)`
//   color: white;
//   margin-top: 20px;
//   height: 50px;
//   width: 300px;
//   background-color: white;
//   border-radius: 1px;
//   font-size: 20px;
//   padding-left: 10px;
// `;

// const PasswordInput = styled(TextInput)`
//   margin-top: 20px;
//   height: 50px;
//   width: 300px;
//   background-color: white;
//   border-radius: 1px;
//   font-size: 20px;
//   padding-left: 10px;
//   margin: auto;
//   display: flex;
//   justify-content: center;
//   align-content: center;
//   align-items: center;
//   margin-left: 33px;
// `;

// const Button = styled(Pressable)`
//   align-items: center;
//   justify-content: center;
//   padding-vertical: 12px;
//   padding-horizontal: 32px;
//   border-radius: 4px;
//   elevation: 3;
//   background-color: #00CED1;
//   height: 50px;
//   width: 300px;
//   margin-top: 20px;
// `;

// const ButtonText = styled(Text)`
//   font-size: 16px;
//   line-height: 21px;
//   font-weight: bold;
//   letter-spacing: 0.25px;
//   color: white;
// `;

// export const Profile = () => {
//   const [hidePassword, setHidePassword] = useState(true);
//   const [accessToken, setAccessToken] = useState('');
//   const [user, setUser] = useState<User>({
//     _id: '',
//     firstName: '',
//     lastName: '',
//     email: '',
//     mobileNumber: 0,
//     password: '',
//     username: '',
//     images: []
//   });

//   useEffect(() => {
//     const getAccessToken = async () => {
//       const token = await AsyncStorage.getItem('access_token');
//       if (token) {
//         setAccessToken(token);
//       }
//     };

//     const getMe = async () => {
//       if (!accessToken) {
//         console.log(accessToken, 'no access token');
//       }
//       await UserService.getMe(accessToken)
//         .then((res) => {
//           if (res.data) {
//             setUser(res.data);
//           }
//         })
//         .catch((err) => {
//           console.log(err, 'err123 getMe');
//         });
//     };

//     getAccessToken();
//     getMe();
//   }, [accessToken]);

//   const handlePress = () => {
//     setHidePassword(!hidePassword);
//   };

//   const handleUserChange = (e: any, key: string) => {
//     setUser(prevState => ({
//       ...user,
//       [key]: e
//     }));
//   };

//   const { control, handleSubmit, formState: { errors } } = useForm({
//     defaultValues: {
//       id: '',
//       email: '',
//       firstName: '',
//       lastName: '',
//       mobileNumber: 0,
//       password: '',
//       username: ''
//     }
//   });

//   if (!Object.keys(user).length) return <View><Text>Loading...</Text></View>;

//   return (
//     <ProfileContainer>
//       <ImageContainer>
//         <Image style={styles.imageContainer} source={!user.images.length ? require('../../assets/Default_pfp.png') : { uri: user.images[0] }} />
//       </ImageContainer>
//       <FormContainer>
//         <Input
//           onChangeText={(e) => handleUserChange(e, 'firstName')}
//           value={user.firstName}
//           placeholder='First Name'
//           autoCapitalize='none'
//         />
//         <Input
//           onChangeText={(e) => handleUserChange(e, 'lastName')}
//           value={user.lastName}
//           placeholder='Last Name'
//           autoCapitalize='none'
//         />
//         <Input
//           onChangeText={(e) => handleUserChange(e, 'email')}
//           value={user.email}
//           placeholder='Email'
//           autoCapitalize='none'
//         />
//         <View style={{ flexDirection: 'row' }}>
//           <PasswordInput
//             onChangeText={(e) => handleUserChange(e, 'password')}
//             value={user.password}
//             placeholder='Password'
//             autoCapitalize='none'
//             secureTextEntry={hidePassword}
//           />
//           {hidePassword ? (
//             <Ionicons name="eye" size={32} style={{ top: 34, right: 45 }} onPress={handlePress} />
//           ) :
//             <Ionicons name="eye-off" size={32} style={{ top: 34, right: 45 }} onPress={handlePress} />
//           }
//         </View>
//         <Button>
//           <ButtonText>Update</ButtonText>
//         </Button>
//       </FormContainer>
//     </ProfileContainer>
//   );
// };