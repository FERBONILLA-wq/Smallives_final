import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const AnimalesScreen = () => {
  const tiposDeAnimales = [
    { nombre: 'Perros', color: 'blue', description: 'Este es un perro, en adopcion tiene 4 meses de nacido', imageUrl: 'https://th.bing.com/th/id/OIP.8g6FehTGg-yPmtvGMiqvAQHaE7?rs=1&pid=ImgDetMain' },
    { nombre: 'Gatos', color: 'orange', description: 'Este es un gato, en adopcion tiene 2 meses de nacido', imageUrl: 'https://th.bing.com/th/id/R.1708adc730375680d40f8dfc4bb33565?rik=P4UFPLhh%2bkfYnw&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2f1%2f1b%2fGato_meditando.jpg&ehk=Jv7Vyqr9gBFq109T1pYR%2fkj%2b1Gd1V0pDs%2bwTm7Axt4U%3d&risl=&pid=ImgRaw&r=0' },
    { nombre: 'Aves', color: 'yellow', description: 'Esta es un ave, en adopcion tiene un año de nacido ', imageUrl: 'https://th.bing.com/th/id/OIP.5HnAvDwxrjWIIgzodrEF4AHaHa?rs=1&pid=ImgDetMain' },
    { nombre: 'Serpientes', color: 'red', description: 'Esta es una serpiente, en venta por $4,500', imageUrl: 'https://th.bing.com/th/id/R.f97ef569532f6b7b9d91253ff79aefa3?rik=2xvUDlwrj%2f6F5g&riu=http%3a%2f%2f2.bp.blogspot.com%2f-gqbmWL1C4EM%2fT_-YeohnjMI%2fAAAAAAAABWM%2fLIJBWbjPP-g%2fs1600%2ffoto%2bSerpiente.JPG&ehk=zZ6detiAQD6V8i0XBAmAGYLaOWiWKGDxXQIDrkaqUNc%3d&risl=&pid=ImgRaw&r=0' },
    { nombre: 'Insectos', color: 'green', description: 'Este es un insecto, investigacion sobre el alimento para los insectos', imageUrl: 'https://th.bing.com/th/id/OIP.NR0IV2fJaKi-4E8LMAXdzQAAAA?rs=1&pid=ImgDetMain' },
  ];

  const handleAnimalPress = (description) => {
    alert(description);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.tiposDeAnimalesContainer}>
        {tiposDeAnimales.map((animal, index) => (
          <View key={index} style={[styles.animalBox, { backgroundColor: animal.color }]}>
            <TouchableOpacity onPress={() => handleAnimalPress(animal.description)}>
              <Image source={{ uri: animal.imageUrl }} style={styles.animalImage} />
            </TouchableOpacity>
            <Text style={styles.animalText}>{animal.nombre}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tiposDeAnimalesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  animalBox: {
    width: 150,
    height: 200,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animalImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  animalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default AnimalesScreen;
