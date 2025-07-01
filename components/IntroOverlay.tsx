import { introOverlayStyles } from '@/styles/components';
import { Colors, Dimensions } from '@/styles/shared';
import { ChevronsUp } from 'lucide-react-native';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, Text, View } from 'react-native';

export default function IntroOverlay() {
  const [visible, setVisible] = useState(true);
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          toValue: -10,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    ).start();

    const timeout = setTimeout(() => {
      setVisible(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  if (!visible) return null;

  return (
    <View style={introOverlayStyles.overlay}>
      <Animated.View style={[introOverlayStyles.arrowWrapper, { transform: [{ translateY: animation }] }]}>
        <ChevronsUp size={Dimensions.icon.lg} color={Colors.white} />
      </Animated.View>
      <Text style={introOverlayStyles.text}>Swipe to move{'\n'}to the next chat</Text>
    </View>
  );
}
