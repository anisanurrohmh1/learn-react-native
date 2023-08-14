import { StatusBar } from 'expo-status-bar';

import {SafeAreaView, StyleSheet, Platform } from "react-native";

import { Registration } from "./src/screens"
import Flex from './src/screens/flex';

const barStyle = Platform.OS === "ios" ? "dark-content" : "light-content";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Welcome on Anisa App</Text>
    //   <StatusBar style="auto" />
    // </View>

     <SafeAreaView style={styles.container}>
      <StatusBar barStyle={barStyle}/>
      <Flex/>
     </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
