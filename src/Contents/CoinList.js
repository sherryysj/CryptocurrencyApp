import React from 'react';
import { Button, FlatList, StyleSheet, Text, View, Pressable} from 'react-native';
import { useState, useEffect } from 'react';
import LineCoin from './LineCoin';

const CoinList = ({coins, search, isVolumnTab}) => {

    const [page, setPage] = useState(1);
    const coinsPerPage = 9;
    const biggestPage = Math.ceil(coins.length/coinsPerPage);

    // reset page to 1 every time coins updated
    useEffect(() => {
        setPage(1);
    },[search])

    const filterCoinsByPage = () => {
        const startIndex = (page - 1)*coinsPerPage;
        var endIndex = page*coinsPerPage;
        if(page === biggestPage){
            endIndex = coins.length;
        }
        
        const coinsFiltered = coins.slice(startIndex,endIndex);
        return coinsFiltered;
    }

    const pageToPrevious = () => {
        if(page - 1 > 0){
            const newPage = page - 1;
            setPage(newPage);
        }
    }

    const pageToNext = () => {
        if(page + 1 < biggestPage + 1){
            const newPage = page + 1;
            setPage(newPage);
        }

    }

    return (
        <View>
            <View style={styles.title}>
                <Text style={styles.coinName}>Coin Name</Text>
                {isVolumnTab ? <Text style={styles.volumn}>Volumn Trend</Text> : <Text style={styles.lastPrice}>Last Price</Text>}
            </View>
            {/* check whether there is coin info in the return data, show error message if not */}
            {!coins ? <Text>There is no coins information return from the server</Text> : 
                <FlatList
                    data = {filterCoinsByPage()}
                    renderItem = {({item}) => <LineCoin coin = {item} isVolumnTab={isVolumnTab}/>}
                />
            }
            {/* page controlling */}
            <Text style={styles.currentPage}>Page: {page} </Text>
            <View style={styles.pageControl}>
                { page > 1 &&                 
                    <Pressable
                        style={styles.button} 
                        onPress={pageToPrevious}
                    >
                        <Text style={styles.buttonText}>Last Page</Text>
                    </Pressable>
                }
                { page < biggestPage &&
                    <Pressable
                        style={styles.button} 
                        onPress={pageToNext}
                    >
                        <Text style={styles.buttonText}>Next Page</Text>
                    </Pressable>
                }  
            </View>   
        </View>
    )

}

export default CoinList

const styles = StyleSheet.create({
    title:{ 
        flexDirection: "row",
        marginHorizontal: 2
    },
    coinName:{
        width: 200, 
        fontSize: 20,
        color: "#999999"
    },
    lastPrice:{
        width: 120, 
        fontSize: 20,
        color: "#999999"
    },
    volumn:{
        width: 150, 
        fontSize: 20,
        color: "#999999"
    },
    currentPage:{
        alignSelf:"center",
    },
    pageControl:{
        flexDirection: "row",
        alignSelf:"center",
        marginBottom:5,
    },
    button:{
        marginHorizontal: 2,
        padding: 6,
        borderRadius: 4,
        backgroundColor: '#9fc5e8',
    },
    buttonText:{
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }
})
