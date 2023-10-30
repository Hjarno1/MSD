import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, FlatList, Image, TouchableOpacity, Modal, Platform } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from "axios";
import { faker } from '@faker-js/faker';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function CatalogScreen() {
 const navigation = useNavigation();



//API Integration
const [cars, setCars] = useState([])


useEffect(() => {
    //try to load data from the async storage and if it doesn't exist it fetches data from the API
    AsyncStorage.getItem('carsData')
      .then((data) => {
        if (data) {
          setCars(JSON.parse(data));
        }
        else {
          fetchData();
        }
      })
      .catch((error) => console.error('error retrieving data: ', error));
  }, []);

const fetchData = () => {
    axios
      .get('https://themikkel.dk/unfollow/sdu/cars/cars')
      .then((res) => {
        setCars(res.data);

        // stores data in the Async Storage
        AsyncStorage.setItem('carsData', JSON.stringify(res.data))
          .then(() => console.log('data stored successfully'))
          .catch((error) => console.error('error storing data:', error));
      })
      .catch((err) => console.log(err));
  };

//Old API implementation no persistence
/*useEffect(() => {
  axios
  .get('https://themikkel.dk/unfollow/sdu/cars/cars')
  .then((res) => 
  setCars(res.data))
  .catch(err=>console.log(err))
})
*/


 const createCar = () => {
    return {
      id: faker.string.uuid(),
      name: faker.vehicle.vehicle(),
      manufacturer: faker.vehicle.manufacturer(),
      fuel: faker.vehicle.fuel(),
      vin: faker.vehicle.vin(),
      picture: faker.image.urlLoremFlickr({ category: 'sportscar' })
    }
 }

 const createCars = (numFakeCars = 15) => {
    return new Array(numFakeCars)
      .fill(undefined)
      .map(createCar);
 }

 let fakeCars = createCars(15)

 const [date, setDate] = useState(new Date());
 const [mode, setMode] = useState('date');
 const [show, setShow] = useState(false);
 const [text, setText] = useState('')

 const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + '/'+ (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    let fTime = 'at ' + tempDate.getHours() + ':' + tempDate.getMinutes(); 

    const selectedDateTime = fDate + ' ' + fTime + '';
    setText(selectedDateTime);
 }

 const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
 }

 return (
   <SafeAreaView style={styles.container}>
     <View>
       <View style={styles.pickersOuter}>
        <View style={styles.pickersInner}>
          <Button
            title="DatePicker"
            onPress={() => showMode("date")}
            color="#1EA896" // Set the color to match the background color
          />
        </View>
        <View style={styles.pickersInner}>
          <Button
            title="TimePicker"
            onPress={() => showMode("time")}
            color="#1EA896" // Set the color to match the background color
          />
        </View>
      </View>
      <Text style={{ textAlign: 'center', fontSize: 19, marginBottom: 10 }}>{text}</Text>
       <View
         style={{
           backgroundColor: '#1EA896',
           height: 4.5,
           width: '100%',
         }}
       />
       {show && (
         <DateTimePicker
           testID='dateTImePicker'
           value={date}
           mode={mode}
           is24Hour={true}
           display='default'
           onChange={onChange}
         />
       )}
     </View>
       
     <FlatList
       data={cars}
       keyExtractor={(item) => cars.id}
       renderItem={({ item }) => (
         <View style={styles.fakeCars}>
           <Image source={{ uri: item.pictures[0].srcUrl }} style={styles.foto} />
           <View style={styles.detailButtonContainer}>
             <Text style={styles.carTitle}>{item.name}</Text>
             <TouchableOpacity
               style={styles.detailButton}
               onPress={() => {
                 navigation.navigate('CarDetails', { car: item });
               }}
             >
               <Text style={styles.buttonText}>Details</Text>
             </TouchableOpacity>
           </View>
         </View>
       )}
     />


     {/* <FlatList
       data={fakeCars}
       keyExtractor={(item) => fakeCars.id}
       renderItem={({ item }) => (
         <View style={styles.fakeCars}>
           <Image source={{ uri: item.picture }} style={styles.foto} />
           <View style={styles.detailButtonContainer}>
             <Text style={styles.carTitle}>{item.name}</Text>
             <TouchableOpacity
               style={styles.detailButton}
               onPress={() => {
                 navigation.navigate('CarDetails', { car: item });
               }}
             >
               <Text style={styles.buttonText}>Details</Text>
             </TouchableOpacity>
           </View>
         </View>
       )}
     /> */}


   </SafeAreaView>
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fakeCars: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 200,
    backgroundColor: '#f0f0f0',
    borderColor: '#1EA896',
    borderBottomWidth: 5,
  },
  pickersOuter: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  pickersInner: {
    marginBottom: 15,
    marginHorizontal: 20,
  },
  foto: {
    width: 150,
    height: 150,
    borderRadius: 20,
    shadowOpacity: 0.1,
    backgroundColor: 'transparent',
    marginLeft: 30,
  },
  detailButton: {
    backgroundColor: '#1EA896',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: 100,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  carTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  detailButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
