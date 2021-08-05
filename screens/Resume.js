import React, { Component } from 'react';
import { Dimensions, Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Card from '../components/Card';
import Section from '../components/Section';
// import { Card } from 'react-native-elements';


class Resume extends Component {

  render () {
    return (
      <ScrollView 
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps='handled'
        scrollEnabled={true}
      >
          {/* Main Section  */}
          <View style={styles.main}>
            <Section 
              image={require('../assets/images/office1.png')}
              title='Create a New Resume'
            />
            <Section 
              image={require('../assets/images/creation1.jpeg')}
              title='Upload a Resume'
            />
            <Section 
              image={require('../assets/images/planet3.jpeg')}
              title='View your Resume'
            />
            <Section 
              image={require('../assets/images/home_office1.jpeg')}
              title='Review your Resume'
            />
          </View>
        </ScrollView>
    );
  }
}

const {height, width} = Dimensions.get("screen")

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: '100%',
    paddingTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Resume