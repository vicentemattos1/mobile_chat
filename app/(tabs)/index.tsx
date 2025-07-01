import ChatList from '@/components/ChatList';
import { InputBlock } from '@/components/Input';
import { useChat } from '@/context/ChatContext';
import { homeStyles } from '@/styles/pages';
import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  View
} from 'react-native';

export default function HomeScreen() {
  const {
    sendMessage,
    messageValue,
    setMessageValue,
    inputRef,
  } = useChat();

  const handleSend = () => {
    if (!messageValue?.text.trim()) return;
    sendMessage(messageValue.text.trim());
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
      <View style={homeStyles.container}>
        <ChatList />
        <InputBlock
          message={messageValue}
          setMessage={setMessageValue}
          onSend={handleSend}
          inputRef={inputRef}
        />
      </View>
    </KeyboardAvoidingView>
  );
}
