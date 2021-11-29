import React, { useState } from "react";
import { Image, ScrollView, Text, View, StyleSheet, TextInput, Button, Alert, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Report = ({ navigation }) => {

  const [reportOfPurchases, setreportOfPurchases] = useState([]);
  const [answerResponse, setAnswerResponse] = useState("");


  function reportOfPurchasesAPI() {
    mode: 'no-cors',
    fetch(`http://localhost:8080/expenses/reportOfPurchases`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        setreportOfPurchases(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function closeTripAPI() {
    mode: 'no-cors',
      fetch(`http://localhost:8080/expenses/closeTrip`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }

      })
        .then((responseJson) => {
          console.log(responseJson);
          if (responseJson.status == 200) {
            setAnswerResponse("trip closed successfully")
          }
        })
        .catch((error) => {
          console.error(error);
        });
  }

  function openTripAPI() {
    mode: 'no-cors',
      fetch(`http://localhost:8080/expenses/openTrip`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }

      })
        .then((responseJson) => {
          console.log(responseJson);
          if (responseJson.status == 200) {
            setAnswerResponse("trip opened successfully")
          }

        })
        .catch((error) => {
          console.error(error);
        });
  }

  return (
    <View style={StyleSheet.container}>

      <Text> name of people and respectively values to be paid or pay</Text>

      <View style={StyleSheet.container}>
        {reportOfPurchases.map((index, report) => <Text key={report}>{index}</Text>)}
      </View>

      <Button
        title="final report "
        onPress={reportOfPurchasesAPI}
      />

      <Pressable
      style={styles.button}
        onPress={closeTripAPI}>
        <Text style={styles.textPressable}>Close Trip</Text>
        </Pressable>

      <Button
        title="Open trip "
        onPress={openTripAPI}
      />
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
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  textPressable:{
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  }
});


export default Report;
