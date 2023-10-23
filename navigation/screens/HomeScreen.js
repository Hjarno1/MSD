import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';

export default function HomeScreen({ navigation }) {
    const handleSignIn = () => {
        // Add your sign-in logic here
        // For example, you can navigate to a sign-in screen.
        navigation.navigate('SignInScreen');
    };

    const handleSignUp = () => {
        // Add your sign-up logic here
        // For example, you can navigate to a sign-up screen.
        navigation.navigate('SignUpScreen');
    };

    const handleContinueAsGuest = () => {
        // Add your logic for continuing as a guest here
        // You can navigate to the main app screen for guests.
        navigation.navigate('GuestScreen');
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text
                style={{ fontSize: 26, fontWeight: 'bold', marginTop: 20 }}>
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
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    buttonContainer: {
        width: Dimensions.get('window').width, // Make the container the full width of the screen
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#1EA896',
        width: Dimensions.get('window').width, // Make the button the full width of the screen
        padding: 15,
        marginVertical: 10, // Add vertical margin to separate buttons
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});