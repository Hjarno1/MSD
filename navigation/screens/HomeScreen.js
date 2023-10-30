import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';

export default function HomeScreen({ navigation }) {
    const handleSignIn = () => {

        navigation.navigate('SignInScreen');
    };

    const handleSignUp = () => {

        navigation.navigate('SignUpScreen');
    };

    const handleContinueAsGuest = () => {

        navigation.navigate('GuestScreen');
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text
                style={{ fontSize: 26, fontWeight: 'bold', marginTop: 20, color: 'white' }}>
                Welcome to SOCKS!
            </Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleContinueAsGuest}>
                    <Text style={styles.buttonText}>Continue as Guest</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#007EA7',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    buttonContainer: {
        width: Dimensions.get('window').width, 
        alignItems: 'center',
        marginTop: 100
    },
    button: {
        backgroundColor: '#003459',
        width: Dimensions.get('window').width, 
        padding: 15,
        marginVertical: 10, 
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});