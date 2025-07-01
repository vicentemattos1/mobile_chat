import { StyleSheet } from 'react-native';
import { Dimensions } from '../shared';

export const homeStyles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    position: 'relative',
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: Dimensions.spacing.md,
    height: '100%',
    alignItems: 'flex-end',
  },
}); 