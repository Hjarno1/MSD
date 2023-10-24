import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function UserScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
        <View style={{alignItems: 'center'}}>
            <Text style={{ fontSize: 26, fontWeight: 'bold'}}> Your Account {'\n'}</Text>
            <View
                style={{
                backgroundColor: 'gray',
                height: 1, // Adjust the height as needed
                width: '100%', // This makes the line span the entire width of the screen
                }}
            />
           <Text style={{ 
                fontSize: 17, 
                backgroundColor: 'gray', }}
                > 
                Anders Andersen {'\n'}
            </Text>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    }


  });
  