import { StyleSheet } from 'react-native';
import { Colors, Dimensions } from '../shared';

export const chatListStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: '100%',
    marginBottom: Dimensions.spacing.lg,
  },
  loadingWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  listContent: {
    flexGrow: 1,
    paddingBottom: Dimensions.spacing.sm,
  },
  loader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Dimensions.spacing.md,
    backgroundColor: Colors.white,
    paddingVertical: Dimensions.spacing.md,
    paddingHorizontal: Dimensions.spacing.lg,
    borderRadius: Dimensions.borderRadius.sm,
    alignSelf: 'center',
    ...Dimensions.shadow,
  },
  loadingText: {
    fontSize: Dimensions.fontSize.md,
    color: Colors.textSecondary,
    fontWeight: '500',
  },
}); 