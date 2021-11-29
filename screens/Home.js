import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text, View, TextInput, Button, Alert, StyleSheet, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Home = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [answerResponse, setAnswerResponse] = useState("");

    global.token = '';

    function signupAPI() {
        console.log(username, password)
        mode: 'no-cors',
            fetch(`http://localhost:8080/expenses/signup?username=${username}&password=${password}`, {
                method: 'GET',

            })
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log(responseJson);
                    console.log(responseJson.token);
                    token = responseJson.token;
                    if (token) {
                        navigation.navigate("Expense");
                    } else {
                        setAnswerResponse("please provide a correct username and/ or password")
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
    }



    return (
        <View style={StyleSheet.container}>

            <Text>Login</Text>
            <TextInput
                style={styles.text}
                onChangeText={setUsername}
                placeholder="username"

            />

            <TextInput
                style={styles.text}
                //added the line below to hide characters
                secureTextEntry={true}
                onChangeText={setPassword}
                placeholder="password"
            />

            <Button
                title="Sign in"
                onPress={signupAPI} />

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
    }
});

export default Home;
