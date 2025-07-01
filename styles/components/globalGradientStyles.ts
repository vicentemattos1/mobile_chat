import { StyleSheet } from 'react-native';

export const globalGradientStyles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'column',
    justifyContent: 'space-between',
    zIndex: 1,
  },
  gradient: {
    height: 370,
    width: '100%',
  },
}); 