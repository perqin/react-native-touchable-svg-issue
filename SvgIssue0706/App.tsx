/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Svg from 'react-native-svg';
import IcPin from './ic-pin-grey-2.svg';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <TouchableOpacity
        style={[{backgroundColor: 'green', marginTop: 200}]}
        onPress={() => {
          console.info('press pin');
        }}>
        <View>
          <Svg width={18} height={23}>
            <IcPin />
          </Svg>
        </View>
        <Text>HELLO</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default App;
