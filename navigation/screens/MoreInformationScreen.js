import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';

export default function UserScreen({ navigation }) {
    const [isRuleExpanded, setRuleExpanded] = React.useState(false);
    const [isTermsExpanded, setTermsExpanded] = React.useState(false);

    const toggleRuleExpand = () => {
        setRuleExpanded(!isRuleExpanded);
    }

    const toggleTermsExpand = () => {
        setTermsExpanded(!isTermsExpanded);
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <Text style={styles.pageHeader}>Information</Text>
                <View style={styles.paragraphContainer}>
                    <TouchableOpacity onPress={toggleRuleExpand}>
                        <Text style={styles.header}>Rental Rules</Text>
                    </TouchableOpacity>
                    {isRuleExpanded ? (
                        <Text style={styles.paragraph}>
                            To use our car rental app, renters must be at least 21 years old with a 
                            valid driver's license. Reservations can be made online for a minimum one-day
                            rental. Payment requires a valid credit card, and optional insurance is 
                            available. Renters select pickup and return locations, and the vehicle 
                            must be returned with the same fuel level. Mileage limits may apply. 
                            Smoking is prohibited, and pets may require specific conditions. 
                            Maintenance issues should be reported promptly. Violating these rules 
                            may result in fines and penalties.
                        </Text>
                    ) : (
                        <Text style={styles.paragraph}>
                            To use our car rental app, renters must be at least 21 years old with a 
                            valid driver's license. Reservations can be made online for a minimum one-day
                            rental.{" "}
                            <Text style={{ color: '#00A8E8'}} onPress={toggleRuleExpand}>Read more</Text>
                        </Text>
                    )}
                </View>
                <View style={styles.paragraphContainer}>
                    <TouchableOpacity onPress={toggleTermsExpand}>
                        <Text style={styles.header}>Terms of Service</Text>
                    </TouchableOpacity>
                    {isTermsExpanded ? (
                        <Text style={styles.paragraph}>
                            Welcome to the SOCKS App. By using the App, you agree to 
                            these Terms of Service, which govern your access and use of the App provided 
                            by SOCKS. You must be at least 18 years old to use the App. 
                            To access certain features, you may need to create an account and provide 
                            accurate information. You are responsible for maintaining account security 
                            and agree to all rental terms when reserving vehicles. Fees, payments, 
                            cancellations, and refunds are governed by the rental agreement and refund 
                            policy. Please review our Privacy Policy for information on how we handle 
                            your data. All content on the App is our intellectual property. 
                            We may terminate your access for violating these terms. The App is provided 
                            'as is,' and we disclaim warranties. We are not liable for damages 
                            resulting from your use of the App. We reserve the right to update 
                            these terms, and the App is governed by the laws of [DAWWAAK]. 
                            If you have questions, contact us at [Your Contact Information]. 
                            Thank you for using SOCKS.
                        </Text>
                    ) : (
                        <Text style={styles.paragraph}>
                            Welcome to the SOCKS App. By using the App, you agree to 
                            these Terms of Service, which govern your access and use of the App provided 
                            by SOCKS. You must be at least 18 years old to use the App.{'\n'}
                            <Text style={{ color: '#00A8E8' }} onPress={toggleTermsExpand}>Read more</Text>
                        </Text>
                    )}
                </View>
            </ScrollView>
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
    contentContainer: {
        alignItems: 'center',
        padding: 16,
        width: '80%',
    },
    pageHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color: 'white'
    },
    paragraphContainer: {
        marginBottom: 16,
        borderRadius: 10,
        marginTop: 20,
        backgroundColor: '#003459'
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
    },
    paragraph: {
        fontSize: 16,
        lineHeight: 24,
        color: 'white',
        margin: 15
    },
});
