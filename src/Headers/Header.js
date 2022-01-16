
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = () => {
    return (
        <View>
            <Text style = {styles.title}>Cryptocurrency App</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
      title: {
        marginTop: 35,
        paddingVertical: 8,
        backgroundColor: "#fff",
        color: "#3d85c6",
        fontSize: 25,
        fontWeight: "bold"
      }
})
