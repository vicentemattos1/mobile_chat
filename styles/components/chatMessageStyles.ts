import { StyleSheet } from 'react-native';
import { Colors, Dimensions } from '../shared';

export const chatMessageStyles = StyleSheet.create({
  messageWrapper: {
    marginVertical: Dimensions.spacing.xs,
  },
  userAlign: {
    alignItems: 'flex-end',
  },
  botAlign: {
    alignItems: 'flex-start',
  },
  bubble: {
    maxWidth: '85%',
    padding: Dimensions.spacing.md,
    borderRadius: Dimensions.borderRadius.lg,
  },
  userBubble: {
    backgroundColor: Colors.userBubble,
  },
  botBubble: {
    backgroundColor: Colors.botBubble,
  },
  messageText: {
    fontSize: Dimensions.fontSize.md,
    color: Colors.black,
  },
  systemWrapper: {
    backgroundColor: Colors.systemBubble,
    opacity: 0.8,
    borderRadius: Dimensions.borderRadius.lg,
    padding: Dimensions.spacing.md,
    marginVertical: Dimensions.spacing.xs,
    maxWidth: '85%',
    alignSelf: 'center',
  },
  systemText: {
    fontSize: Dimensions.fontSize.md,
    color: Colors.white,
    lineHeight: 20,
  },
  highlight: {
    fontStyle: 'italic',
    color: Colors.textTertiary,
  },
  readMore: {
    color: Colors.textMuted,
    fontSize: Dimensions.fontSize.md,
    textDecorationLine: 'underline',
    marginTop: 6,
    alignSelf: 'flex-start',
  },
}); 