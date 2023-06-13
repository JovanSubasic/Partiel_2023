import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect  } from 'react';
// import SelectDropdown from 'react-native-select-dropdown';


export default function Header({listJeux}) {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.fixToText}>
                <Text >Jovan Subasic</Text>
                <Text >Nb de jeux vidéo : { listJeux.length }</Text>
            </View>
            <Text >Jovan Subasic</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 15,
        fontSize: 18,
        marginBottom: 10,
        marginTop: 10
    },
});
