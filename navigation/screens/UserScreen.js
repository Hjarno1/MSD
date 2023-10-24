import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function UserScreen({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center'}}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>
                This is User
            </Text>
        </View>
    );
}
