import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text, View, StyleSheet, TextInput, Button, Alert, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Expense = ({ navigation }) => {

    const [trip, setTrip] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [username, setUsername] = useState("");
    const [answerResponse, setAnswerResponse] = useState("");

    function submitExpenses() {
        console.log(trip, description, price, username)
        mode: 'no-cors',
            fetch(`http://localhost:8080/expenses?username=${username}&trip=${trip}&description=${description}&price=${price}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                //.then((response) => response.json())
                .then(responseJson => {
                    console.log(responseJson);
                    if (responseJson.status == 400) {
                        setAnswerResponse("you can not add more items to this trip")
                    } else {
                        setAnswerResponse("item added successfully")
                    }
                })
    }
    //code to check numbers in the price field 

    //   function onChanged(text){
    //     let newText = '';
    //     let numbers = '0123456789';

    //     for (var i=0; i < text.length; i++) {
    //         if(numbers.indexOf(text[i]) > -1 ) {
    //             newText = newText + text[i];
    //         }
    //         else {
    //             // your call back function
    //             alert("please enter numbers only");
    //         }
    //     }
    //     this.setState({ myNumber: newText });
    // }

    return (
        <View style={StyleSheet.container}>
            <View style={StyleSheet.textStyle}>
                <TextInput
                    style={styles.text}
                    onChangeText={setUsername}
                    placeholder="username"

                />

                <TextInput
                    style={styles.text}
                    onChangeText={trip => setTrip(trip)}
                    defaultValue={trip}
                    placeholder="trip"
                />

                <TextInput
                    style={styles.text}
                    onChangeText={description => setDescription(description)}
                    defaultValue={description}
                    placeholder="description"
                />

                <TextInput
                    style={styles.text}
                    onChangeText={price => setPrice(price)}
                    keyboardType='number-pad'
                    defaultValue={price}
                    placeholder="price"
                    keyboardType="numeric"
                />

            </View>
            <View style={StyleSheet.buttonsStyle}>
                <Button
                    style={styles.button}
                    title="Submit"
                    onPress={submitExpenses}
                />
                <Pressable
                    style={styles.button}
                    onPress={() => navigation.navigate('Report')}>
                    <Text style={styles.textPressable}>Report</Text>
                </Pressable>

                <Button
                    style={styles.button}
                    title="Go to Details"
                    onPress={() => navigation.navigate('Stats')}
                />
            </View>
            <Text>{answerResponse}</Text>

        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'fff',
        justifyContent: 'center'
    },
    text: {
        borderColor: "blue",
        borderWidth: 3,
        height: 40,
        margin: 10
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
    textPressable: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }
});

export default Expense;
