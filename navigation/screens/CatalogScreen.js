import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, Image, Button, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import Animated, { Easing, withSpring, withTiming } from 'react-native-reanimated';

export default function CatalogScreen({}) {
  const navigation = useNavigation(); // Use useNavigation
  const carItems = [
      { id: '1', name: 'Car 1', model: 'Jog', picture: 'https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
      { id: '2', name: 'Car 2', model: 'Tank', picture: 'https://images.pexels.com/photos/687653/pexels-photo-687653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
      { id: '3', name: 'Car 3', model: 'BMW', picture: 'https://images.pexels.com/photos/1841120/pexels-photo-1841120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
      { id: '4', name: 'Car 4', model: 'bil', picture: 'https://images.pexels.com/photos/1841120/pexels-photo-1841120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
      { id: '5', name: 'Car 5', model: 'BMW', picture: 'https://images.pexels.com/photos/1841120/pexels-photo-1841120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
    ];

    // Define animation values
    const collectDateOpacity = new Animated.Value(0);
    const collectTimeOpacity = new Animated.Value(0);
    const returnDateOpacity = new Animated.Value(0);
    const returnTimeOpacity = new Animated.Value(0);
  
    // Animate text fields
    const animateTextFields = () => {
      withTiming(collectDateOpacity, { duration: 500, easing: Easing.inOut(Easing.ease) }).start();
      withTiming(collectTimeOpacity, { duration: 500, easing: Easing.inOut(Easing.ease) }).start();
      withTiming(returnDateOpacity, { duration: 500, easing: Easing.inOut(Easing.ease) }).start();
      withTiming(returnTimeOpacity, { duration: 500, easing: Easing.inOut(Easing.ease) }).start();
    };
  
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.searchBox}>
          <Text style={styles.label}>Collect Date</Text>
          <Animated.View style={{ opacity: collectDateOpacity }}>
            <TextInput
              style={styles.input}
              placeholder="Select Date"
            />
          </Animated.View>
          
          <Text style={styles.label}>Collect Time</Text>
          <Animated.View style={{ opacity: collectTimeOpacity }}>
            <TextInput
              style={styles.input}
              placeholder="Select Time"
            />
          </Animated.View>
          
          <Text style={styles.label}>Return Date</Text>
          <Animated.View style={{ opacity: returnDateOpacity }}>
            <TextInput
              style={styles.input}
              placeholder="Select Date"
            />
          </Animated.View>
          
          <Text style={styles.label}>Return Time</Text>
          <Animated.View style={{ opacity: returnTimeOpacity }}>
            <TextInput
              style={styles.input}
              placeholder="Select Time"
            />
          </Animated.View>
        </View>
        
        <FlatList
          data={carItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.carItem}>
              <Image
                source={{ uri: item.picture }}
                style={{ height: 200, width: 200 }}
              />
              <Text>{item.name}</Text>
              <Button
                title="Details"
                onPress={() => {
                  navigation.navigate('CarDetails', { car: item });
                }}
              />
            </View>
          )}
        />
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    searchBox: {
      padding: 10,
      backgroundColor: '#e0e0e0',
      marginBottom: 10,
    },
    label: {
      color: '#007AFF', // Blue color for labels
      marginBottom: 5,
    },
    input: {
      backgroundColor: '#f0f0f0',
      marginBottom: 10,
      height: 40,
      padding: 10,
    },
    carItem: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 200,
      backgroundColor: '#f0f0f0',
      marginBottom: 10,
    },
  });