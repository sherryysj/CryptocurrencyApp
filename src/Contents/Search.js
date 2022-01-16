import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

const Search = ({search, setSearch}) => {

    const onChangeSearch = (text) =>{
        setSearch(text);
    }

    return (
        <TextInput 
            style={styles.searchBox}
            placeholder="Typing name or symbol to search coins"
            value={search}
            onChangeText={text => onChangeSearch(text)}
        />
    )
}

export default Search

const styles = StyleSheet.create({
    searchBox:{ 
        borderColor:"#444444",
        borderRadius: 5,
        borderWidth: 2,
        marginHorizontal: 1,
        height: 40,
        paddingHorizontal:3
    }
})
