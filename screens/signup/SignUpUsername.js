import React, { Component } from 'react';
import { Dimensions, Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


class  SignUpUsername extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      passwordConfirm: '',
      checkUsername: false,
      showPassword: false,
      showPasswordConfirm: false,
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <ScrollView
          keyboardShouldPersistTaps='handled'
        >
          {/* Header Section */}
          <View style={styles.header}>
            <Text style={styles.textHeader}>Choose Username</Text>
            <Text style={styles.textSubheader}>You can always change it later.</Text>
          </View>
          {/* Body Section */}
          <View style={styles.main}>
            {/* Username TextInput */}
            <View style={styles.action}>
              <TextInput
                style={styles.textInput}
                placeholder='Username'
                placeholderTextColor="#999"
              />
              {this.state.checkUsername ?
              <TouchableOpacity>
                <Icon 
                  name="checkmark-sharp"
                  color="#34b233"
                  size={20}
                />
              </TouchableOpacity>
              :
              null
              }
            </View>
            {/* Next Button */}
            <TouchableOpacity 
              style={styles.button}
              onPress={() => this.props.navigation.navigate("SignUpPassword")}
            >        
              <Text style={styles.textButton}>Next</Text>
            </TouchableOpacity>
            <View style={styles.logInSection}>
              <Text style={styles.textSubheader}>Have an Account?</Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("LogIn")}
                style={styles.textButtonLogIn}
              >
                <Text style={{color: '#0E8BFF', fontWeight: 'bold'}}> Log In</Text>
              </TouchableOpacity>
            </View>
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
    // paddingHorizontal: 50,
    color: '#555',
    fontSize: 15,
    textAlign: 'center'
  },
  main: {
    flex: 4,
    alignItems: 'center',
  },
  action: {
    width: width * 0.85,
    height: 55,
    flexDirection: 'row',
    borderRadius: 5,
    backgroundColor: '#444',
    marginBottom: 15,
    alignItems: 'center'
  },
  textInput: {
    width: width * 0.77,
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
  },
  logInSection: {
    flexDirection: 'row',
    marginTop: 5
  },
  textButtonLogIn: {
    alignItems: 'center',
    flexDirection: 'row',
    textAlign: 'left'
  }
})

export default SignUpUsername