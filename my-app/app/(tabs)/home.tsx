import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'

const HomePages = () => {
  return (
    <SafeAreaView>
        <View style={styles.frameSelamat}>
            <Text style={styles.textSelamat}>SELAMAT DATANG</Text>
        </View>
        <TouchableOpacity 
        onPress={() => {
            router.push('/(tabs)/screeen/masuk')
        }}
        style={styles.touch}>
            <Text style={styles.text}>ABSEN MASUK</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch}>
            <Text style={styles.text}>ABSEN PULANG</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch}>
            <Text style={styles.text}>RIWAYAT ABSEN</Text>
        </TouchableOpacity>

    </SafeAreaView>
  )
}

export default HomePages

const styles = StyleSheet.create({
    frameSelamat:{
        height:100,
        width:400,
        marginHorizontal:'auto',
        marginTop:100,
        justifyContent:'center',
        borderBottomWidth:1
    },
    textSelamat:{
        fontSize:30,
        textAlign:'center'
    },
    touch:{
        height:80,
        width:300,
        marginTop:50,
        justifyContent:'center',
        marginHorizontal:'auto',
        borderWidth:1,
        borderRadius:20
    },
    text:{
        fontSize:20,
        textAlign:'center'
    }
})