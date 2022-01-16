import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import LineCoin from './LineCoin';

const CoinList = ({coins}) => {
    return (
        <View>
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

const styles = StyleSheet.create({})
