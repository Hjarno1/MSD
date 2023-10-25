import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function GuestScreen({ navigation }) {
    // This screen can display content available to guest users.
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Welcome, Guest!</Text>
            <Text>This is the content available to guest users.</Text>
            <Button title="Continue as Guest" onPress={() => navigation.navigate('MainAppScreen')} />
        </View>
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
