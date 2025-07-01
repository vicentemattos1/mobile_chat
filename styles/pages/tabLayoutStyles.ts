import { StyleSheet } from 'react-native';
import { Colors } from '../shared';

export const tabLayoutStyles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    position: 'relative',
  },
  tabBarStyle: {
    backgroundColor: Colors.transparent,
    elevation: 0,
  },
  sceneStyle: {
    backgroundColor: Colors.transparent,
  },
}); 