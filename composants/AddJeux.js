import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView , TextInput ,Button, Alert} from 'react-native';
import React, { useState, useEffect  } from 'react';

export default function AddJeux({ setListJeux , listJeux}) {


    const [nomJeux, setNomJeux] = useState('');

    const [tarif, setTarif] = useState('');

    const [categorie, setCategorie] = useState('');

    function addListe(nomJeux,tarif,categorie) {

        if(nomJeux != '' || tarif != '' || categorie != '')
        {
            let lastJeux = listJeux.slice(-1)[0].id;
            let lastId = lastJeux + 1;

            setListJeux([...listJeux, 
                { 
                    name: nomJeux,
                    price: tarif,
                    categorie : categorie,
                    id: lastId
                }
            ]);

            setNomJeux('');
            setTarif('');
            setCategorie('');
        }
        else Alert.alert('Veuillez remplir tout les champs')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titreObstacle}>Ajout d'un jeux vidéo</Text>
            <View >
                <View style={styles.fixToText}>
                    <Text>Titre : </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setNomJeux}
                        value={nomJeux}
                        placeholder="Titre"
                    />
                </View>
                <View style={styles.fixToText}>
                    <Text>Tarif : </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setTarif}
                        value={tarif}
                        placeholder="Tarif"
                    />
                </View>
                <View style={styles.fixToText}>
                    <Text>Catégorie : </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setCategorie}
                        value={categorie}
                        placeholder="Catégorie"
                    />
                </View>
            </View>
            <View style={styles.button}>
                <Button
                    title="+"
                    color="#333"
                    onPress={() => addListe(nomJeux,tarif,categorie)}
                />
            </View>
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
    input: {
        height: 40,
        width: 310,
        borderWidth: 1,
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
    button: {
        borderWidth: 1,
        borderRadius: 50,
        width: 40,
        backgroundColor: '#1f232830',
        // marginLeft:180
    },
    titreObstacle: {
        fontSize: 20, 
        color: '#333',
        fontWeight: 'bold', 
        textAlign: 'center', 
        textTransform: 'uppercase',
    },
});
