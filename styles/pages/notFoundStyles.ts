import { StyleSheet } from 'react-native';
import { Colors, Dimensions } from '../shared';

export const notFoundStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: Dimensions.spacing.xl,
  },
  title: {
    fontSize: Dimensions.fontSize.lg + 6, // 24px
    fontWeight: 'bold',
    marginBottom: 10,
    color: Colors.textSecondary,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: Dimensions.fontSize.md,
    color: Colors.primary,
    textDecorationLine: 'underline',
  },
}); 