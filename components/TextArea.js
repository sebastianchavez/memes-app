import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

export default () => <TextInput style={styles.input} autoCapitalize="none" multiline={true} numberOfLines={3} />

const styles = StyleSheet.create({
    input: {
        paddingHorizontal: 10,
        fontSize: 20,
        backgroundColor: 'white',
        // height: 120,
        borderRadius: 5
    },
})