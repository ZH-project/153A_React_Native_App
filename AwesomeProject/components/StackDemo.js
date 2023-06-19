import React,{useState,useContext} from 'react';
import {Pressable,Text,SafeAreaView, Button, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Counter from './Counter';
import TheApp from './TheApp';
import UserContext from './UserContext';

const Stack = createNativeStackNavigator();

const HomeScreen = ({navigation}) => {
    return (
      <SafeAreaView>
        <Pressable onPress={() => navigation.navigate('About', {name:'Zhihan'})} style={styles.button}>
          <Text style={styles.buttonText}>About</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('TheApp')} style={styles.button}>
          <Text style={styles.buttonText}>The App</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Counter')} style={styles.button}>
          <Text style={styles.buttonText}>Counter</Text>
        </Pressable>
      </SafeAreaView>
    );
  };
  const AboutScreen = ({navigation, route}) => {
    return <Text style={{fontSize:20}}>This is {route.params.name}'s CA02.</Text>;
  };

const MyStack = () => {
  return (
    <UserContext.Provider value={{username:" User01"}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home"
            component={HomeScreen}
            options={{title: 'Welcome! This is Zhihan\'s CA02'}}
          />
          <Stack.Screen name="About" component={AboutScreen} />
          <Stack.Screen name="TheApp" component={TheApp} />
          <Stack.Screen name="Counter" component={Counter} />
        </Stack.Navigator>
      </NavigationContainer>
      </UserContext.Provider>
  );
};

export default MyStack;

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    width: 200,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
    margin:10
  },
  buttonText:{
    fontSize:24,
    fontWeight:'bold',
  },
});