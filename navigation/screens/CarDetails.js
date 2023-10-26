import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const CarDetails = ({ route }) => {
  const { car } = route.params;

  return (
    <ScrollView style={styles.container}>
<Text style={styles.carName}>{car.name}</Text>
      <Image
        source={{ uri: car.pictures[0].srcUrl }}
        style={styles.carImage}
      />

      

      {/* Car Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.sectionTitle}>Description</Text>

        
        {/* Engine Details */}
        <View style={styles.detailsRow}>
          <DetailCard title="Car">
            <DetailItem label="Brand: " value={car.brand} />
            <DetailItem label="Type: " value={car.type} />
            <DetailItem label="Year: " value={car.manufacturingYear} />
            <DetailItem label="Top Speed(km/h): " value={car.topSpeed} />

          </DetailCard>
          <DetailCard title="Engine">
            <DetailItem label="Horsepower: " value={car.engine.horsePower} />
            <DetailItem label="Cylinders: " value={car.engine.cylinders} />
            <DetailItem label="Volume: " value={car.engine.volume} />
            <DetailItem label="Max RPM: " value={car.engine.maxRPM} />
          </DetailCard>
        </View>
        
        
      </View>

      {/* Reservation Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.sectionTitle}>Reservation Details</Text>

        <View style={styles.detailsRow}>
          <DetailCard title="Location">
            <DetailItem label="City: " value={car.location.name} />
            <DetailItem label="Address: " value={car.location.address} />
          </DetailCard>

          <DetailCard title="Price">
            <Text style={styles.priceText}>{car.price} dkk/day</Text>
          </DetailCard>
        </View>

        {/* Centered "Book Now" button at the bottom of Reservation Details */}
        <TouchableOpacity style={styles.bookNowButton}>
          <Text style={styles.bookNowButtonText}>Book Now</Text>
        </TouchableOpacity>
      </View>

      {/* Functionality Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.sectionTitle}>Functionality Details</Text>
        {/* Add functionality details here */}
      </View>

      {/* General Rules */}
      <View style={styles.detailsContainer}>
        <Text style={styles.sectionTitle}>General Rules</Text>
        {/* Add general rules here */}
      </View>
    </ScrollView>
  );
}


const DetailCard = ({ title, children }) => (
  <View style={styles.detailsSection}>
    <Text style={styles.detailTitle}>{title}</Text>
    <View style={styles.centeredContent}>{children}</View>
  </View>
);

const DetailItem = ({ label, value }) => (
  <View style={styles.detailItem}>
    <Text style={styles.detailItemLabel}>{label}</Text>
    <Text style={styles.detailItemValue}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  carName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  carImage: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  detailsContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginVertical: 10,
    padding: 10,
    justifyContent: 'space-between', // Align children vertically
    flex: 1, // Expand to fill available vertical space
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailsSection: {
    flex: 1,
    alignItems: 'center',
  },
  centeredContent: {
    alignItems: 'center',
  },
  detailTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  detailItemLabel: {
    fontSize: 16,
  },
  detailItemValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  priceText: {
    fontSize: 18,
    textAlign: 'center',
  },
  bookNowButton: {
    backgroundColor: '#1EA896',
    padding: 15,
    borderRadius: 8,
  },
  bookNowButtonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default CarDetails;