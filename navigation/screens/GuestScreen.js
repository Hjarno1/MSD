import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function GuestScreen({ navigation }) {
    // This screen can display content available to guest users.
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 26, fontWeight: 'bold', color: 'white' }}>Welcome, Guest!</Text>
            <Text style={{color: 'white'}}>This is the content available to guest users.</Text>
            <Button color='#003459' title="Continue as Guest" onPress={() => navigation.navigate('MainAppScreen')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#007EA7',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
