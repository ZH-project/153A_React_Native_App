import React, {useState} from 'react';
import { Text, SafeAreaView, TouchableOpacity} from 'react-native';
import ColorPicker from './ColorPicker';


const TextSettings = ({text}) => {
  const [textFont, setTextFont] = useState(18);
  const [textColor, setTextColor] = useState("#000000");
  const [textSettings, setTextSettings] = useState(false);
  const [colorSettings, setColorSettings] = useState(false);

  const openColorSlider = () => {
    setColorSettings(true)
  }
  const closeColorSlider = () => {
    setColorSettings(false)
  }

  return (
    <SafeAreaView>
      {!textSettings ? ( <SafeAreaView>
        <TouchableOpacity onPress={() => setTextFont(textFont + 2)}>
        <Text style={{ fontSize: 20, backgroundColor:'lightpink'  }}>Increase Font Size</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setTextFont(textFont - 2)}>
          <Text style={{ fontSize: 20 , backgroundColor:'lightgreen' }}>Decrease Font Size</Text>
        </TouchableOpacity>
        
        {!colorSettings ? (
          <TouchableOpacity onPress={() => setColorSettings(true)}>
          <Text style={{ fontSize: 20 , backgroundColor:'white' }}>Change Color</Text>
        </TouchableOpacity>) : (<><TouchableOpacity onPress={() => setColorSettings(false)}>
          <Text style={{ fontSize: 20 , backgroundColor:'white' }}>Done</Text>  
          </TouchableOpacity>
          <ColorPicker
          textColor={textColor}
          setTextColor={setTextColor}
        /></>
       )
        
        }

        <TouchableOpacity onPress={() => setTextSettings(true)}>
          <Text style={{ fontSize: 20 , backgroundColor:'skyblue' }}>Close</Text>
        </TouchableOpacity>

        <Text style={{ fontSize: textFont, color: textColor }}>{text}</Text>
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
  