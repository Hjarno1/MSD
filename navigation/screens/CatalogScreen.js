import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function CatalogScreen({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <Text
                onPress={() => navigation.navigate('Home')} 
                style={{ fontSize: 26, fontWeight: 'bold' }}>
                This is Catalog
            </Text>
        </SafeAreaView>
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