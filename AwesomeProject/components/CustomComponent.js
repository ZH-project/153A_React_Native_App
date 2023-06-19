import React from 'react';
import {SafeAreaView, Text} from 'react-native';

const Custom = ({text}) => {
    return (
      <SafeAreaView style={{flex: 1, 
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin:20,
                    padding:20,
                    }} >
            <Text style = {{fontSize: 30}}>
             Here is custom component 🐱 {text} 🐕
            </Text>
      </SafeAreaView>
    )
  }


export default Custom;
