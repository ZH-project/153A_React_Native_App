import React, {useState} from 'react';
import { Text, SafeAreaView, TouchableOpacity} from 'react-native';
import ColorPicker from './ColorPicker';
import { Ionicons} from '@expo/vector-icons';

const TextSettings = ({text}) => {
  const [textFont, setTextFont] = useState(18);
  const [textColor, setTextColor] = useState("#fff");
  const [textSettings, setTextSettings] = useState(false);
  const [colorSettings, setColorSettings] = useState(false);


  return (
    <SafeAreaView>
      {!textSettings ? ( <SafeAreaView>
        <SafeAreaView style={{flexDirection:'row'}}>
        <TouchableOpacity style={{marginRight: 45, marginBottom: 10}} onPress={() => setTextFont(textFont + 2)}>
        {/* <Text style={{ fontSize: 20, backgroundColor:'lightpink'  }}>Increase Font Size</Text> */}
        <Ionicons name='add' size={32} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={{marginRight: 45, marginBottom: 10}} onPress={() => setTextFont(textFont - 2)}>
          {/* <Text style={{ fontSize: 20 , backgroundColor:'lightgreen' }}>Decrease Font Size</Text> */}
          <Ionicons name='remove' size={32} color="#fff" />
        </TouchableOpacity>
        
        <TouchableOpacity style={{marginRight: 45, marginBottom: 10}} onPress={() => setColorSettings(true)}>
          <Ionicons name='brush' size={32} color="#fff" />
          {colorSettings && (<ColorPicker
          setColorSettings={setColorSettings}
          setTextColor={setTextColor}
        />)}
        </TouchableOpacity> 
        </SafeAreaView>

        <TouchableOpacity onPress={() => setTextSettings(true)}>
          <Text style={{ fontSize: textFont, color: textColor }}>{text}</Text>
        </TouchableOpacity>
        </SafeAreaView>):
      (<SafeAreaView>
          <TouchableOpacity onPress={() => setTextSettings(false)}>
          <Text style={{ fontSize: textFont, color: textColor}}>{text}</Text>
          </TouchableOpacity>
      </SafeAreaView>
      )}
    </SafeAreaView>
    );
  };
  
  export default TextSettings;
  