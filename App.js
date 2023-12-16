import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Home from './src/view/home';
import Navbar from './src/component/navbar';

export default function App() {
  return (
    <View>
      <Navbar/>
      {/* <StatusBar style="auto" /> */}
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
 
});
