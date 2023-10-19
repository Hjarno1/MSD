import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import axios from 'axios';

export default function CatalogScreen({}) {
  const [carData, setCarData] = React.useState({});
  const navigation = useNavigation(); 

    const carItems = [
        { id: '1', name: 'Car 1', model: 'Jog', picture: 'https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
        { id: '2', name: 'Car 2', model: 'Tank', picture: 'https://images.pexels.com/photos/687653/pexels-photo-687653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
        { id: '3', name: 'Car 3', model: 'BMW', picture: 'https://images.pexels.com/photos/1841120/pexels-photo-1841120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
        // Add more car items here with their respective images
      ];

      React.useEffect(() => {
        const fetchData = async () => {
          try {
            const options = {
              method: 'GET',
              url: 'https://car-api2.p.rapidapi.com/api/models',
              params: {
                model: 'Volvo',
                sort: 'id',
                year: '2029',
                verbose: 'yes'
              },
              headers: {
                'X-RapidAPI-Key': 'b353554401mshb2fda8d12a1edaep151841jsn402cfd5e519e',
                'X-RapidAPI-Host': 'car-api2.p.rapidapi.com'
              }
            };
            const response = await axios.request(options);
        
        // Check if the response data is empty
        if (Object.keys(response.data).length === 0) {
          setError("No data received from the API.");
        } else {
          setCarData(response.data);
        }
      } catch (error) {
        setError("Error fetching data from the API: " + error.message);
      }
    };
    
        fetchData();
      }, []);
      
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
                <Text>Car Year: {carData.year}</Text>
                <Text>Car Model: {carData.model}</Text>
                <Button
                    title="Details"
                    onPress={() => {
                        navigation.navigate('CarDetails', { car: item }); 
                    }}
                />
              </View>
            )}
          />
        </SafeAreaView>
      );
};

const CarItem = ({ car }) => {
    const navigation = useNavigation();
  
    const handleViewPress = () => {
      navigation.navigate('CarDetails', { car });
    };
  
    return (
      <View>
        <Image
          source={{ uri: car.picture }}
          style={styles.carImage}
        />
        <Text>{car.name}</Text>
        <TouchableOpacity onPress={handleViewPress}>
          <Text>View</Text>
        </TouchableOpacity>
      </View>
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