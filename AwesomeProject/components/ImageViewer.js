import { StyleSheet, ImageBackground, Text } from 'react-native';

export default function ImageViewer({ placeholderImageSource, selectedImage, textContent }) {
    const imageSource = selectedImage !== null
    ? { uri: selectedImage }
    : placeholderImageSource;
  return (
    <ImageBackground source={imageSource} style={styles.image} >
      <Text>
        {textContent}
      </Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  tect:{
    position:'absolute',
  },
});
