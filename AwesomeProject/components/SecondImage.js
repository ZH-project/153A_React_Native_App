import React, { useState } from 'react';
import { ImageBackground, View } from 'react-native';
import { PanGestureHandler, PinchGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useAnimatedGestureHandler,
  withSpring,
} from 'react-native-reanimated';
import ImageSettings from './ImageSettings';

const AnimatedView = Animated.createAnimatedComponent(View);

export default function SecondImage({ selectdSecondImage }) {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const scale = useSharedValue(1);
  const [imageSize, setImageSize] = useState({ width: 200, height: 200 });

  const secondImage = selectdSecondImage !== null
    ? { uri: selectdSecondImage }
    : placeholderImageSource;

  const onDrag = useAnimatedGestureHandler({
    onStart: (event, context) => {
      context.translateX = translateX.value;
      context.translateY = translateY.value;
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.translateX;
      translateY.value = event.translationY + context.translateY;
    },
  });

  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { scale: scale.value },
      ],
    };
  });


  return (
    <PanGestureHandler onGestureEvent={onDrag}>
      <AnimatedView style={[containerStyle, { top: -200 }]}>
        {/* <ImageBackground style={{ width: imageSize.width, height: imageSize.height }} source={secondImage} /> */}
        <ImageSettings image={secondImage} />
      </AnimatedView>
    </PanGestureHandler>
  );
}

