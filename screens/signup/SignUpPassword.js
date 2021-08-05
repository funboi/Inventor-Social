import React, { Component } from 'react';
import { Dimensions, Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class  SignUpPassword extends Component {
  
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

  setPassword = (val) => {
    this.setState({ password: val });
  }

  setPasswordConfirm = (val) => {
    this.setState({ passwordConfirm: val });
  }

  toggleShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword })
  }

  toggleShowPasswordConfirm = () => {
    this.setState({ showPasswordConfirm: !this.state.showPasswordConfirm })
  }
  
  render () {
    return (
      <View style={styles.container}>
        <ScrollView
          keyboardShouldPersistTaps='handled'
        >
          {/* Header Section */}
          <View style={styles.header}>
            <Text style={styles.textHeader}>Create a Password</Text>
            <Text style={styles.textSubheader}>For security, your password must be 6 characters or more.</Text>
          </View>
          {/* Body Section */}
          <View style={styles.main}>
            {/* Password TextInput */}
            <View style={styles.action}>
              <TextInput
                style={styles.textInput}
                placeholder='Password'
                placeholderTextColor="#999"
                secureTextEntry={this.state.showPassword ? false : true}
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
            {/* Password Confirmation TextInput */}
            <View style={styles.action}>
              <TextInput
                style={styles.textInput}
                placeholder='Password Confirmation'
                placeholderTextColor="#999"
                secureTextEntry={this.state.showPasswordConfirm ? false : true}
                onChangeText={(val) => this.setPasswordConfirm}
              />
              <TouchableOpacity onPress={this.toggleShowPasswordConfirm}>
                {this.state.showPasswordConfirm ?
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
            {/* Next Button */}
            <TouchableOpacity 
              style={styles.button}
              onPress={() => this.props.navigation.navigate("SignUpEmail")}
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
    justifyContent: 'center',
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
  }
})

export default SignUpPassword