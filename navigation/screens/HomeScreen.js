import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function HomeScreen({}){
    return(
        <SafeAreaView style={styles.container}>
            <Text
                onPress={() =>alert('This is the Home screen.')}
                style={{ fontSize: 26, fontWeight: 'bold'}}>
                This is Homesssssssssss
            </Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });