import React from 'react'
import { StyleSheet, Picker, View } from 'react-native'

const Sort = (sortBy, setSortBy) => {

    return (
        <View>
            <Picker
                selectedValue={sortBy}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) =>  setSortBy(itemValue)}
            >
                <Picker.Item label="GlobalRange" value="GlobalRange" />
                <Picker.Item label="Name" value="Name" />
                <Picker.Item label="LastPrice" value="LastPrice" />
            </Picker>
        </View>
    )

}

export default Sort

const styles = StyleSheet.create({

    
})
