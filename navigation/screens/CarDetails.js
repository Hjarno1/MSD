import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CarDetails = ({ route }) => {
  const { car } = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: car.picture }}
        style={styles.carImage}
      />
      <View style={styles.section}>
        <Text>ID: {car.id}</Text>
        <Text>Name: {car.name}</Text>
        <Text>Model: {car.model}</Text>
      </View>
      <View style={styles.section}>
        {/* Placeholder for the reservation details */}
        <Text>Reservation details</Text>
      </View>
      <View style={styles.section}>
        {/* Placeholder for functionality details */}
        <Text>Functionality details</Text>
      </View>
      <View style={styles.section}>
        {/* Placeholder for general rules */}
        <Text>General rules</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'grid',
    gridTemplateRows: 'auto auto auto auto', // Divide into four equal sections
    gridGap: 20, // Add spacing between sections
  },
  carImage: {
    width: 350,
    height: 250,
    marginBottom: 20,
  },
  section: {
    textAlign: 'center',
    padding: 20,
    border: '1px solid #ccc',
  },
});

export default CarDetails;
