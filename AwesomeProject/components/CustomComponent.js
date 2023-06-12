import React from 'react';
import {View, Text} from 'react-native';

const Custom = ({text}) => {
    return (
      <View style={{flex: 1, 
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin:20,
                    padding:20,
                    }} >
            <Text style = {{fontSize: 30}}>
             Here is custom component 🐱 {text} 🐕
            </Text>
      </View>
    )
  }



export default Custom;
