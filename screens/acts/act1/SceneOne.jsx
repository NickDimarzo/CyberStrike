import react from 'react';
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

export default function SceneOne() {
  // Lock the orientation to landscape
  Orientation.lockToLandscape();

  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../../../assets/images/scene_one_backround.png')}
      style={{flex: 1}}>
      <Pressable onPress={() => navigation.navigate('Home')}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Action 1</Text>
        </View>
      </Pressable>
      <Pressable>
        <ImageBackground
          source={require('../../../images/cyberStrikeImages/assets/buttonIndividual.png')}
          style={styles.test}
          >
          <Text>Test</Text>
        </ImageBackground>
      </Pressable>
      <Pressable>
        <ImageBackground
          source={require('../../../images/cyberStrikeImages/assets/buttonIndividual.png')}
          >
          <Text>Test</Text>
        </ImageBackground>
      </Pressable>
    </ImageBackground>
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
    width: 100,
  },
  buttonText: {
    fontSize: 10,
    color: 'white',
    textAlign: 'center',
  },
  test: {
   
    
  },
});
