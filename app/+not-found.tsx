import { notFoundStyles } from '@/styles/pages';
import { Link, Stack } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View style={notFoundStyles.container}>
        <Text style={notFoundStyles.title}>This screen does not exist.</Text>
        <Link href="/" style={notFoundStyles.link}>
          <Text style={notFoundStyles.linkText}>Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}
