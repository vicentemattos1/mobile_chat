import { useChat } from '@/context/ChatContext';
import { chatHeaderStyles } from '@/styles/components';
import { Colors, Dimensions } from '@/styles/shared';
import { Heart, Menu, MessageCircle, Phone } from 'lucide-react-native';
import React from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function ChatHeader() {
  const {
    state: { name, profile_pic_url },
  } = useChat();

  return (
    <View style={chatHeaderStyles.container}>
      <View style={chatHeaderStyles.topRow}>
        <View style={chatHeaderStyles.left}>
          <Image source={{ uri: profile_pic_url }} style={chatHeaderStyles.avatar} />
          <Text style={chatHeaderStyles.name}>{name}</Text>
        </View>
        <View style={chatHeaderStyles.actions}>
          <TouchableOpacity style={chatHeaderStyles.iconBtn}>
            <Phone size={Dimensions.icon.md} color={Colors.white} />
          </TouchableOpacity>
          <TouchableOpacity style={chatHeaderStyles.iconBtn}>
            <Menu size={Dimensions.icon.md} color={Colors.white} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={chatHeaderStyles.statsContainer}>
        <View style={chatHeaderStyles.statBlock}>
          <Heart size={Dimensions.icon.sm} color={Colors.white} style={chatHeaderStyles.statIcon} />
          <Text style={chatHeaderStyles.statText}>1.2k</Text>
        </View>
        <View style={chatHeaderStyles.statBlock}>
          <MessageCircle size={Dimensions.icon.sm} color={Colors.white} style={chatHeaderStyles.statIcon} />
          <Text style={chatHeaderStyles.statText}>34.2k</Text>
        </View>
      </View>
    </View>
  );
}
