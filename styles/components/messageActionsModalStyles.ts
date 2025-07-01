import { StyleSheet } from 'react-native';
import { Colors, Dimensions } from '../shared';

export const messageActionsModalStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: Colors.overlayLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: Colors.white,
    padding: Dimensions.spacing.xl,
    borderRadius: Dimensions.borderRadius.md,
    width: '70%',
    ...Dimensions.modal,
  },
  option: {
    paddingVertical: 10,
  },
  optionText: {
    fontSize: Dimensions.fontSize.md,
    color: Colors.textSecondary,
  },
}); 