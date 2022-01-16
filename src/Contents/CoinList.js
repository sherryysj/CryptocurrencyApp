import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import LineCoin from './LineCoin';

const CoinList = ({coins}) => {

    return (
        <View>
            <View style={styles.title}>
                <Text style={styles.coinName}>Coin Name</Text>
                <Text style={styles.currentPrice}>Current Price</Text>
            </View>
            {/* check whether there is coin info in the return data, show error message if not */}
            {!coins ? <Text>There is no coins information return from the server</Text> : 
                <FlatList
                    data = {coins}
                    renderItem = {({item}) => <LineCoin coin = {item} />}
                />
            }   
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
        width: 210, 
        fontSize: 20,
        color: "#bcbcbc"
    },
    currentPrice:{
        width: 150, 
        fontSize: 20,
        color: "#bcbcbc"
    }
})
