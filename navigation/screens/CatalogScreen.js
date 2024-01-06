import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Button,
    FlatList,
    Image,
    TouchableOpacity,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function CatalogScreen() {
    const navigation = useNavigation();

    const [cars, setCars] = useState([]);
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [text, setText] = useState('');

    useEffect(() => {
        AsyncStorage.getItem('carsData')
            .then((data) => {
                if (data) {
                    setCars(JSON.parse(data));
                } else {
                    fetchData();
                }
            })
            .catch((error) => console.error('Error retrieving data: ', error));
    }, []);

    const fetchData = () => {
        axios
            .get('https://themikkel.dk/unfollow/sdu/cars/cars')
            .then((res) => {
                setCars(res.data);

                AsyncStorage.setItem('carsData', JSON.stringify(res.data))
                    .then(() => console.log('Data stored successfully'))
                    .catch((error) => console.error('Error storing data:', error));
            })
            .catch((err) => console.log(err));
    };

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);

        const tempDate = new Date(currentDate);
        const fDate = `${tempDate.getDate()}/${tempDate.getMonth() + 1}/${tempDate.getFullYear()}`;
        const fTime = `at ${tempDate.getHours()}:${tempDate.getMinutes()}`;

        const selectedDateTime = `${fDate} ${fTime}`;
        setText(selectedDateTime);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const renderItem = ({ item }) => (
        <View style={styles.fakeCars}>
            <Image source={{ uri: item.pictures[0].srcUrl }} style={styles.foto} />
            <View style={styles.detailButtonContainer}>
                <Text style={styles.carTitle}>{item.name}</Text>
                <TouchableOpacity
                    style={styles.detailButton}
                    onPress={() => navigation.navigate('CarDetails', { car: item })}
                >
                    <Text style={styles.buttonText}>Details</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View style={styles.pickersOuter}>
                    <View style={styles.pickersInner}>
                        <Button title="DatePicker" onPress={() => showMode('date')} />
                    </View>
                    <View style={styles.pickersInner}>
                        <Button title="TimePicker" onPress={() => showMode('time')} />
                    </View>
                </View>
                <Text style={styles.dateTimeText}>{text}</Text>
                <View style={styles.separator} />
                {show && (
                    <DateTimePicker
                        testID='dateTImePicker'
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display='default'
                        onChange={onChange}
                    />
                )}
            </View>

            <FlatList data={cars} keyExtractor={(item) => cars.id} renderItem={renderItem} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#007EA7',
    },
    fakeCars: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 200,
        backgroundColor: '#007EA7',
        borderColor: '#00171F',
        borderBottomWidth: 5,
    },
    pickersOuter: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    pickersInner: {
        marginBottom: 15,
        marginHorizontal: 20,
    },
    foto: {
        width: 150,
        height: 150,
        borderRadius: 20,
        shadowOpacity: 0.1,
        backgroundColor: 'transparent',
        marginLeft: 30,
    },
    detailButton: {
        backgroundColor: '#003459',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        width: 100,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15,
    },
    carTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#00171F',
    },
    detailButtonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dateTimeText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 12,
    },
    separator: {
        backgroundColor: '#00171F',
        height: 4.5,
        width: '100%',
    },
});