import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useState, useEffect  } from 'react';

export default function ListJeux({ listJeux }) {

    
    return (
        <View style={styles.container}>
            <ScrollView>
                {
                    listJeux.map((item, index) => {   
                        
                        return (
                            <View key={index} style={styles.cardCocktails}>
                                <Text style={styles.textCardCocktails}>{item.name} | {item.price}</Text>
                                <Text>{item.categorie}</Text>
                            </View>
                        );
                    })
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardCocktails: {
        backgroundColor: '#1f232830',
        borderRadius: 8,
        alignItems: 'center',
        textAlign: 'center',
        width:300,
        height:100,
        marginTop:10,
        marginBottom: 10,
        marginLeft: 10
    },
    textCardCocktails: {
        fontSize: 15,
        fontWeight: 'bold', 
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center',
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 15,
        fontSize: 13,
        marginBottom: 10,
        marginTop: 10
    },
});
