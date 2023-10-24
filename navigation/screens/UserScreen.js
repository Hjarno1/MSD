import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Alert } from 'react-native';

export default function UserScreen({ navigation }) {
    const userName = "John Doe"; // Replace with the user's actual name

    const handleLogout = () => {
        Alert.alert(
            "Log Out",
            "Are you sure you want to log out?",
            [
                {
                    text: "Cancel",
                    style: "cancel",
                },
                {
                    text: "Log Out",
                    onPress: () => {
                        // Perform the log out action here
                        // For example, you can call a function to log the user out and navigate to the login screen
                        // Replace the next line with your log out logic
                        navigation.navigate('HomeScreen');
                    },
                },
            ]
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.userInfo}>
                <Text style={styles.userName}>Hello, {userName}</Text>
            </View>

            <View style={styles.linkContainer}>
                <TouchableOpacity
                    style={styles.link}
                    onPress={() => navigation.navigate('PersonalScreen')}>
                    <Text style={styles.linkText}>Personal Information</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.link}
                    onPress={() => navigation.navigate('PreviousRentScreen')}>
                    <Text style={styles.linkText}>Previous Rent Periods</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.link}
                    onPress={() => navigation.navigate('ChangePasswordScreen')}>
                    <Text style={styles.linkText}>Change Password</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.link}
                    onPress={handleLogout}>
                    <Text style={styles.linkText}>Log Out</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    userInfo: {
        marginBottom: 20,
    },
    userName: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    linkContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    link: {
        marginVertical: 10,
        backgroundColor: 'gray',
        padding: 15,
        paddingHorizontal: 60
    },
    linkText: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
    },
});
