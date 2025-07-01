import { StyleSheet } from 'react-native';

export const globalOverlayStyles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    position: 'absolute',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
    top: 0,
    left: 0,
  },
  gradient: {
    width: '100%',
    height: 370,
  },
}); 