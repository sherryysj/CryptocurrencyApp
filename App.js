import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/Headers/Header';
import Content from './src/Contents/Content';
import { useState, useEffect} from 'react';

export default function App() {

  const [serverState,setServerState] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  const fetchServer = async () => {
    try {
      const response = await fetch(API_Links.CoingeckoPing);
      if (!response.ok) throw Error('The server does not respond');
      const serverState = await response.json();
      setServerState(serverState);
      setFetchError(null);
    } catch (err){
      setFetchError(err.message);
    }
  };

  useEffect(() => {
    fetchServer();
  },[])

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />

      {/* check server, if server works, go ahead to call content, otherwise, show server error message */}
      {serverState ? <Content /> : <Text>{fetchError}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});