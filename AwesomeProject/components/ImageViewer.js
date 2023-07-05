import { StyleSheet, ImageBackground, } from 'react-native';

export default function ImageViewer({ placeholderImageSource, selectedImage, }) {
    const imageSource = selectedImage !== null
    ? { uri: selectedImage }
    : placeholderImageSource;
  return (
    <ImageBackground source={imageSource} style={styles.image} >
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 420,
    borderRadius: 18,
  },
  container:{
    borderWidth: 2,
    borderColor: 'red',
  },
});
