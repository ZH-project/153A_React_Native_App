import React, { useState, useEffect, useRef } from 'react';
import {SafeAreaView,StyleSheet,Text,TextInput,TouchableOpacity,View,Image, Keyboard} from "react-native";
import { Ionicons} from '@expo/vector-icons';
import { Configuration, OpenAIApi } from "openai";
import open_api_key from './open_api_key'; 
import "react-native-url-polyfill/auto";
import * as MediaLibrary from 'expo-media-library';
import { captureRef } from 'react-native-view-shot';

export default function ImageGenerator() {
    const [prompt, onChangePrompt] = useState("");
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);
    const PlaceholderImage = require('./../assets/images/background.png');
    const imageRef = useRef();
  
    const configuration = new Configuration({
      apiKey: open_api_key,
    });
  
    const openai = new OpenAIApi(configuration);
  
    const generateImage = async () => {
      try {
        const updatedPrompt = `Generate ${prompt}..`;
        onChangePrompt(updatedPrompt); 
        
        setLoading(true);
        const res = await openai.createImage({
          prompt: prompt,
          n: 1,
          size: "256x256",
        });
        setResult(res.data.data[0].url);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    const onSaveImageAsync = async () => {
        try {
            const localUri = await captureRef(imageRef, {
            height: 420,
            quality: 1,
        });
        await MediaLibrary.saveToLibraryAsync(localUri);
        if (localUri) {
          alert("Saved!");
        }
        } catch (e) {
        console.log(e);
        }
    };  
  
    return (
      <SafeAreaView style={styles.container}>
          <Text style={styles.title}>Dalle-E</Text>
          <View style={styles.textinput}>
            <TextInput
              onChangeText={onChangePrompt}
              value={prompt}
              backgroundColor='#D0F5BE' 
              style={styles.textinput}
              onSubmitEditing={Keyboard.dismiss}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={generateImage}>
            <Ionicons name='checkmark' size={26} color="#000" />
            <Text style={{fontSize:20, color:'#000'}}>Submit</Text>
          </TouchableOpacity>
          {loading ? (
            <>
              <View >
                <Text>Generating...</Text>
              </View>
            </>
          ) : (
            <></>
          )}
  
          <View style={styles.imagecontainer}>
          {result.length > 0 ? (
            <TouchableOpacity onPress={onSaveImageAsync} ref={imageRef} collapsable={false}>
            <Image
              style={styles.imagecontainer}
              source={{
                uri: result
              }}
            />
            </TouchableOpacity>
          ) : (
            <>
              <Image
                style={styles.imagecontainer}
                source={{PlaceholderImage}}/>
            </>
          )}
            
          </View>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems:"center",
        justifyContent:'center',
        
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        color:'#000',
    },
    button:{
        flexDirection:'row',
        justifyContent:'center'
    },
    textinput:{
        width:"80%",
        height:"40%",
        justifyContent:'center',
        alignItems:"center",
        
    },
    imagecontainer:{
        width:256,
        height:256,
    },
  });