import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

export default function CatalogScreen({}) {
    const carItems = [
        { id: '1', name: 'Car 1', model: 'Jog', picture: 'https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
        { id: '2', name: 'Car 2', model: 'Tank', picture: 'https://images.pexels.com/photos/687653/pexels-photo-687653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
        { id: '3', name: 'Car 3', model: 'BMW', picture: 'https://images.pexels.com/photos/1841120/pexels-photo-1841120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
        // Add more car items here with their respective images
      ];

      const navigation = useNavigation(); // Use useNavigation

      return (
        <SafeAreaView style={styles.container}>
          <FlatList
            data={carItems}
            keyExtractor={(item) => item.id}
            
            renderItem={({ item }) => (
              <View style={styles.carItem}>
                <Image
                    source={{ uri: item.picture}}
                    style={{ height: 200, width: 200}}
                />
                <Text>{item.name}</Text>
                <Button
                    title="Details"
                    onPress={() => {
                        navigation.navigate('CarDetails', { car: item }); // Navigate to CarDetails screen with car data
                    }}
                />
              </View>
            )}
          />
        </SafeAreaView>
      );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      padding: 10,
      backgroundColor: '#e0e0e0',
    },
    carItem: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 200,
      backgroundColor: '#f0f0f0',
      marginBottom: 10,
    },
    carImage: {
      width: 100,
      height: 100,
      marginRight: 10,
    },
  });