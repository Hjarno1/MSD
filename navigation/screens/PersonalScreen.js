import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, ScrollView } from 'react-native';

const CustomInput = ({ placeholder, value, onChangeText }) => (
  <View style={styles.inputContainer}>
    <Text style={styles.inputPlaceholder}>{placeholder}</Text>
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
    />
  </View>
);

export default function PersonalScreen({ navigation }) {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [zipCode, setZipCode] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [city, setCity] = React.useState('');
  const [country, setCountry] = React.useState('');

  const savePersonalInfo = () => {
    // You can implement logic to save the user's personal information here.
    // You can access the values of firstName, lastName, phoneNumber, zipCode, address, city, and country here.
    // For example, you can send this data to an API or store it in local storage.

    navigation.navigate('User'); // Redirect to the UserScreen
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.firstcontainer}>
          <Text style={{ fontSize: 26, fontWeight: 'bold', textAlign: 'center' }}> Personal Information </Text>
          <Text style={{ fontSize: 17, textAlign: 'center' }}>
            Before continuing, we need further information to set up your profile {'\n'}{'\n'}
          </Text>

          <CustomInput
            placeholder="First Name"
            value={firstName}
            onChangeText={text => setFirstName(text)}
          />
          <CustomInput
            placeholder="Last Name"
            value={lastName}
            onChangeText={text => setLastName(text)}
          />
          <CustomInput
            placeholder="Phone Number"
            value={phoneNumber}
            onChangeText={text => setPhoneNumber(text)}
          />
          <CustomInput
            placeholder="Zip Code"
            value={zipCode}
            onChangeText={text => setZipCode(text)}
          />
          <CustomInput
            placeholder="Address"
            value={address}
            onChangeText={text => setAddress(text)}
          />
          <CustomInput
            placeholder="City"
            value={city}
            onChangeText={text => setCity(text)}
          />
          <CustomInput
            placeholder="Country"
            value={country}
            onChangeText={text => setCountry(text)}
          />

          <Button title="Save" onPress={savePersonalInfo} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },

  inputContainer: {
    margin: 10,
  },
  inputPlaceholder: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    padding: 10,
    borderColor: '#C3C3C3',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#C3C3C3'
  },
});
