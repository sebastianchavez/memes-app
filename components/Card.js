import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import optionsIcon from '../assets/icons/ellipsis.png'

export default ({onPress, title, image}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerText}>
                    <Text style={styles.headerText}>{title}</Text>
                </View>
                <TouchableOpacity style={styles.iconContainer}>
                    <Image style={styles.icon} source={optionsIcon} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.body} onPress={onPress}>
                <Image style={styles.image} source={image}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        height: 300,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    header: {
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        height: 50,
        backgroundColor: '#636E72',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerText: {
        color: '#DFE6E9',
        fontSize: 18,
        textShadowColor: '#000',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },  
    body: {
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        height: 250
    },
    image: {
        height: '100%',
        width: '100%',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    },
    iconContainer: {
        alignItems: 'flex-end'
    },
    icon: {
        width: 30,
        height: 30
    }
})