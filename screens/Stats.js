import React, { useState } from "react";
import { ScrollView, Text, StyleSheet, View, TextInput, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stats = ({ navigation }) => {
    const [statusOfTrip, setstatusOfTrip] = useState([]);
    const [tripName, setTripName] = useState("");


    //send the name of trip to be checked in the back end

    function statusOfTripAPI() {
        mode: 'no-cors',
            fetch(`http://localhost:8080/expenses/statusOfTrip?trip=${tripName}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log(responseJson);
                    setstatusOfTrip(responseJson);

                })
                .catch((error) => {
                    console.error(error);
                });
    }




    return (
        <View>

            <View>
                {statusOfTrip.map((index, status) => <Text key={status}>{index}</Text>)}
            </View>

            <TextInput
                style={styles.text}
                onChangeText={setTripName}
                placeholder="Trip Name"
            />

            <Button
                title="status Of Trip"
                onPress={statusOfTripAPI}
                placeholder="IT"
            />


        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'fff',
        justifyContent: 'center',
    },
    text: {
        marginTop: 20,
        borderColor: "blue",
        borderWidth: 3,
        height: 40,
        margin: 10
    }
});

export default Stats;
