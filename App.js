import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect  } from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import {  CheckBox  } from '@rneui/base';

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

  const [listJeuxFilter, setListJeuxFilter] = useState([]);

  // liste categorie sans duplication
  let uniqueCategorie = listJeux.map(({ categorie }) => categorie).filter((element, index) => {
      return listJeux.map(({ categorie }) => categorie).indexOf(element) === index;
  });

  function filtrerCategorie(categorie) {


    let newList = listJeux.filter(function (element) {
        return element.categorie == categorie 
    });

    setListJeuxFilter(newList)
    // console.log(listJeuxFilter)
    
  }


  function filtrerPrix(trie) {

    let listTrie = [];

    if(listJeuxFilter.length > 0) 
    {
      listTrie = [...listJeuxFilter];
    }
    else listTrie = [...listJeux];

    if(trie == 'Croissant')
    {
      listTrie.sort((j1, j2) => (Number(j1.price.replace('€', '')) > Number(j2.price.replace('€', ''))) ? 1 : (Number(j1.price.replace('€', '')) < Number(j2.price.replace('€', ''))) ? -1 : 0);
    }
    else listTrie.sort((j1, j2) => (Number(j1.price.replace('€', '')) < Number(j2.price.replace('€', ''))) ? 1 : (Number(j1.price.replace('€', '')) > Number(j2.price.replace('€', ''))) ? -1 : 0);

    
    if(listJeuxFilter.length > 0) 
    {
      setListJeuxFilter(listTrie)
    }
    else setListJeux(listTrie)
    // console.log(listTrie)
    
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header listJeux={listJeux} listJeuxFilter={listJeuxFilter}/>
      <View style={styles.fixToText}>
        <SelectDropdown
            data={uniqueCategorie}

            onSelect={(selectedItem, index) => {
              filtrerCategorie(selectedItem)
                // console.log(selectedItem);
            }}
            buttonStyle={styles.dropdownButton}

            // defaultValue={selectHour}

            defaultButtonText={'Filtrer par catégorie'}
        /> 
        <SelectDropdown
            data={["Croissant", "Décroissant"]}

            onSelect={(selectedItem, index) => {
              filtrerPrix(selectedItem)
                // console.log(selectedItem);
            }}
            buttonStyle={styles.dropdownButton}

            // defaultValue={selectHour}

            defaultButtonText={'Filtrer par prix'}
        /> 
      </View>
      <ListJeux listJeux={listJeux} listJeuxFilter={listJeuxFilter}/>
      <AddJeux listJeux={listJeux} setListJeux={setListJeux}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 5,
    fontSize: 18,
    marginBottom: 10,
    marginTop: 10
  },
  dropdownButton: {
    width: 200,
    height: 40,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
});
