import { globalGradientStyles } from '@/styles/components';
import { LinearGradient } from 'expo-linear-gradient';
import { View } from 'react-native';

export function GlobalGradient() {
  return (
    <View style={globalGradientStyles.container}>
      <LinearGradient
        colors={['#09090B', '#09090B00']}
        start={{ x: 0, y: -1 }}
        end={{ x: 0, y: 1 }}
        style={globalGradientStyles.gradient}
      />
      <LinearGradient
        colors={['#09090B', '#09090B00']}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        style={globalGradientStyles.gradient}
      />
    </View>
  );
}