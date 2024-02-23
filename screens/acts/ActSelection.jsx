import React from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  useColorScheme,
  View,
  ImageBackground,
} from 'react-native';
import Orientation from 'react-native-orientation-locker';
import {useNavigation} from '@react-navigation/native';

export default function ActSelection() {
  // Lock the screen in landscape mode
  Orientation.lockToLandscape();

  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View>
        <Pressable onPress={() => navigation.navigate('SceneOne')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Act 1</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Act 2</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Act 3</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: '#d3d3d3',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    margin: 20,
    borderRadius: 10,
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  },
});