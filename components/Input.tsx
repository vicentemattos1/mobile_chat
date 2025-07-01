import { inputStyles } from '@/styles/components';
import { Colors } from '@/styles/shared';
import { LayoutGrid } from 'lucide-react-native';
import React from 'react';
import {
    Pressable,
    TextInput,
    View,
} from 'react-native';

type InputProps = {
  message: { id?: string; text: string };
  inputRef?: React.RefObject<TextInput>;
  setMessage: (message: { id?: string; text: string }) => void;
  onSend: () => void;
};

export function InputBlock({ message, setMessage, onSend, inputRef }: InputProps) {
  return (
    <View style={inputStyles.inputWrapper}>
      <TextInput
        ref={inputRef}
        style={inputStyles.input}
        placeholder="Write a message"
        placeholderTextColor={Colors.textPlaceholder}
        value={message.text}
        onChangeText={(text) => setMessage({ id: message.id, text })}
        onSubmitEditing={onSend} 
        returnKeyType="send"
      />
      <Pressable onPress={onSend} style={inputStyles.sendButton}>
        <LayoutGrid color={Colors.white} />
      </Pressable>
    </View>
  );
}
