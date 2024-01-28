import React, { useState } from 'react';
import { StyleSheet, ScrollView, Dimensions } from 'react-native';
import styled from 'styled-components/native';

import { Login } from './login';
import { SignUp } from './signup';

const HomeContainer = styled.ScrollView`
  background-color: #1D1D1D;
  height: 100%;
  width: 100%;
`;

export const Home = ({ navigation }: any) => {
  const [type, setType] = useState('login');

  const changeType = (passedType: string) => {
    return passedType === 'login' ? setType('login') : setType('signup');
  };

  return (
    <HomeContainer>
      {type === 'login' ? (
        <Login changeType={changeType} navigation={navigation} />
      ) :
        (
          <SignUp changeType={changeType} />
        )
      }
    </HomeContainer>
  );
};
