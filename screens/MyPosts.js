import React from 'react'
import { View, Text, StyleSheet, ImageBackground, FlatList, SafeAreaView, TouchableOpacity } from 'react-native'
import bgImage from '../assets/images/bg-app.jpg'
import { FontAwesome5 } from '@expo/vector-icons'
import bgPost from '../assets/images/test.jpg'


/******* Components *******/
import Card from '../components/Card'

export default ({navigation}) => {

    const posts = [
        {
            _id: 1,
            image: bgPost,
            title: 'Titulo',
            description: 'Descripcion'
        }
    ]

    return (
        <ImageBackground source={bgImage} style={styles.container}>
            <SafeAreaView style={styles.cardList}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{ margin: 16, fontSize: 20, color: '#DFE6E9'}}>Mis publicaciones</Text>
                    <TouchableOpacity style={{ margin: 16 }} onPress={navigation.openDrawer}>
                        <FontAwesome5 name="bars" size={24} color="white" />
                    </TouchableOpacity>
                </View>
                <FlatList
                    keyExtractor={x => x._id.toString()}
                    data={posts}
                    renderItem={({ item }) => <Card onPress={() => navigation.navigate('Modal', { post: item })} {...item}/>}
                />
            </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        flex: 1,
        alignItems: 'center'
    },
    cardList: {
        marginTop: 30,
        flex: 1,
        width: '100%'
    }
})