import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import bgImage from '../assets/images/bg-app.jpg'
import nonImage from '../assets/images/non-image.png'
import { ScrollView } from 'react-native-gesture-handler'
import { Button } from '../components'

export default ({navigation}) => {
    return(
        <ImageBackground source={bgImage} style={styles.container}>
            <ScrollView>
                <Ionicons name="arrow-back" size={35} color="#FFF" onPress={() => navigation.navigate('Home')} />
                <View style={styles.containerImage}>
                    <ImageBackground source={nonImage} style={styles.image} />
                </View>
                <TouchableOpacity style={styles.btnImage}>
                    <Text style={styles.btnText}>Subir imagen</Text>
                </TouchableOpacity> 
                <Button text="Publicar" />
            </ScrollView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 35
    },
    containerImage: {
        borderRadius: 5
    },  
    image: {
        marginTop: 50,
        height: 300,
        width: undefined,
        overflow: 'hidden',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    btnImage: {
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        height: 40,
        backgroundColor: '#0984E3',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 100
    },
    btnText: {
        fontSize: 16,
        color:'#DFE6E9'
    }
})