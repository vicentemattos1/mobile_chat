import { chatMessageStyles } from '@/styles/components';
import { MessageType } from '@/styles/shared';
import React, { useState } from 'react';
import {
    NativeSyntheticEvent,
    Text,
    TextLayoutEventData,
    View,
} from 'react-native';

interface ChatMessageProps {
  text: string;
  type: MessageType;
}

export default function ChatMessage({ text, type }: ChatMessageProps) {
  const [expanded, setExpanded] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);

  const handleTextLayout = (e: NativeSyntheticEvent<TextLayoutEventData>) => {
    if (e.nativeEvent.lines.length > 4 && !expanded) {
      setShowReadMore(true);
    }
  };

  const parseFormattedText = (
    text: string,
    normalStyle: any,
    highlightStyle: any
  ) => {
    const parts = text.split(/(\*[^*]+\*)/g);
    return parts.map((part, index) => {
      if (/^\*[^*]+\*$/.test(part)) {
        return (
          <Text key={index} style={[normalStyle, highlightStyle]}>
            {part}
          </Text>
        );
      }
      return (
        <Text key={index} style={normalStyle}>
          {part}
        </Text>
      );
    });
  };

  if (type === 'system') {
    return (
      <View style={chatMessageStyles.systemWrapper}>
        <Text
          style={chatMessageStyles.systemText}
          numberOfLines={expanded ? undefined : 4}
          ellipsizeMode="tail"
          onTextLayout={handleTextLayout}
        >
          {parseFormattedText(text, chatMessageStyles.systemText, chatMessageStyles.highlight)}
        </Text>
        {!expanded && showReadMore && (
          <Text style={chatMessageStyles.readMore} onPress={() => setExpanded(true)}>
            Read More
          </Text>
        )}
      </View>
    );
  }

  const isUser = type === 'user';

  return (
    <View
      style={[
        chatMessageStyles.messageWrapper,
        isUser ? chatMessageStyles.userAlign : chatMessageStyles.botAlign,
      ]}
    >
      <View
        style={[chatMessageStyles.bubble, isUser ? chatMessageStyles.userBubble : chatMessageStyles.botBubble]}
      >
        <Text style={chatMessageStyles.messageText}>
          {parseFormattedText(text, chatMessageStyles.messageText, chatMessageStyles.highlight)}
        </Text>
      </View>
    </View>
  );
}
