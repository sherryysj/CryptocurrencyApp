
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';

const Header = ({currency, setCurrency}) => {

    /*
    const [openCurrency, setOpenCurrency] = useState(false);
    const [currencies, setCurrencies] = useState([
        {label: 'USD', value: 'USD'},
        {label: 'AUD', value: 'AUD'}
    ]);

    const currencyOnShown = () => {
        openCurrency(true)
    }
    */

    return (
        <View>
            <View style={styles.container}>
                <Text style = {styles.title}>Cryptocurrency App</Text>
                <Pressable style={styles.currency}>
                    <Text>{currency}</Text>
                </Pressable>
            </View>

            {/* 
            <DropDownPicker
                open={openCurrency}
                value={currency}
                items={currencies}
                setOpen={setOpenCurrency}
                setValue={setCurrency}
                setItems={setCurrencies}
            /> 
            */}
            
        </View>
        
    )
}

export default Header

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        marginTop: 35,
        paddingVertical: 8,
    },
    title: {
        backgroundColor: "#fff",
        color: "#3d85c6",
        fontSize: 25,
        fontWeight: "bold",
        width:325
    },
    currency:{
        right:1,
        alignSelf:"flex-end",
        marginHorizontal: 2,
        padding: 6,
        borderRadius: 4,
        backgroundColor: '#f3f6f4',
    }
})
