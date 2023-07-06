import { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Keyboard} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import ImageViewer from './ImageViewer';
import Button from './Button';
import CircleButton from './CircleButton';
import IconButton from './IconButton';
import { GestureHandlerRootView, TextInput } from "react-native-gesture-handler";
import * as MediaLibrary from 'expo-media-library';
import { captureRef } from 'react-native-view-shot';
import InputText from './inputText';
import SecondImage from './SecondImage';


const PlaceholderImage = require('./../assets/images/background.png');

export default function App() {
    const [status, requestPermission] = MediaLibrary.usePermissions();
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedSecondImage, setSelectedSecondImage] = useState(null);
    const [showAppOptions, setShowAppOptions] = useState(false);
    const imageRef = useRef();
    const [inputText, setInputText] = useState(null);
    
    if (status === null) {
        requestPermission();
      }

    const onReset = () => {
        setInputText(null);
        setSelectedImage(null);
        setSelectedSecondImage(null);
        setShowAppOptions(false);
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

    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
          });

        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
            setShowAppOptions(true);
        } else {
            alert('You did not select any image.');
        }
    };

    const pickSecondImageAsync = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          quality: 1,
        });

      if (!result.canceled) {
          setSelectedSecondImage(result.assets[0].uri);
          setShowAppOptions(true);
      }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
        <View style={styles.imageContainer}>
        <View ref={imageRef} collapsable={false}>
            <ImageViewer
                placeholderImageSource={PlaceholderImage}
                selectedImage={selectedImage}
            />
            {selectedSecondImage !== null ? <SecondImage selectdSecondImage={selectedSecondImage} /> : null}
            {inputText !== null ? <InputText text={inputText} /> : null}
            
        </View>
        </View>
        {showAppOptions ? (<View style={styles.optionsContainer}>
            <TextInput 
                style={{fontSize:30, }}
                placeholder='enter text here' 
                value={inputText||""} 
                onChangeText={text => {setInputText(text)}}
                backgroundColor='#D0F5BE' 
                onSubmitEditing={Keyboard.canceled}
            />
            <View style={styles.optionsRow}>
                <IconButton icon="refresh" label="Reset" onPress={onReset} />
                <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
                <IconButton icon="add-a-photo" label="Add" onPress={pickSecondImageAsync}/>
            </View>
            </View>
            ) : (
            <View style={styles.footerContainer}>
            <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
            <Button theme='secondary' label="Use this photo" onPress={() => setShowAppOptions(true)} />
            {/* <Button theme="secondary" label="Take a photo" /> */}
            </View>
        )}
        <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 30,
  },
  image: {
    width: 320,
    height: 420,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 5/12,
    alignItems: 'center',
  },
  optionsContainer: {
    position:'relative',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
    top: 30,
  },
});
