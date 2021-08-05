import React, { Component } from 'react';
import { Dimensions, Text, View, StyleSheet, ScrollView } from 'react-native';
import { Avatar } from 'react-native-elements';
import { Tabs } from '../components/tabNav';



class Profile extends Component {

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
          contentContainerStyle={{ flexGrow: 1, }}
          keyboardShouldPersistTaps='handled'
          scrollEnabled={true}
        >
          {/* Header Section */}
          <View style={styles.header}>
            <Avatar
              rounded
              source={
                require('../assets/images/profile1.jpeg')
              }
              size={120}
            />
            <Text style={styles.textName}>{this.state.name}</Text>
            <Text style={styles.textBio}>{this.state.bio}</Text>
          </View>
          {/* Body Section */}
          <Tabs />
        </ScrollView>
      </View>
    );
  }
}

const {height, width} = Dimensions.get("window");


const styles = StyleSheet.create({
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

export default Profile