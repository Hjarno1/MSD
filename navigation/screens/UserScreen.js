import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Alert } from 'react-native';

export default function UserScreen ({ navigation }) {
    const userName = "User";

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
                        navigation.navigate('SignScreen');
                    },
                },
            ]
        );
    };

    const navigateToScreen = (screenName) => {
        navigation.navigate(screenName);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.userInfo}>
                <Text style={styles.userName}>Hello, {userName}</Text>
            </View>

            <View style={styles.linkContainer}>
                <TouchableOpacity
                    style={styles.link}
                    onPress={() => navigateToScreen('PersonalScreen')}>
                    <Text style={styles.linkText}>Personal Information</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.link}
                    onPress={() => navigateToScreen('PreviousRentScreen')}>
                    <Text style={styles.linkText}>Rent Periods</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.link}
                    onPress={() => navigateToScreen('ChangePasswordScreen')}>
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
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#007EA7'
    },
    userInfo: {
        marginBottom: 10,
        marginTop: 30,
    },
    userName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white'
    },
    linkContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    link: {
        marginVertical: 10,
        backgroundColor: '#003459',
        padding: 15,
        paddingHorizontal: 60,
        borderRadius: 10
    },
    linkText: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    },
});