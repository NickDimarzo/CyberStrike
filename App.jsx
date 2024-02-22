/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

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
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Orientation from 'react-native-orientation-locker';

function App() {
  // Lock the orientation to landscape
  Orientation.lockToLandscape();

  // Get the navigation object
  const navigation = useNavigation();

  // alerts the user when the button is pressed
 const _onPressButton = () => {
    navigation.navigate('');
  };

  return (
    <SafeAreaView style={styles.backgroundColor}>
      <View>
        <Text style={styles.title}>Cyber Strike</Text>
        <View style= {styles.container}>
          <Image
            source={require('./assets/images/title_image.jpg')}
            style={styles.image}
          />
        <TouchableHighlight onPress={_onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Start Game</Text>
          </View>
        </TouchableHighlight>
        <Image
            source={require('./assets/images/title_image.jpg')}
            style={[styles.image, {transform: [{scaleX: -1}]}]}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: '#d3d3d3',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    backgroundColor : 'white',
  },
  image: {
    width: 200,
    height: 300,
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
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  
  },
});

export default App;
