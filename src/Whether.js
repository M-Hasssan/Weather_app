import {Text, View, StyleSheet, Alert, ActivityIndicator} from 'react-native'
import { useState, useEffect } from 'react';
import Constants from 'expo-constants'
import React from 'react'
import WeatherInfo from './WeatherInfo';

const API_KEY = '2c6bda81ef3530ee30d17ff557cc522d';

export default function Whether() {

const [weatherData, setWeatherData] = useState(null);
const [loaded, setLoaded] = useState(false);


const fetchData = async (cityName) => {

    try {
        setLoaded(false);
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`)

        if (response.status == 200) {
            const data = await response.json();
            setWeatherData(data);
        }
        else {
            setWeatherData(null);
         }
         setLoaded(true);


    } catch(error) {
        Alert.alert('Error' , error.message)
    }

}

useEffect(() => {
    fetchData('London');
}, []);

if (!loaded) {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="red" />
        </View>
    )
}

    return (
        <View style={styles.container}>
            <View style={styles.header}>

                <Text style={styles.headerTitle}>Weather App</Text>

            </View>
            <WeatherInfo weatherData={weatherData} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#FCF5DB',
      paddingTop: Constants.statusBarHeight,
    },

    header: {
        alignItems: 'center',
        backgroundColor: '#C5D2EF',
        height: 80,
        justifyContent: 'center',
    },

    headerTitle: {
        fontSize: 29,
        fontWeight: 'bold,'
    }

  });
  
