import { StyleSheet } from 'react-native';
import { Colors, Dimensions } from '../shared';

export const chatHeaderStyles = StyleSheet.create({
  container: {
    backgroundColor: Colors.transparent,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: Dimensions.avatar.md,
    height: Dimensions.avatar.md,
    borderRadius: Dimensions.avatar.md / 2,
    marginRight: Dimensions.spacing.md,
  },
  name: {
    color: Colors.white,
    fontSize: Dimensions.fontSize.lg,
    fontWeight: 'bold',
  },
  actions: {
    flexDirection: 'row',
    gap: Dimensions.spacing.sm,
  },
  iconBtn: {
    backgroundColor: Colors.semiTransparentGray,
    borderRadius: Dimensions.borderRadius.xl,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    marginTop: Dimensions.spacing.sm,
    alignSelf: 'flex-start',
    backgroundColor: Colors.overlay,
    padding: 10,
    borderRadius: Dimensions.borderRadius.round,
    marginLeft: 48,
    gap: Dimensions.spacing.md,
  },
  statBlock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statIcon: {
    marginRight: Dimensions.spacing.xs,
  },
  statText: {
    color: Colors.white,
    fontSize: Dimensions.fontSize.sm,
  },
}); 