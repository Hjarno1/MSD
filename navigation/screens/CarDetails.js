import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CarDetails = ({ route }) => {
  const { car } = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: car.picture}}
        style={styles.carImage}
      />
      <Text>ID: {car.id}</Text>
      <Text>Name: {car.name}</Text>
      <Text>Model: {car.model}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  carImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});

export default CarDetails;
