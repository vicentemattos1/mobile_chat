import { TextStyle, ViewStyle } from 'react-native';

export type StyleVariant = 'primary' | 'secondary' | 'tertiary';

export type MessageType = 'user' | 'bot' | 'system';

export interface BaseStyle {
  container?: ViewStyle;
  text?: TextStyle;
}

export interface ThemeColors {
  readonly primary: string;
  readonly transparent: string;
  readonly overlay: string;
  readonly overlayLight: string;
  readonly semiTransparentGray: string;
  readonly white: string;
  readonly black: string;
  readonly textSecondary: string;
  readonly textTertiary: string;
  readonly textPlaceholder: string;
  readonly textMuted: string;
  readonly userBubble: string;
  readonly botBubble: string;
  readonly systemBubble: string;
  readonly shadowColor: string;
} 