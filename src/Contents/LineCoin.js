import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const LineCoin = ({coin}) => {

    function currencyFormat(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
     }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: `${coin.image}`}} />
            <View style={styles.nameAndSymbol}>
                <Text style={styles.name}>{coin.name}</Text>
                <Text style={styles.symbol}>{(coin.symbol).toUpperCase()}</Text>
            </View>
            <Text style={styles.current_price}>{currencyFormat(coin.current_price)}</Text>
        </View>
    )
}

export default LineCoin

const styles = StyleSheet.create({
    container: {
        flex: 1,    
        flexDirection: "row",
        alignItems:"center",
        marginVertical: 5,
        marginHorizontal: 2
    },
    nameAndSymbol:{
        width: 210, 
        flexDirection: "column",
        paddingHorizontal: 10
    },
    name:{
        fontSize: 15,
        fontWeight: 'bold',
    },
    symbol:{
        fontSize: 15,
        color: "#bcbcbc"
    },
    current_price:{
        width: 120, 
        fontSize: 15
    },
    image:{
        width: 40, 
        height: 40
    }
})
