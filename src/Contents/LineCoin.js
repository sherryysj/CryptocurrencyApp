import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const LineCoin = ({coin, isVolumnTab}) => {

    function currencyFormat(num) {

        var numString = num.toString().split(".");
        var numAfterDot = "00"
        if(numString[1]){
            numAfterDot = numString[1];
        }
        var numBeforeDot = numString[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        var numFormatted = numBeforeDot + "." + numAfterDot;
        return numFormatted;
        
     }

    return (
        <View style={styles.container}>

            <Image style={styles.image} source={{uri: `${coin.image}`}} />  
            <View style={styles.nameAndSymbol}>
                <Text style={styles.name}>{coin.name}</Text>
                <Text style={styles.symbol}>{(coin.symbol).toUpperCase()}</Text>
            </View>
            {isVolumnTab ? <Text></Text> : 
                <View style={styles.price}>
                    <Text>{currencyFormat(coin.current_price)}</Text>
                    <View>
                        <Text style={styles.highPrice}>24H High: {currencyFormat(coin.high_24h)}</Text>
                        <Text style={styles.lowPrice}>24H Low: {currencyFormat(coin.low_24h)}</Text>
                    </View>
                </View>
            }
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
        width: 160, 
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
    price:{
        flexDirection: "column",
        width: 170, 
        fontSize: 15
    },
    highPrice:{ 
        color: "#f44336",
        fontSize: 15
    },
    lowPrice:{ 
        color:'#50C976',
        fontSize: 15
    },
    image:{
        width: 40, 
        height: 40
    }
})
