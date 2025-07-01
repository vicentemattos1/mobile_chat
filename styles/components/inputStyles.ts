import { StyleSheet } from 'react-native';
import { Colors, Dimensions } from '../shared';

export const inputStyles = StyleSheet.create({
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    maxHeight: Dimensions.inputHeight,
    height: '100%',
    backgroundColor: Colors.semiTransparentGray,
    borderRadius: Dimensions.borderRadius.md,
  },
  input: {
    margin: Dimensions.spacing.md,
    flex: 1,
    color: Colors.white,
    height: '100%',
    fontSize: Dimensions.fontSize.md,
  },
  sendButton: {
    padding: 10,
    borderRadius: Dimensions.borderRadius.round,
  },
}); 