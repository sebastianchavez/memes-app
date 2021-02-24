import React from 'react'
import { View, Text, StyleSheet, ImageBackground, FlatList, SafeAreaView, TouchableOpacity } from 'react-native'
import bgImage from '../assets/images/bg-app.jpg'
import { FontAwesome5 } from '@expo/vector-icons'
import bgPost from '../assets/images/test.jpg'


/******* Components *******/
import Card from '../components/Card'

export default ({ navigation }) => {

    const posts = [
        {
            _id: 1,
            image: bgPost,
            title: 'Titulo',
            description: 'Descripcion'
        },
        {
            _id: 2,
            image: bgPost,
            title: 'Titulo 2',
            description: 'Descripcion 2'
        },
        {
            _id: 3,
            image: bgPost,
            title: 'Titulo 3',
            description: 'Descripcion 3'
        }
    ]

    return (
        <ImageBackground source={bgImage} style={styles.container}>
            <SafeAreaView style={styles.cardList}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{ margin: 16, fontSize: 20, color: '#DFE6E9'}}>Inicio</Text>
                    <TouchableOpacity style={{ margin: 16 }} onPress={navigation.openDrawer}>
                        <FontAwesome5 name="bars" size={24} color="white" />
                    </TouchableOpacity>
                </View>
                <FlatList
                    keyExtractor={x => x._id.toString()}
                    data={posts}
                    renderItem={({ item }) => <Card onPress={() => navigation.navigate('Post', { post: item })} {...item}/>}
                />
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('NewPost')}>
                        <FontAwesome5 name="plus" size={24} color="white" />
                    </TouchableOpacity>
                </View>
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
    },
    btnContainer: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        padding: 10,
        zIndex: 99999
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        width: 60,
        height: 60,
        backgroundColor: '#00b894'
    }
})