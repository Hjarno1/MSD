import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function ChangePasswordScreen({ navigation }) {
    const [currentPassword, setCurrentPassword] = React.useState('');
    const [newPassword, setNewPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');

    const handlePasswordChange = () => {
        // Implement password change logic here
        // For example, validate the passwords, send a request to your server, and handle responses
        // You can use state variables (currentPassword, newPassword, confirmPassword) to get user input
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#007EA7' }}>
            <Text style={{ fontSize: 26, fontWeight: 'bold', color:'white' }}>Change Password</Text>
            <TextInput
                placeholder="Current Password"
                secureTextEntry={true}
                value={currentPassword}
                onChangeText={setCurrentPassword}
                style={styles.input}
            />
            <TextInput
                placeholder="New Password"
                secureTextEntry={true}
                value={newPassword}
                onChangeText={setNewPassword}
                style={styles.input}
            />
            <TextInput
                placeholder="Confirm Password"
                secureTextEntry={true}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                style={styles.input}
            />
            <Button color='#003459' title="Change Password" onPress={handlePasswordChange} />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        paddingLeft: 10,
        backgroundColor: 'white'
    },
});
