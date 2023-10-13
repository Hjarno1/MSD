import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function MoreInformationScreen({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>
                This is more information
            </Text>
        </View>
    );
}
