import { View, Image, Text } from 'react-native';
import { PanGestureHandler, TapGestureHandler} from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useAnimatedGestureHandler,
  withSpring,
} from 'react-native-reanimated';


const AnimatedView = Animated.createAnimatedComponent(View);

export default function InputText({ textSize, text}) {
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);
    const scaleText = useSharedValue(textSize);

    const onDoubleTap = useAnimatedGestureHandler({
        onActive: () => {
          if (scaleText.value !== textSize * 2) {
            scaleText.value = scaleText.value * 2;
          }
        },
      });

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
            {
                translateX: translateX.value,
            },
            {
                translateY: translateY.value,
            },
            ],
        };
        });

    const textStyle = useAnimatedStyle(() => {
    return {
        width: withSpring(scaleText.value),
        height: withSpring(scaleText.value),
    };
    });

  return (
    <PanGestureHandler onGestureEvent={onDrag}>
      <AnimatedView style={[containerStyle, { top: -350 }]}>
      <TapGestureHandler onGestureEvent={onDoubleTap} numberOfTaps={2}>
        <Text> {text}</Text>
      </TapGestureHandler>
      </AnimatedView>
    </PanGestureHandler>
  );
}
