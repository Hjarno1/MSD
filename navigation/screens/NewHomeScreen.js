import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Alert } from 'react-native';

export default function UserScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.image}> 
            </View>
            <View style={styles.linkContainer}>
                <TouchableOpacity
                    style={styles.link}
                    onPress={() => navigation.navigate('ItemList')}>
                    <Text style={styles.linkText}>Browse our cars</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.link}
                    onPress={() => navigation.navigate('More')}>
                    <Text style={styles.linkText}>More Information - Rental Rules</Text>
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
        backgroundColor: '#007EA7'
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
        fontSize: 17,
        color: 'white',
        textAlign: 'center',
    },
    image: {
        width: '80%',
        height: 200,
        backgroundColor: '#003459',
        marginTop: 100,
    },
});
