import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const MasukPages = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
      <View style={styles.frameSelamat}>
        <Text style={styles.textSelamat}>MASUK</Text>
      </View>
      </View>
      <View style={styles.body}>
        <View style={styles.input}>
          <TextInput
            placeholder='Nama Lengkap'
            style={styles.textInput}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            placeholder='NIK'
            style={styles.textInput}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            placeholder='Jam Masuk'
            style={styles.textInput}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            placeholder='Tanggal'
            style={styles.textInput}
          />
        </View>
      <TouchableOpacity
                onPress={() => {
                    router.push("/(tabs)/home")
                }}style={styles.buttom}>
                    <Text style={styles.buttomText}>SIMPAN</Text>
                </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default MasukPages

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.2,
  },
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
  body: {
    flex: 0.6,
    marginTop:50
  },
  input: {
    height: 60,
    width: 400,
    marginHorizontal: "auto",
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 20
  },
  textInput: {
    height: "100%",
    width: "80%",
    marginHorizontal: "auto"
  },
  buttom: {
    height: 70,
    width: 200,
    backgroundColor: "green",
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 80,
    marginHorizontal: "auto"
  },
  buttomText: {
    fontSize: 20,
    textAlign: "center"
  },
  textFooter: {
    fontSize: 20,
    marginTop: 20,
    textAlign: "center"
  }
})