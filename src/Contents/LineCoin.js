import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const LineCoin = ({coin}) => {
    return (
        <View>
            <Text>{coin.id}</Text>
            <Text>{coin.current_price}</Text>
        </View>
    )
}

export default LineCoin

const styles = StyleSheet.create({})
