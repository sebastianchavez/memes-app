import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

export default ({secureTextEntry}) => <TextInput style={styles.input} autoCapitalize="none" secureTextEntry={secureTextEntry}/>

const styles = StyleSheet.create({
    input: {
        paddingHorizontal: 10,
        fontSize: 20,
        backgroundColor: 'white',
        height: 50,
        borderRadius: 5
    },
})