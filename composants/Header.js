import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect  } from 'react';


export default function Header({listJeux, listJeuxFilter}) {

    let nbJeux = 0;
    if(listJeuxFilter.length > 0) 
    {
        nbJeux = listJeuxFilter.length;
    }
    else nbJeux = listJeux.length;
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.fixToText}>
                <Text >Jovan Subasic</Text>
                <Text >Nb de jeux vidéo : { nbJeux }</Text>
            </View>
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
