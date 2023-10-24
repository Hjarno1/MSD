import * as React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function SignUpScreen({ navigation }) {
    const handleSignUp = () => {
        // Add your sign-up logic here
        // You may want to create a new user account and navigate to the UserScreen on successful sign-up.
        
        // For demonstration, I'm simulating a successful sign-up here.
        // Replace this with your actual sign-up logic.
        const userSignedUp = true;

        if (userSignedUp) {
            navigation.navigate('PersonalScreen'); // Redirect to the UserScreen
        }
    };

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Sign Up</Text>
            <TextInput
                placeholder="Username"
                style={styles.input}
            />
            <TextInput
                placeholder="Email"
                style={styles.input}
            />
            <TextInput
                placeholder="Password"
                style={styles.input}
                secureTextEntry
            />
            <Button title="Sign Up" onPress={handleSignUp} />
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
    input: {
        width: '80%',
        margin: 10,
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
    },
});
