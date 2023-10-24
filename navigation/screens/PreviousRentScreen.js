import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

// Define an empty array since there are no previous rent periods
const previousRentPeriods = [];

export default function PreviousRentScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Previous Rent Periods</Text>
      {previousRentPeriods.length === 0 ? (
        <Text style={styles.noRecordsText}>No previous rent periods to display.</Text>
      ) : (
        previousRentPeriods.map((item, index) => (
          <View key={index} style={styles.rentPeriodContainer}>
            <Text style={styles.rentPeriodText}>{item.period}</Text>
            <Text style={styles.rentAmountText}>{item.amount}</Text>
          </View>
        ))
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  noRecordsText: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  rentPeriodContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 8,
  },
  rentPeriodText: {
    fontSize: 16,
  },
  rentAmountText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
