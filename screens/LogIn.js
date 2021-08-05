import React, { Component } from 'react';
import { Dimensions, Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class LogIn extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      showPassword: false,
    }
  }

  setPassword = (val) => {
    this.setState({ password: val });
  }

  toggleShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword })
  }
  
  render () {
    return (
      <View style={styles.container}>
        <ScrollView 
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps='handled'
        >
          {/* Header Section */}
          <View style={styles.header}>
            <Text style={styles.textHeader}>Vento</Text>
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
            </View>
            {/* Password TextInput */}
            <View style={styles.action}>
              <TextInput
                style={styles.textInput}
                placeholder='Password'
                placeholderTextColor="#999"
                secureTextEntry={this.state.showPassword ? false : true}
                onChangeText={(val) => this.setPassword}
              />
              <TouchableOpacity onPress={this.toggleShowPassword}>
                {this.state.showPassword ?
                  <Icon 
                    name="eye-outline"
                    color="#fff"
                    size={20}
                  />
                  :
                  <Icon 
                    name="eye-off-outline"
                    color="#999"
                    size={20}
                  />
                }
              </TouchableOpacity>
            </View>
            {/* LogIn Button */}
            <TouchableOpacity 
              style={styles.button}
              onPress={() => this.props.navigation.navigate("Feed")}
            >        
              <Text style={styles.textButton}>Log In</Text>
            </TouchableOpacity>
            {/* Sign Up Section */}
            <View style={styles.signUpSection}>
              <Text style={styles.textSubheader}>Dont have an Account?</Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("SignUpUsername")}
                style={styles.textButtonSignUp}
              >
                <Text style={{color: '#0E8BFF', fontWeight: 'bold'}}> Sign Up</Text>
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
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHeader: {
    paddingTop: 100,
    color: '#000',
    fontWeight: 'bold',
    fontSize: 35,
    textTransform: 'uppercase'
  },
  textSubheader: {
    paddingVertical: 21,
    // paddingHorizontal: 50,
    color: '#555',
    fontSize: 15,
    textAlign: 'center'
  },
  main: {
    flex: 7,
    backgroundColor: 'blue',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  action: {
    width: width * 0.85,
    height: 55,
    flexDirection: 'row',
    borderRadius: 5,
    backgroundColor: '#444',
    marginBottom: 15,
    alignItems: 'center',
  },
  textInput: {
    width: width * 0.77,
    height: 55,
    paddingLeft: 10,
    color: '#fff',
    borderColor: '#fff',
  },
  button: {
    width: (width * 0.85),
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
  signUpSection: {
    flexDirection: 'row',
    marginTop: 5
  },
  textButtonSignUp: {
    alignItems: 'center',
    flexDirection: 'row'
  }
})

export default LogIn