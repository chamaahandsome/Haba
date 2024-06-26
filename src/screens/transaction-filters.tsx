import React from 'react';
import { View, Pressable, Text, StyleSheet } from "react-native";
import { SafeArea } from '../../utils/safe-area.component';


export const TransactionFilters = ({ onDayClick, onWeekClick, onMonthClick, onInboundClick, onAllClick, onOutboundClick, date, inboundOutbound }) => {
  return (
    <SafeArea>
    <View style={styles.container}>
      <View style={styles.timePeriodContainer}>

        <Pressable style={date === 'day' ? styles.activeButton : styles.button} onPress={onDayClick}>
          <Text style={styles.text}>Day</Text>
        </Pressable>
        <Pressable style={date === 'week' ? styles.activeButton : styles.button} onPress={onWeekClick}>
          <Text style={styles.text}>Week</Text>
        </Pressable>
        <Pressable style={date === 'month' ? styles.activeButton : styles.button} onPress={onMonthClick}>
          <Text style={styles.text}>Month</Text>
        </Pressable>
      </View>
      <View style={styles.timePeriodContainer}>

        <Pressable style={inboundOutbound === 'inbound' ? styles.activeButton : styles.button} onPress={onInboundClick}>
          <Text style={styles.text}>Inbound</Text>
        </Pressable>
        <Pressable style={inboundOutbound === 'all' ? styles.activeButton : styles.button} onPress={onAllClick}>
          <Text style={styles.text}>All</Text>
        </Pressable>
        <Pressable style={inboundOutbound === 'outbound' ? styles.activeButton : styles.button} onPress={onOutboundClick}>
          <Text style={styles.text}>Outbound</Text>
        </Pressable>
      </View>
    </View>
    </SafeArea>
  );
};



const styles = StyleSheet.create({
  container: {
    marginTop: -50,
    position: 'relative',
    zIndex: -2
  },
  timePeriodContainer: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'center'
    justifyContent: 'space-around',
    position: 'relative',
    zIndex: 1,
    elevation: 1,

  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    elevation: 1,
    backgroundColor: '#FC0086',
    height: 50,
    marginTop: 20,
    flexBasis: '25%',
    position: 'relative',
    zIndex: 1,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  activeButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    elevation: 1,
    backgroundColor: '#5224D8',
    height: 50,
    marginTop: 20,
    flexBasis: '25%',
    position: 'relative',
    zIndex: 1,
  },
});

// import React from 'react';
// import styled from 'styled-components/native';
// import { SafeArea } from '../../utils/safe-area.component';

// const Container = styled.View`
//   margin-top: -50px;
//   position: relative;
//   z-index: -2;
// `;

// const TimePeriodContainer = styled.View`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-around;
//   position: relative;
//   z-index: 1;
//   elevation: 1;
// `;

// const Button = styled.Pressable`
//   align-items: center;
//   justify-content: center;
//   border-radius: 4px;
//   elevation: 1;
//   height: 50px;
//   margin-top: 20px;
//   flex-basis: 25%;
//   position: relative;
//   z-index: 1;
// `;

// const Text = styled.Text`
//   font-size: 16px;
//   line-height: 21px;
//   font-weight: bold;
//   letter-spacing: 0.25px;
//   color: white;
// `;

// const ActiveButton = styled(Button)`
//   background-color: #5224D8;
// `;

// const InactiveButton = styled(Button)`
//   background-color: #FC0086;
// `;

// export const TransactionFilters = ({ onDayClick, onWeekClick, onMonthClick, onInboundClick, onAllClick, onOutboundClick, date, inboundOutbound }) => {
//   return (
//     <SafeArea>
//       <Container>
//         <TimePeriodContainer>
//           <InactiveButton onPress={onDayClick}>
//             <Text>Day</Text>
//           </InactiveButton>
//           <InactiveButton onPress={onWeekClick}>
//             <Text>Week</Text>
//           </InactiveButton>
//           <InactiveButton onPress={onMonthClick}>
//             <Text>Month</Text>
//           </InactiveButton>
//         </TimePeriodContainer>
//         <TimePeriodContainer>
//           <InactiveButton onPress={onInboundClick}>
//             <Text>Inbound</Text>
//           </InactiveButton>
//           <InactiveButton onPress={onAllClick}>
//             <Text>All</Text>
//           </InactiveButton>
//           <InactiveButton onPress={onOutboundClick}>
//             <Text>Outbound</Text>
//           </InactiveButton>
//         </TimePeriodContainer>
//       </Container>
//     </SafeArea>
//   );
// };
