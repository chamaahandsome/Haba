import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Dimensions, ScrollView } from 'react-native';
import { useForm, Controller } from "react-hook-form";

import {UserService} from '../services/user-services';


const width = Dimensions.get('window').width; //full width
const height = Dimensions.get('window').height; //full height

export const SignUp = ({ changeType }: any) => {
  const [hidePassword, setHidePassword] = useState(true);
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      mobile_number: '',
      username: ''
    }
  });
  const onSubmit = (data: any) => {

    const { email, first_name, last_name, password, mobile_number, username } = data;
    UserService.signUp(first_name, last_name, email, password, mobile_number, username)
      .then((res) => {

        if (res.data.error) {
          // SWAL
        }
        if (res.data.email) {
          // SWAL
        }
      })
      .catch((err) => {
        console.log(err, 'err123');
      });
  };

  const handlePress = () => {
    setHidePassword(!hidePassword);
  };

  return (
  <ScrollView contentContainerStyle={{ paddingBottom: 200 }}>
    <View style={styles.container}>
      <Text style={styles.title}>Haba</Text>

      <View style={styles.buttonContainer}>

        <Pressable style={styles.switchTypeButton} onPress={() => changeType('login')}>
          <Text style={styles.text}>Back</Text>
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
              placeholder='First Name'
            />
          )}
          name="first_name"
        />
        {errors.first_name && <Text>This is required.</Text>}

        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder='Last Name'
            />
          )}
          name="last_name"
        />

        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder='Email'
            />
          )}
          name="email"
        />

        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
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

        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder='mobile number'
            />
          )}
          name="mobile_number"
        />

        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder='username'
            />
          )}
          name="username"
        />

        <Pressable style={styles.button} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.signUpText} >Sign up</Text>
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
    top: '5%',
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
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 1,
    elevation: 3,
    backgroundColor: '#00CED1',
    height: 50,
    width: 300,
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  signUpText: {
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
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#00CED1',
    borderRadius: 1,
    height: 50,
    width: 140,
    marginTop: 20,
    marginRight: 10,
    marginLeft: 10,
  },
  formContainer: {
    top: '5%',
  }
});


// import React, { useState } from 'react';
// import { StyleSheet, Text, View, TextInput, Pressable, Dimensions, ScrollView } from 'react-native';
// import { useForm, Controller } from "react-hook-form";
// import styled from 'styled-components/native';

// import { UserService } from '../services/user-services';

// const width = Dimensions.get('window').width; //full width
// const height = Dimensions.get('window').height; //full height

// const Container = styled.View`
//   align-items: center;
//   justify-content: center;
//   top: 5%;
// `;

// const Title = styled.Text`
//   font-size: 30px;
//   color: white;
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

// const Button = styled.Pressable`
//   align-items: center;
//   justify-content: center;
//   padding-vertical: 12px;
//   padding-horizontal: 25px;
//   border-radius: 1px;
//   elevation: 3;
//   background-color: #00CED1;
//   height: 50px;
//   width: 300px;
//   margin-top: 20px;
// `;

// const TextButton = styled.Text`
//   font-size: 16px;
//   line-height: 21px;
//   font-weight: bold;
//   letter-spacing: 0.25px;
//   color: white;
// `;

// const ButtonContainer = styled.View`
//   display: flex;
//   flex-direction: row;
// `;

// const SwitchTypeButton = styled.Pressable`
//   align-items: center;
//   justify-content: center;
//   padding-vertical: 12px;
//   padding-horizontal: 32px;
//   border-radius: 4px;
//   elevation: 3;
//   background-color: #00CED1;
//   border-radius: 1px;
//   height: 50px;
//   width: 140px;
//   margin-top: 20px;
//   margin-right: 10px;
//   margin-left: 10px;
// `;

// const FormContainer = styled.View`
//   top: 5%;
// `;

// export const SignUp = ({ changeType }: any) => {
//   const [hidePassword, setHidePassword] = useState(true);
//   const { control, handleSubmit, formState: { errors } } = useForm({
//     defaultValues: {
//       first_name: '',
//       last_name: '',
//       email: '',
//       password: '',
//       mobile_number: '',
//       username: ''
//     }
//   });
//   const onSubmit = (data: any) => {

//     const { email, first_name, last_name, password, mobile_number, username } = data;
//     UserService.signUp(first_name, last_name, email, password, mobile_number, username)
//       .then((res) => {

//         if (res.data.error) {
//           // SWAL
//         }
//         if (res.data.email) {
//           // SWAL
//         }
//       })
//       .catch((err) => {
//         console.log(err, 'err123');
//       });
//   };

//   const handlePress = () => {
//     setHidePassword(!hidePassword);
//   };

//   return (
//     <ScrollView contentContainerStyle={{ paddingBottom: 200 }}>
//       <Container>
//         <Title>Haba</Title>

//         <ButtonContainer>
//           <SwitchTypeButton onPress={() => changeType('login')}>
//             <TextButton>Login</TextButton>
//           </SwitchTypeButton>

//           <SwitchTypeButton onPress={() => changeType('signup')}>
//             <TextButton>Sign Up</TextButton>
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
//                 placeholder='First Name'
//               />
//             )}
//             name="first_name"
//           />
//           {errors.first_name && <Text>This is required.</Text>}

//           <Controller
//             control={control}
//             rules={{
//               maxLength: 100,
//             }}
//             render={({ field: { onChange, onBlur, value } }) => (
//               <Input
//                 onBlur={onBlur}
//                 onChangeText={onChange}
//                 value={value}
//                 placeholder='Last Name'
//               />
//             )}
//             name="last_name"
//           />

//           <Controller
//             control={control}
//             rules={{
//               maxLength: 100,
//             }}
//             render={({ field: { onChange, onBlur, value } }) => (
//               <Input
//                 onBlur={onBlur}
//                 onChangeText={onChange}
//                 value={value}
//                 placeholder='Email'
//               />
//             )}
//             name="email"
//           />

//           <Controller
//             control={control}
//             rules={{
//               maxLength: 100,
//             }}
//             render={({ field: { onChange, onBlur, value } }) => (
//               <Input
//                 onBlur={onBlur}
//                 onChangeText={onChange}
//                 value={value}
//                 placeholder='password'
//                 autoCapitalize='none'
//                 secureTextEntry={hidePassword}
//               />
//             )}
//             name="password"
//           />

//           <Controller
//             control={control}
//             rules={{
//               maxLength: 100,
//             }}
//             render={({ field: { onChange, onBlur, value } }) => (
//               <Input
//                 onBlur={onBlur}
//                 onChangeText={onChange}
//                 value={value}
//                 placeholder='mobile number'
//               />
//             )}
//             name="mobile_number"
//           />

//           <Controller
//             control={control}
//             rules={{
//               maxLength: 100,
//             }}
//             render={({ field: { onChange, onBlur, value } }) => (
//               <Input
//                 onBlur={onBlur}
//                 onChangeText={onChange}
//                 value={value}
//                 placeholder='username'
//               />
//             )}
//             name="username"
//           />

//           <Button onPress={handleSubmit(onSubmit)}>
//             <TextButton>Sign up</TextButton>
//           </Button>
//         </FormContainer>
//       </Container>
//     </ScrollView>
//   );
// };