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
    const [currency, setCurrency] = useState("USD");
  
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

    const filterCoins= () => {

        const filterByName = coins.filter(item=>((item.name).toLowerCase()).includes(search.toLowerCase()));
        const filterBySymbol = coins.filter(item=>((item.symbol).toLowerCase()).includes(search.toLowerCase()));
        const coinsFiltered = filterByName.concat(filterBySymbol.filter((item) => filterByName.indexOf(item) < 0));

        if (!coinsFiltered) {
            return coins;
        } else {
            return coinsFiltered;
        }

    }

    return (
        <View style={styles.container}>

            <Search 
                search = {search}
                setSearch= {setSearch}
            />

            {/* check coin loading and error, if all work well, go ahead to display coin list */}
            {isLoading && <Text>Loading coins...</Text>}
            {fetchError && <Text>{fetchError}</Text>}
            {!fetchError && !isLoading && 
                <CoinList 
                    coins = {filterCoins()}
                    currency = {currency}
                /> 
            }

        </View>
    )
}

export default Content

const styles = StyleSheet.create({})
