import React from 'react'
import { View, Text, StyleSheet, ImageBackground, FlatList } from 'react-native'
import bgImage from '../assets/images/bg-app.jpg'

/******* Components *******/
import Card from '../components/Card'

export default () => {
    return (
        <ImageBackground source={bgImage} style={styles.container}>
            <FlatList 
                style={styles.cardList}
                data={[1, 2, 3]}
                renderItem={() => <Card />}
            />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        flex: 1,
        paddingTop: 80,
        alignItems: 'center'
    },
    cardList: {
        width: '100%'
    }
})