import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, FlatList, Image, TouchableOpacity, Modal, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from "axios";
import { faker } from '@faker-js/faker';



export default function CatalogScreen() {
 const navigation = useNavigation();

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

const createCars = (numCars = 15) => {
  return new Array(numCars)
    .fill(undefined)
    .map(createCar);
}

let fakeCars = createCars(15)


 /*const carItems = [
   //{ id: '1', name: 'Tesla', model: 'Jog', picture: 'https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
   { id: '1', name: 'Tesla', model: 'Jog', picture: faker.image.image() },
   { id: '2', name: 'Sej bil', model: 'Tank', picture: faker.image.image() },
   { id: '3', name: 'Car 3', model: 'BMW', picture: faker.image.image() },
 ]; */


 const [date, setDate] = useState(new Date());
 const [mode, setMode] = useState('date');
 const [show, setShow] = useState(false);
 const [text, setText] = useState('Empty')

 const onChange = (event, selectedDate) => {
  const currentDate = selectedDate || date;
  setShow(Platform.OS === "android");
  setDate(currentDate);

  let tempDate = new Date(currentDate);
  let fDate = tempDate.getDate() + '/'+ (tempDate.getMonth) + '/' + tempDate.getFullYear();
  let fTime = 'Hours: ' + tempDate.getHours() + '| Minutes: ' + tempDate.getMinutes(); 

  console.log(fDate + ' (' + fTime + ')')
 }

 const showMode = (currentMode) => {
  setShow(true);
  setMode(currentMode);
 }

 return (
   <SafeAreaView style={styles.container}>
     <View>
     <Text>{text}</Text>
      <View style={{margin:20}}>
        <Button title='DatePicker' onPress={() => showMode('date')}/>
      </View>
      <View style={{margin:20}}>
        <Button title='TimePicker' onPress={() => showMode('time')}/>
      </View>

      {show && (
        <DateTimePicker
        testID='dateTImePicker'
        value={date}
        mode={mode}
        is24Hour={true}
        display='default'
        onChange={onChange}
      />)}
    </View>

     <FlatList
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
     />
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
    borderWidth: 2,
    marginBottom: 10,
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
    fontSize: 18, // Example: Set the font size to 18
    fontWeight: 'bold', // Example: Apply bold style
    textAlign: 'center'
  },
  detailButtonContainer: {
    flex: 1, // Add flex property
    justifyContent: 'center', // Center items vertically
    alignItems: 'center', // Center items horizontally
  },
});