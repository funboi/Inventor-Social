import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar } from 'react-native-elements';

const Tab = createMaterialTopTabNavigator();


function Home () {
  return (
    <View style={styles.container2}>
      <Text>Home</Text>
    </View>
  )
}

function Settings () {
  return (
    <View style={styles.container2}>
      <Text>Settings</Text>
    </View>
  )
}

ScrollView

class Test extends Component {
  render () {
    return (
      <View style={styles.container}>
        <ScrollView 
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps='handled'
        >
          {/* Header Section */}
          <View style={styles.header}>
            <Avatar
              rounded
              source={
                require('../assets/images/profile1.jpeg')
              }
              size={120}
            >
              {/* <Avatar.Accessory {...accessoryProps} /> */}
            </Avatar>
            <Text style={styles.textName}>Kshitij Kayastha</Text>
            <Text style={styles.textBio}>Data Scientist</Text>
          </View>
          {/* Body Section */}
          <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Settings" component={Settings}/>
          </Tab.Navigator>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    width: '100%',
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    marginHorizontal: 15,
  },
  textName: {
    color: '#293241',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 21
  },
  textBio: {
    marginTop: 5,
    color: '#555',
    fontSize: 15,
    textAlign: 'center'
  },
})

export default Test