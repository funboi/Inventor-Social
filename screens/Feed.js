import React, { Component } from 'react';
import { Dimensions, View, StyleSheet, ScrollView } from 'react-native';
import { Avatar } from 'react-native-elements';

import CardL from '../components/Card-L'

class Feed extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          title: 'Homemade Mini Nuclear Reactor',
          image: require('../assets/images/project5.jpeg'),
          creation_date: 'September 19, 2019',
          bookmarked: true
        },
        {
          title: 'Nepal Invents',
          image: require('../assets/images/project2.jpeg'),
          creation_date: 'June 23, 2020',
          bookmarked: false
        },
        {
          title: 'Happy Electricty Generator',
          image: require('../assets/images/project4.jpeg'),
          creation_date: 'November 2, 2019',
          bookmarked: false
        },
      ]
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
            <ScrollView 
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <Avatar
                rounded
                source={
                  require('../assets/images/profile1.jpeg')
                }
                size={75}
                containerStyle={{ marginRight: 10, marginLeft: 15}}
              >
              </Avatar>
              <Avatar
                rounded
                source={
                  require('../assets/images/profile2.png')
                }
                size={75}
                containerStyle={{ marginRight: 10}}
              >
              </Avatar>
              <Avatar
                rounded
                source={
                  require('../assets/images/profile3.png')
                }
                size={75}
                containerStyle={{ marginRight: 10}}
              >
              </Avatar>
              <Avatar
                rounded
                source={
                  require('../assets/images/profile4.png')
                }
                size={75}
                containerStyle={{ marginRight: 10}}
              >
              </Avatar>
              <Avatar
                rounded
                source={
                  require('../assets/images/profile5.png')
                }
                size={75}
                containerStyle={{ marginRight: 10}}
              >
              </Avatar>
              <Avatar
                rounded
                source={
                  require('../assets/images/profile6.png')
                }
                size={75}
                containerStyle={{ marginRight: 10}}
              >
              </Avatar>
            </ScrollView>
          </View>
          {/* Body Section */}
          <View style={styles.main}>
              <CardL 
                image={this.state.projects[0].image}
                title={this.state.projects[0].title}
                dateTime={this.state.projects[0].creation_date}
                bookmarked={this.state.projects[0].bookmarked}
              />
              <CardL 
                image={this.state.projects[1].image}
                title={this.state.projects[1].title}
                dateTime={this.state.projects[1].creation_date}
                bookmarked={this.state.projects[1].bookmarked}
              />
              <CardL 
                image={this.state.projects[2].image}
                title={this.state.projects[2].title}
                dateTime={this.state.projects[2].creation_date}
                bookmarked={this.state.projects[2].bookmarked}
              />
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
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
    paddingVertical: 10,
  },
  main: {
    flex: 0.9 * width,
    alignItems: 'center',
    paddingTop: 15
  },
  
})

export default Feed