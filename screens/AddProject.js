import React, { Component } from 'react';
import { Dimensions, Text, View, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-elements';


class AddProject extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'Kshitij Kayastha',
      username: 'kshitij',
      bio: 'Data Scientist',
    }
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
            
          </View>
          {/* Body Section */}
          <View>
            
          </View>
        </ScrollView>
      </View>
    );
  }
}

const {height, width} = Dimensions.get("window");


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#F5F5F5',
    backgroundColor: 'tomato',
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

export default AddProject