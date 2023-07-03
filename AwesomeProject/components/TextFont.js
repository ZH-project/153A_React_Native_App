import React, {useState} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const TextFont = ({text}) => {
    const [textFont, setTextFont] = useState(18);
    const [fontSettings, setFontSettings] = useState(false);

    // Function to update the font size
    const updateFontSize = (newSize) => {
      setTextFont(newSize);
    };
  
    return (
      <View>
        {!fontSettings ? ( <View><TouchableOpacity onPress={() => updateFontSize(textFont + 2)}>
          <Text style={{ fontSize: 20, backgroundColor:'lightpink'  }}>Increase Font Size</Text>
        </TouchableOpacity>
  
        <TouchableOpacity onPress={() => updateFontSize(textFont - 2)}>
          <Text style={{ fontSize: 20 , backgroundColor:'lightgreen' }}>Decrease Font Size</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setFontSettings(true)}>
          <Text style={{ fontSize: 20 , backgroundColor:'skyblue' }}>Close</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: textFont }}>{text}</Text>
         </View>):
        (<View>
            <TouchableOpacity onPress={() => setFontSettings(false)}>
            <Text style={{ fontSize: textFont }}>{text}</Text>
            </TouchableOpacity>
        </View>
        )}
      </View>
    );
  };
  
  export default TextFont;
  