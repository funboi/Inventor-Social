import React, { Component } from 'react';
import { TouchableOpacity, Image, Text, View, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

class CardL extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      image: props.image,
      title: props.title,
      dateTime: props.dateTime,
      bookmarked: props.bookmarked
    }
  }
  
  toggleBookmark = () => {
    this.setState(prevState => ({
      bookmarked: !prevState.bookmarked
    }));
  };
  
  render() {
    return (
      <TouchableOpacity>
        <View style={styles.container}>
          <ImageBackground style={styles.image} source={this.state.image} imageStyle={{ opacity: 0.8 }}>
            <View style={styles.main}>
              <Text style={styles.dateText}>{this.state.dateTime}</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={styles.title}>{this.state.title}</Text>
                <TouchableOpacity
                  onPress={this.toggleBookmark}
                >
                  <Ionicons name={this.state.bookmarked? 'bookmark' :'bookmark-outline'} size={25} color={'#FFF'} />
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  container : {
      width : '95%',
      height : 210,
      flexDirection: 'row',
      borderRadius : 15,
      overflow : 'hidden',
      backgroundColor: 'rgba(0,0,0,.8)',
      marginBottom: 15
  },
  image : {
      width : '100%',
      height : '100%',
  },
  main: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 15
  },
  title : {
    fontWeight : 'bold',
    fontSize : 18,
    color: '#FFF',
    width: '70%',
    marginBottom: 10,
  },
  dateText : {
    fontSize : 15, 
    color: '#BBC5C9',
    textAlign: 'right'
  },
});

export default CardL