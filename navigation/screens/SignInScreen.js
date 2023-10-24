import * as React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function SignInScreen({ navigation }) {
    const handleSignIn = () => {
        // Add your sign-in logic here
        // You may want to check user credentials and navigate to the UserScreen on successful sign-in.
        
        // For demonstration, I'm simulating a successful sign-in here.
        // Replace this with your actual sign-in logic.
        const userSignedIn = true;

        if (userSignedIn) {
            navigation.navigate('User'); // Redirect to the UserScreen
        }
    };

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Sign In</Text>
            <TextInput
                placeholder="Username or Email"
                style={styles.input}
            />
            <TextInput
                placeholder="Password"
                style={styles.input}
                secureTextEntry
            />
            <Button title="Sign In" onPress={handleSignIn} />
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
