import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions, SafeAreaView } from 'react-native'
import Search from './Search';

const WeatherInfo = ({weatherData}) => {

    const {
        name,
        visibility,
        weather: [{icon, description}],
        main: {temp, humidity, feels_like},
        wind: {speed},
        sys: {sunrise, sunset},
    } = weatherData;
    return (
        
        <SafeAreaView style={styles.container}>
            <Search />
            <View style={{alignItems: 'center'}}>
                <Text style={styles.title}>{name}</Text>
            </View>
            <View style={styles.logo}>
                <Image
                style={styles.largeIcon}
                source={{uri: `https://openweathermap.org/img/wn/${icon}.png`}}
                />
                <Text style={styles.currentTemp}>{temp} °C</Text>
            </View>
            <Text style={styles.description}>{description}</Text>
            <View style={styles.extrainfo}>
                <View style={styles.info}>
                    <Image
                    style={styles.smallIcon}
                    source={require('../assets/temp.png') }
                    />
                    <Text style={styles.infoText}>{feels_like} °C</Text>
                    <Text style={styles.infoText}>Feels Like</Text>
                </View>

                <View style={styles.info}>
                    <Image
                    style={styles.smallIcon}
                    source={require('../assets/humidity.png') }
                    />
                    <Text style={styles.infoText}>{humidity} %</Text>
                    <Text style={styles.infoText}>Humidity</Text>
                </View>
            </View>
            <View style={styles.extrainfo}>
                <View style={styles.info}>
                    <Image
                    style={styles.smallIcon}
                    source={require('../assets/speed.png') }
                    />
                    <Text style={styles.infoText}>{speed} m/s</Text>
                    <Text style={styles.infoText}>Wind Speed</Text>
                </View>

                <View style={styles.info}>
                    <Image
                    style={styles.smallIcon}
                    source={require('../assets/visibility.png') }
                    />
                    <Text style={styles.infoText}>{visibility} %</Text>
                    <Text style={styles.infoText}>Visibility</Text>
                </View>
            </View>

            <View style={styles.extrainfo}>
                <View style={styles.info}>
                    <Image
                    style={styles.smallIcon}
                    source={require('../assets/sunrise.png') }
                    />
                    <Text style={styles.infoText}>{new Date(sunrise*1000).toLocaleDateString()}</Text>
                    <Text style={styles.infoText}>Sunrise</Text>
                </View>

                <View style={styles.info}>
                    <Image
                    style={styles.smallIcon}
                    source={require('../assets/sunset.png') }
                    />
                    <Text style={styles.infoText}>{new Date(sunset*1000).toLocaleDateString()}</Text>
                    <Text style={styles.infoText}>Sunset</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        margintop: 15, 
        
    },

    title: {
        width: '100%',
        textAlign: 'center',
        fontSize: 26,
        fontWeight: 'bold',
        color: '#e96e50',
        marginTop: 10,
    },

    logo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    
    largeIcon: {
        width: 200,
        height: 100,

    },

    currentTemp: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    description: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 50,
    },

    extrainfo: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 7,

    },

    info: {
        width: Dimensions.get('screen').width/2.5,
        backgroundColor: '#D0EAFA',
        padding: 10,
        borderRadius: 15,
        justifyContent: 'center',

    },

    smallIcon: {
        height: 40,
        width: 40,
        borderRadius: 40/2,
        marginLeft: 50,
    },

    infoText: {
        textAlign: 'center',
        fontsize: 18,

    }
});

export default WeatherInfo
