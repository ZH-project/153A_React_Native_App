import React, {useState} from 'react';
import { Text, SafeAreaView, TouchableOpacity, ImageBackground} from 'react-native';
import { Ionicons, MaterialIcons} from '@expo/vector-icons';


const ImageSettings = ({image}) => {
  const [imageSize, setImageSize] = useState({ width: 200, height: 200 });
  const [imageSettings, setImageSettings] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);


  return (
    <SafeAreaView>
      {!imageSettings ? ( <SafeAreaView>
        <TouchableOpacity onPress={() => setImageSettings(true)}>
        <ImageBackground style={{ width: imageSize.width, height: imageSize.height, transform: [{ rotate: `${rotationAngle}deg` }] }}
         source={image}></ImageBackground>
        </TouchableOpacity>

        <SafeAreaView style={{flexDirection:'row'}}>
        <TouchableOpacity style={{marginRight: 50, marginTop: 15 }} onPress={() => setImageSize({ width: imageSize.width+20, height: imageSize.height+20 })}>
        {/* <Text style={{ fontSize: 20, backgroundColor:'lightpink'  }}>Increase</Text> */}
        <Ionicons name='add' size={32} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={{marginRight: 50, marginTop: 15 }} onPress={() => setImageSize({ width: imageSize.width-20, height: imageSize.height-20 })}>
          {/* <Text style={{ fontSize: 20 , backgroundColor:'lightgreen' }}>Decrease Image Size</Text> */}
          <Ionicons name='remove' size={32} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={{marginRight: 50, marginTop: 15 }} onPress={() => setRotationAngle(rotationAngle +45)}>
          <MaterialIcons name='rotate-right' size={32} color="#fff" />
        </TouchableOpacity>

        </SafeAreaView>
        
        </SafeAreaView>):
      (<SafeAreaView>
         <TouchableOpacity onPress={() => setImageSettings(false)}>
          <ImageBackground style={{ width: imageSize.width, height: imageSize.height, transform: [{ rotate: `${rotationAngle}deg` }]}} 
          source={image} />
        </TouchableOpacity>
      </SafeAreaView>
      )}
    </SafeAreaView>
    );
  };
  
  export default ImageSettings;
  