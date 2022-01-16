import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const LineCoin = ({coin}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: `${coin.image}`}} />
            <Text style={styles.id}>{coin.id}</Text>
            <Text style={styles.current_price}>{coin.current_price}</Text>
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
    id:{
        width: 170, 
        fontSize: 15,
        borderLeftWidth:10,
        fontWeight: 'bold',
    },
    current_price:{
        width: 100, 
        fontSize: 15
    },
    image:{
        width: 40, 
        height: 40
    }
})
