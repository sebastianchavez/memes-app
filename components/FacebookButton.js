import React from 'react'
import { Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native'
import fbIcon from '../assets/icons/facebook.png'

export default () => {
    return (
        <TouchableOpacity style={styles.container}>
                <Text>
                    <View style={styles.iconContainer}>
                        <Image style={styles.icon} source={fbIcon}/>
                    </View>
                    <View>
                        <Text style={styles.btnText}>Ingresar con Facebook</Text>
                    </View>
                </Text>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#0984E3',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        height: 30,
        width: 30,
    },
    iconContainer: {
        width: 45
    },
    btnText: {
        fontSize: 20,
        color:'#DFE6E9'
    }
})