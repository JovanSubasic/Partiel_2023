import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView , Button} from 'react-native';
import React, { useState, useEffect  } from 'react';

export default function ListJeux({ listJeux , listJeuxFilter, setListJeux, setListJeuxFilter}) {

    let list = [];
    if(listJeuxFilter.length > 0) 
    {
        list = listJeuxFilter;
    }
    else list = listJeux;
    
    function deleteListe(index) {

        if(listJeuxFilter.length > 0) 
        {
            setListJeuxFilter(listJeuxFilter => listJeuxFilter.filter((item, i) => i !== index));
        }
        else setListJeux(listJeux => listJeux.filter((item, i) => i !== index));

        
    
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                {
                    list.map((item, index) => {   
                        
                        return (
                            <View key={index} style={styles.cardCocktails}>
                                <Text style={styles.textCardCocktails}>{item.name} | {item.price}</Text>
                                <Text>{item.categorie}</Text>
                                <Button
                                    color="red"
                                    title="X"
                                    
                                    onPress={() => deleteListe(index)}
                                />
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
        height:125,
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
