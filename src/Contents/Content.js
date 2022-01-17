import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState, useEffect} from 'react';
import API_Links from '../../util/CoinGeckoLinks.json';
import CoinList from './CoinList';
import Search from './Search';

const Content = ({currency}) => {

    const [coins, setCoins] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [isVolumnTab, setIsVolumnTab] = useState(false);
  
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

    /*
    setInterval(()=> {
        fetchCoins();
    }, 3000)
    */

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

    const filterByVolumn = () => {
        const coinsFiltered = filterCoins();
        return coinsFiltered;
    }

    const toCoinList = () => {
        setIsVolumnTab(false)
    }

    const toVolumnTab = () => {
        setIsVolumnTab(true)
    }


    return (
        <View>

            <Search 
                search = {search}
                setSearch= {setSearch}
            />

            <View style={styles.tabControl}>

                <Pressable
                    style={styles.button} 
                    onPress={toCoinList}
                >
                    <Text style={styles.buttonText}>All Coins</Text>
                </Pressable>
                <Pressable
                    style={styles.button} 
                    onPress={toVolumnTab}
                >
                    <Text style={styles.buttonText}>24 Hours Volumn</Text>
                </Pressable>

            </View>

            {/* check coin loading and error, if all work well, go ahead to display coin list */}
            {isLoading && <Text>Loading coins...</Text>}
            {fetchError && <Text>{fetchError}</Text>}
            {!fetchError && !isLoading && !isVolumnTab ?
                <CoinList 
                    coins = {filterCoins()}
                    search = {search}
                    isVolumnTab = {isVolumnTab}
                /> :
                <CoinList 
                    coins = {filterByVolumn()}
                    search = {search}
                    isVolumnTab = {isVolumnTab}
                />
            }

        </View>
    )
}

export default Content

const styles = StyleSheet.create({
    tabControl:{
        flexDirection: "row",
        marginBottom:5,
    },
    button:{
        marginHorizontal: 2,
        padding: 6,
        borderRadius: 4,
        backgroundColor: '#fafafa',
    },
    buttonText:{
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#5b5b5b',
    }
})
