import React, {useState, useContext, useEffect} from 'react';
import {Text, TextInput, Pressable,  SafeAreaView, StyleSheet, Button, Image} from 'react-native';
import UserContext from './UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function TheApp() {
    const userData = useContext(UserContext);
    const [imageURI, setImageURI] = useState('');

    const saveImage = async () => {
        try {
            const uri = imageURI; 
            await AsyncStorage.setItem('image', imageURI);
            setImageURI(imageURI);
            console.log('Image saved successfully!');
        } catch (error) {
            console.log('Error saving image:', error);
        }
    };

    const loadImage = async () => {
        try {
            const storedImageURI = await AsyncStorage.getItem('image');
            setImageURI(storedImageURI);
            console.log('Image loaded successfully!');
        } catch (error) {
            console.log('Error loading image:', error);
        }
    };

    const clearData = async () => {
        try {
          await AsyncStorage.clear()
        } catch(e) {
          console.log("error in clearData ")
          console.dir(e)
        }
  }

   useEffect(() => {saveImage}, [])
  
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.paragraph}>Hello, {userData.username}</Text>
        <Text style={styles.paragraph}>Enter the URI you want to store to your local device.</Text>
        <TextInput style={styles.input}
            placeholder='enter the uri' 
            value={imageURI}
            onChangeText={text => {
                   setImageURI(""+text)
            }}
            onKeyPress={saveImage}
        ></TextInput>
        <Image source={{ uri: imageURI}} style={{ width: 400, height: 300 }} />
        <SafeAreaView style={styles.buttonDir}>
        <Pressable onPress={() => {clearData();setImageURI('')}} style={styles.button}>
          <Text style={styles.buttonText}>Clear</Text>
        </Pressable>
        <Pressable onPress={() => saveImage()} style={styles.button}>
          <Text style={styles.buttonText}>Save</Text>
        </Pressable>
        <Pressable onPress={() => loadImage()} style={styles.button}>
          <Text style={styles.buttonText}>Load</Text>
        </Pressable>
        </SafeAreaView>
      </SafeAreaView>
    );
  }


const styles = StyleSheet.create({
    container: {
      backgroundColor: '#ecf0f1',
      padding: 8,
      margin: 10,
    },
    paragraph: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    input:{
        width: 800,
        height: 40,
        fontSize: 20,
        borderColor: 'yellowgreen',
        borderWidth: 2,
    },
    buttonDir:{
        flexDirection:'row',
    },
    button: {
        borderRadius: 10,
        width: 200,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue',
        margin:10,
    },
    buttonText:{
        fontSize:24,
        fontWeight:'bold',
    },
  });