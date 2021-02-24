import React from 'react'
import { Text, StyleSheet, ImageBackground, View } from 'react-native'
import bgImage from '../assets/images/bg-app.jpg'
import { Card, TextArea, Button } from '../components'
import { Ionicons } from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler'

export default ({ navigation }) => {
    const post = navigation.getParam('post')
    console.log(`Post: ${JSON.stringify(post)}`)
    return (
    <ImageBackground source={bgImage} style={styles.container}>
        <ScrollView>
            <Ionicons name="arrow-back" size={35} color="#FFF" onPress={() => navigation.navigate('Home')} />
            <Card {...post}/>
            <Text style={styles.text}>Comentar</Text>
            <TextArea />
            <View style={{height: 20}} />
            <Button text="Comentar" />
        </ScrollView>
    </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 35,
    },
    text: {
        color: '#FFF',
        fontSize: 16,
        marginTop: 40,
        marginBottom: 10
    }
})