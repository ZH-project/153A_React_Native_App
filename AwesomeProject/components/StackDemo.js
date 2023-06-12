import * as React from 'react';
import {Button,Text,View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Counter from './Counter';

const Stack = createNativeStackNavigator();

const HomeScreen = ({navigation}) => {
    return (
     <View style={{ flexDirection: 'row', justifyContent:'space-evenly'}}>
            <Button
                title="About"
                onPress={() =>
                navigation.navigate('About', {name: 'Zhihan'})
                }
            />
            <Button
                title="Counter"
                onPress={() =>
                navigation.navigate('Counter') 
                }
            />
      </View>
    );
  };
  const AboutScreen = ({navigation, route}) => {
    return <Text style={{fontSize:20}}>This is {route.params.name}'s CA1.</Text>;
  };

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Counter" component={Counter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
