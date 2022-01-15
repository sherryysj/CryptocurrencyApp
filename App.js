import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/Headers/Header';
import { useState, useEffect} from 'react';
import API_Links from './util/CoinGeckoLinks.json';

export default function App() {

  const [coins, setCoins] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCoins = async () => {
    try {
      const response = await fetch(API_Links.CoingeckoPing);
      if (!response.ok) throw Error('Did not receive expected data');
      const coinList = await response.json();
      setCoins(coinList);
      setFetchError(null);
    } catch (err){
      setFetchError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCoins();
  },[])

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      {isLoading && <Text>Loading coins...</Text>}
      {fetchError && <Text>{fetchError}</Text>}
      <Text>{coins.gecko_says}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});