import React from "react";
import PantsProduct from "./components/PantsProduct";
import Product from "./components/Product";
import ShirtProduct from "./components/ShirtProduct";

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import Register from './components/register';
// import Signin from "./components/signin";

const pants = [
  {
    id: 1,
    name: 'pant',
    price: 13.53

  },
  {
    id: 2,
    name: 'pant1',
    price: 13.53

  },
  {
    id: 3,
    name: 'pant2',
    price: 13.35

  },
  {
    id: 4,
    name: 'pant3',
    price: 13.89

  },
  {
    id: 5,
    name: 'pant4',
    price: 13.89

  },
  {
    id: 6,
    name: 'pant5',
    price: 13.89

  },
  {
    id: 7,
    name: 'pant6',
    price: 13.89

  }
]

const shirt = [
  {
    id: 1,
    name: 'shirt1',
    price: 13.53

  },
  {
    id: 2,
    name: 'shirt2',
    price: 13.53

  },
  {
    id: 3,
    name: 'shirt3',
    price: 13.35

  }
]



export default function App() {
  return (

    // <PantsProduct pants={pants} />
    <ShirtProduct shirt={shirt} />
    // <Product />

    // <Register />
    // <Signin />
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
