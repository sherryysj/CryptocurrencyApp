import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/Headers/Header';
import Content from './src/Contents/Content';

export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <Content />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});