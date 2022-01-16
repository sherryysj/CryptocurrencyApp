import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect} from 'react';
import API_Links from '../../util/CoinGeckoLinks.json';
import CoinList from './CoinList';
import Search from './Search';

const Content = () => {

    const [coins, setCoins] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState("");
  
    const fetchCoins = async () => {
      try {
        const response = await fetch(API_Links.CoinMarketsUSD);
        if (!response.ok) throw Error('Did not receive coins data from the server, please reload the App');
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

            <Search 
                search = {search}
                setSearch= {setSearch}
            />

            {/* check coin loading and error, if all work well, go ahead to display coin list */}
            {isLoading && <Text>Loading coins...</Text>}
            {fetchError && <Text>{fetchError}</Text>}
            {!fetchError && !isLoading && 
                <CoinList 
                    coins = {coins.filter(item=>((item.id).toLowerCase()).includes(search.toLowerCase()))}
                /> 
            }

        </View>
    )
}

export default Content

const styles = StyleSheet.create({})
