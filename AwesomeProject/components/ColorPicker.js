import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, Modal } from 'react-native';
import Slider from '@react-native-community/slider';

const ColorPicker = ({setTextColor, setColorSettings}) => {
  const [red, setRed] = useState(255);
  const [green, setGreen] = useState(255);
  const [blue, setBlue] = useState(255);
  const [modalVisible, setModalVisible] = useState(true);


  const handleColorChange = (color, value) => {
    switch (color) {
      case 'red':
        setRed(value);
        break;
      case 'green':
        setGreen(value);
        break;
      case 'blue':
        setBlue(value);
        break;
      default:
        break;
    }
  };

  const color = `rgb(${red}, ${green}, ${blue})`;

  return (
    <SafeAreaView style={styles.container}>
    <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={false}
      >
      <SafeAreaView style={[styles.colorBox, { backgroundColor: color }]} />

      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={255}
        value={red}
        onValueChange={(value) => handleColorChange('red', value)}
      />

      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={255}
        value={green}
        onValueChange={(value) => handleColorChange('green', value)}
      />

      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={255}
        value={blue}
        onValueChange={(value) => handleColorChange('blue', value)}
      />

    <TouchableOpacity onPress={()=>{setTextColor(color); setModalVisible(false); setColorSettings(false)}} >
    <Text style={{ fontSize: 20, backgroundColor:'white', marginLeft: '45%',
    marginTop: '15%'}} >Save</Text></TouchableOpacity>
    </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  colorBox: {
    width: '50%',
    height: '25%',
    marginLeft: '25%',
    marginTop: '25%',
  },
  slider: {
    width: 200,
    marginLeft: '25%',
    marginTop: '15%',
  },
  colorText: {
    fontSize: 18,
  },
});

export default ColorPicker;
