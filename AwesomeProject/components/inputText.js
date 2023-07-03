import { View} from 'react-native';
import { PanGestureHandler} from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useAnimatedGestureHandler,
  withSpring,
} from 'react-native-reanimated';
import TextFont from './TextFont';


const AnimatedView = Animated.createAnimatedComponent(View);

export default function InputText({text}) {
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);

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


  return (
    <PanGestureHandler onGestureEvent={onDrag}>
      <AnimatedView style={[containerStyle, { top: -350 }]}>
        <TextFont text={text}/>
      </AnimatedView>
    </PanGestureHandler>
  );
}
