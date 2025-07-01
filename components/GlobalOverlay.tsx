import { globalOverlayStyles } from '@/styles/components';
import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";

export function GlobalOverlay(){
  return (
    <View style={globalOverlayStyles.container}>
      <LinearGradient
        colors={['#09090B', '#09090B00']} 
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={globalOverlayStyles.gradient}
      />
      <LinearGradient
        colors={['#09090B', '#09090B00']} 
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        style={globalOverlayStyles.gradient}
      />
    </View>
  )
}