import { useChat } from '@/context/ChatContext';
import { messageActionsModalStyles } from '@/styles/components';
import * as Clipboard from 'expo-clipboard';
import React, { useCallback } from 'react';
import {
    Modal,
    Pressable,
    Text,
    View
} from 'react-native';

interface Props {
  visible: boolean;
  onClose: () => void;
  messageId: string;
  messageText: string;
  messageType: 'user' | 'bot' | 'system';
}

export default function MessageActionsModal({
  visible,
  onClose,
  messageId,
  messageText,
  messageType,
}: Props) {
  const { deleteMessage, setMessageValue, inputRef } = useChat();

  const handleDelete = () => {
    deleteMessage(messageId);
    onClose();
  };

  const handleEdit = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.blur();
    }
    setMessageValue({ id: messageId, text: messageText });
    onClose();
    if (inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [inputRef, messageId, messageText, onClose, setMessageValue]);

  const handleCopy = async () => {
    await Clipboard.setStringAsync(messageText);
    onClose();
  };

  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}
    >
      <Pressable style={messageActionsModalStyles.overlay} onPress={onClose}>
        <View style={messageActionsModalStyles.modal}>
          <Pressable style={messageActionsModalStyles.option} onPress={handleDelete}>
            <Text style={messageActionsModalStyles.optionText}>Delete</Text>
          </Pressable>
          {messageType === 'user' && (
            <Pressable style={messageActionsModalStyles.option} onPress={handleEdit}>
              <Text style={messageActionsModalStyles.optionText}>Edit</Text>
            </Pressable>
          )}
          <Pressable style={messageActionsModalStyles.option} onPress={handleCopy}>
            <Text style={messageActionsModalStyles.optionText}>Copy</Text>
          </Pressable>
        </View>
      </Pressable>
    </Modal>
  );
}
