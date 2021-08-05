import React, { Component } from 'react';
import { Dimensions, Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';


class  SignUpEmail extends Component {
  
  render () {
    return (
      <View style={styles.container}>
        <ScrollView
          keyboardShouldPersistTaps='handled'
        >
          {/* Header Section */}
          <View style={styles.header}>
            <Text style={styles.textHeader}>Add Email</Text>
            <Text style={styles.textSubheader}>We will send a confirmation code on this email.</Text>
          </View>
          {/* Body Section */}
          <View style={styles.main}>
            {/* Email TextInput */}
            <View style={styles.action}>
              <TextInput
                placeholder='Email'
                placeholderTextColor="#999"
                style={styles.textInput}
              />
            </View>
            {/* Next Button */}
            <TouchableOpacity 
              style={styles.button}
              onPress={() => this.props.navigation.navigate("Feed")}
            >        
              <Text style={styles.textButton}>Next</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
          
      </View>
    );
  }
}

const {height, width} = Dimensions.get("screen")

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textHeader: {
    paddingTop: 100,
    color: '#000',
    fontWeight: 'bold',
    fontSize: 35
  },
  textSubheader: {
    paddingVertical: 21,
    paddingHorizontal: 50,
    color: '#555',
    fontSize: 15,
    textAlign: 'center'
  },
  main: {
    flex: 4,
    alignItems: 'center',
  },
  action: {
    flexDirection: 'row',
    borderRadius: 5,
    backgroundColor: '#444',
    marginBottom: 15
  },
  textInput: {
    width: width * 0.85,
    height: 55,
    paddingLeft: 10,
    color: '#fff',
    borderColor: '#fff',
  },
  button: {
    width: width * 0.85,
    height: 55,
    borderRadius: 5,
    backgroundColor: '#0E8BFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textButton: {
    color: "#fff",
    fontWeight: 'bold',
    fontSize: 18
  }
})

export default SignUpEmail