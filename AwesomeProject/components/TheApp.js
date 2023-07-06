import React, {useState, useEffect, useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, StyleSheet, Button, SafeAreaView, TextInput } from 'react-native';
import { createContext } from 'react';
import { MaterialIcons} from '@expo/vector-icons';
import UsingCamera from './UsingCamera';
import ImageGenerator from './ImageGenerator';
import ImageMaker from './ImageMaker';

export const UsernameContext = createContext({name: '', age:0, weight:0, height:0});

const ImageMakerScreen = ()=>{
	//const userInfo = useContext(UsernameContext);
  return (
    <SafeAreaView style={styles.screen}>
        <ImageMaker />
    </SafeAreaView>
  );
}

const ImageGeneratorrScreen =() => {
    return (
      <SafeAreaView style={styles.screen}>
        <ImageGenerator />
      </SafeAreaView>
    );
  }

  const CameraScreen =() => {
    return (
      <SafeAreaView style={styles.screen}>
        <UsingCamera/>
      </SafeAreaView>
    );
  }

  const SettingsScreen =() => {
	//const userInfo = useContext(UsernameContext);
    return (
      <SafeAreaView style={styles.screen}>
        <Text>Placeholder</Text>

      </SafeAreaView>
    );
  }

const Tab = createBottomTabNavigator();

export default function App() {
	const [name, setName] = useState('');

  return (
	//<UsernameContext.Provider value={{}}>
        <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
            if (route.name === 'Image Maker') {
                iconName="photo";
            } else if (route.name == 'Image Generator'){
                iconName = "cloud";
            } else if (route.name === 'Camera') {
                iconName = 'camera';
            }  
            // else if (route.name === 'Settings') {
            //     iconName = 'settings';
            // }  
                return <MaterialIcons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#027AFF',
            tabBarInactiveTintColor: 'gray',
          })}
        >
        <Tab.Screen name="Image Maker" component={ImageMakerScreen} />
        <Tab.Screen name="Image Generator" component={ImageGeneratorrScreen} />
        <Tab.Screen name="Camera" component={CameraScreen} />
        {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
        </Tab.Navigator>
      </NavigationContainer>
	//</UsernameContext.Provider>
    );
  }

  const styles = StyleSheet.create({
    screen:{
		padding: 4,
		flex:1,
    },
	header:{
		flex: 1,
		fontSize: 22,
	},
    input: {
      	margin: 5,
		fontSize: 22,
		flexDirection: 'row',
		flex: 1,
		justifyContent:'space-evenly',
    },
	button:{
		alignSelf: 'center',
		width:'100%',
	},
  });
