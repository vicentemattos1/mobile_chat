import { Tabs } from 'expo-router';
import React from 'react';

import { GlobalOverlay } from '@/components/GlobalOverlay';
import { HapticTab } from '@/components/HapticTab';
import { tabLayoutStyles } from '@/styles/pages';
import { Colors } from '@/styles/shared';
import {
  CirclePlus,
  Home,
  MessageCircle,
  Search,
  UserRound,
} from 'lucide-react-native';
import { ImageBackground } from 'react-native';

export default function TabLayout() {
  return (
    <ImageBackground
      source={require('@/assets/images/image.jpg')}
      resizeMode="cover"
      style={tabLayoutStyles.backgroundImage}
    >
      <GlobalOverlay/>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors.primary,
          headerShown: false,
          tabBarButton: HapticTab,
          sceneStyle: tabLayoutStyles.sceneStyle,
          tabBarStyle: tabLayoutStyles.tabBarStyle,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <Home color={color} size={24}/>,
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            title: 'Search',
            tabBarIcon: ({ color }) => <Search color={color} size={24}/>,
            tabBarButton: (props) => (
              <HapticTab
                {...props}
                disabled
              />
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: 'Create',
            tabBarIcon: ({ color }) => <CirclePlus color={color} size={24}/>,
            tabBarButton: (props) => (
              <HapticTab
                {...props}
                disabled
              />
            ),
          }}
        />
        <Tabs.Screen
          name="messages"
          options={{
            title: 'Messages',
            tabBarIcon: ({ color }) => <MessageCircle color={color} size={24}/>,
            tabBarButton: (props) => (
              <HapticTab
                {...props}
                disabled
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color }) => <UserRound color={color} size={24}/>,
            tabBarButton: (props) => (
              <HapticTab
                {...props}
                disabled
              />
            ),
          }}
        />
      </Tabs>
    </ImageBackground>
  );
}



