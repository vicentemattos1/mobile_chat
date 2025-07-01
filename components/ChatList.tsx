import { Message, useChat } from '@/context/ChatContext';
import { chatListStyles } from '@/styles/components';
import { Colors } from '@/styles/shared';
import React, { useRef, useState } from 'react';
import {
  ActivityIndicator,
  NativeScrollEvent,
  NativeSyntheticEvent,
  PanResponder,
  PanResponderGestureState,
  Pressable,
  Text,
  View
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import ChatHeader from './ChatHeader';
import ChatMessage from './ChatMessage';
import MessageActionsModal from './MessageActionsModal';

export default function ChatList() {
  const {
    state: { messages, status },
    switchCharacter,
  } = useChat();

  const listRef = useRef<FlatList>(null);
  const [isAtBottom, setIsAtBottom] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const openMessageOptions = (message: Message) => {
    setSelectedMessage(message);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedMessage(null);
    setModalVisible(false);
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset } = event.nativeEvent;
    const atVisualBottom = contentOffset.y <= 10;
    setIsAtBottom(atVisualBottom);
  };

  const handleScrollEndDrag = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const velocityY = event.nativeEvent.velocity?.y ?? 0;
    if (isAtBottom && velocityY > 1) {
      switchCharacter();
    }
  };

  // PanResponder detecta swipe mesmo sem scroll
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (_, gestureState) => {
      return gestureState.dy < -10; // movimento vertical para cima
    },
    onPanResponderEnd: (_, gestureState: PanResponderGestureState) => {
      if (isAtBottom && gestureState.vy < -0.8) {
        switchCharacter();
      }
    },
  });

  return (
    <View style={chatListStyles.wrapper} {...panResponder.panHandlers}>
      <ChatHeader />
      {status === 'loading' ? (
        <View style={chatListStyles.loadingWrapper}>
          <View style={chatListStyles.loader}>
            <ActivityIndicator size="small" color={Colors.textSecondary} />
            <Text style={chatListStyles.loadingText}>Loading...</Text>
          </View>
        </View>
      ) : (
        <FlatList
          ref={listRef}
          style={{ flex: 1 }}
          contentContainerStyle={chatListStyles.listContent}
          keyboardShouldPersistTaps="handled"
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pressable onLongPress={() => openMessageOptions(item)}>
              <ChatMessage key={item.id} text={item.text} type={item.type} />
            </Pressable>
          )}
          inverted
          onScroll={handleScroll}
          onScrollEndDrag={handleScrollEndDrag}
          scrollEventThrottle={16}
        />
      )}

      {selectedMessage && (
        <MessageActionsModal
          visible={isModalVisible}
          onClose={closeModal}
          messageId={selectedMessage.id}
          messageText={selectedMessage.text}
          messageType={selectedMessage.type}
        />
      )}
    </View>
  );
}
