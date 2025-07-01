import { StyleSheet } from 'react-native';
import { Colors, Dimensions } from '../shared';

export const introOverlayStyles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
  arrowWrapper: {
    height: 144,
    width: 58,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 110,
    marginBottom: Dimensions.spacing.lg,
  },
  text: {
    color: Colors.white,
    fontSize: Dimensions.fontSize.md,
    textAlign: 'center',
    fontWeight: '500',
  },
}); 