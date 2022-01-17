import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'

const CoinInfo = ({setShowCoinInfo}) => {

    const backOnPress = () => {
        setShowCoinInfo(false);
    } 

    return (
        <View>
            <Text></Text>
            <Pressable
                style={styles.button} 
                onPress={backOnPress}
            >
                <Text>Back</Text>
            </Pressable>
        </View>
    )
}

export default CoinInfo

const styles = StyleSheet.create({
    button:{
        marginHorizontal: 2,
        padding: 6,
        borderRadius: 4,
        backgroundColor: '#9fc5e8',
    },
})
