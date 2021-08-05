import React, { Component } from 'react';
import { Dimensions, View, StyleSheet, ScrollView } from 'react-native';
import Card from '../components/Card';


class Projects extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          title: 'Nepal Invents',
          creation_date: '05-15-2021 10:34 AM',
          description: 'Connecting all inventors',
          image: require('../assets/images/project1.jpeg'),
          funding: true
        },
        {
          title: 'Energy from Air',
          creation_date: '06-20-2021 8:13 PM',
          description: 'Clean Magic Energy',
          image: require('../assets/images/project2.jpeg'),
          funding: false
        },
        {
          title: 'Nuclear Waste Recycling',
          creation_date: '06-25-2021 3:01 AM',
          description: 'Recycle Right.',
          image: require('../assets/images/project3.jpeg'),
          funding: true
        },
        {
          title: 'Greene',
          creation_date: '07-21-2021 9:08 PM',
          description: 'Find places to recycle',
          image: require('../assets/images/project4.jpeg'),
          funding: false
        },
        {
          title: 'ERP Nepal',
          creation_date: '07-23-2021 5:22 PM',
          description: 'Affordable ERP systems for local businesses',
          image: require('../assets/images/project5.jpeg'),
          funding: true
        },
       ]
    }
  }
  
  render () {
    return (
      <ScrollView 
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps='handled'
      >
        {/* Main Section */}
        <View style={styles.main}>
          <Card
            image={this.state.projects[0].image}
            title={this.state.projects[0].title}
            text={[this.state.projects[0].description, this.state.projects[0].funding]}
            dateTime={this.state.projects[0].creation_date} 
          />
          <Card
            image={this.state.projects[1].image}
            title={this.state.projects[1].title}
            text={[this.state.projects[1].description, this.state.projects[1].funding]}
            dateTime={this.state.projects[1].creation_date} 
          />
          <Card
            image={this.state.projects[2].image}
            title={this.state.projects[2].title}
            text={[this.state.projects[2].description, this.state.projects[2].funding]}
            dateTime={this.state.projects[2].creation_date} 
          />
          <Card
            image={this.state.projects[3].image}
            title={this.state.projects[3].title}
            text={[this.state.projects[3].description, this.state.projects[3].funding]}
            dateTime={this.state.projects[3].creation_date} 
          />
          <Card
            image={this.state.projects[4].image}
            title={this.state.projects[4].title}
            text={[this.state.projects[4].description, this.state.projects[4].funding]}
            dateTime={this.state.projects[4].creation_date} 
          />
        </View>
      </ScrollView>
    );
  }
}

const {height, width} = Dimensions.get("screen")

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    paddingTop: 15,
    flexGrow: 1
  },
})

export default Projects