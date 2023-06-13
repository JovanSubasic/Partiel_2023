import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect  } from 'react';

import Header from './composants/Header';
import ListJeux from './composants/ListJeux';
import AddJeux from './composants/AddJeux';


export default function App() {

  const listJeu = [
      {
          name: "Medal of Honor",
          price: "10€",
          categorie : 'FPS',
          id: 23124
      },
      {
          name: "Street Fighter 2",
          price: "20€",
          categorie : 'Combat',
          id: 12349
      },
      {
          name: "Call of Duty",
          price: "30€",
          categorie : 'FPS',
          id: 549762
      },
      {
          name: "NBA2K5",
          price: "5€",
          categorie : 'Sport',
          id: 549763
      },
      {
          name: "God Of War 2018",
          price: "25€",
          categorie : 'Action-Aventure',
          id: 549764
      },
      {
          name: "The Legend of Zelda : The Wind Walker",
          price: "35€",
          categorie : 'Action-Aventure',
          id: 549765
      },
      {
          name: "Horizon : Forbidden West",
          price: "40€",
          categorie : 'Action-Aventure',
          id: 549766
      },
      {
          name: "Forza Horizon 5",
          price: "45€",
          categorie : 'Voiture',
          id: 549767
      },
      {
          name: "The Last Of Us",
          price: "55€",
          categorie : 'Survival horror',
          id: 549768
      },
      {
          name: "Red Dead Redemption II",
          price: "18€",
          categorie : 'Action-Aventure',
          id: 549769
      }
  ];

  const [listJeux, setListJeux] = useState(listJeu);

  return (
    <SafeAreaView style={styles.container}>
      <Header listJeux={listJeux}/>
      <ListJeux listJeux={listJeux} />
      <AddJeux listJeux={listJeux} setListJeux={setListJeux}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
