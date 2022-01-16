import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useState, useEffect} from 'react';
import API_Links from '../../util/CoinGeckoLinks.json';

const Content = () => {

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
        <View>
            {/* check coin loading and error, if all work well, go ahead to display coin list */}
            {isLoading && <Text>Loading coins...</Text>}
            {fetchError && <Text>{fetchError}</Text>}
            {!fetchError && !isLoading && <Text>{coins.gecko_says}</Text>}
        </View>
    )
}

export default Content

const styles = StyleSheet.create({})
