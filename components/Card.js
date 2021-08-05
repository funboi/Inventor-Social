import React, { Component } from 'react';
import { TouchableOpacity, Image, Text, View, StyleSheet, ImageBackground } from 'react-native';

class Card extends Component {
  render() {
    const { image, title, text, dateTime } = this.props;

    return (
      <TouchableOpacity>
        <View style={styles.container}>
          <ImageBackground style={styles.image} source={image} imageStyle={{ opacity: 0.6 }}>
            <View style={styles.main}>
              <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.text}>{text[0]}</Text>
                <Text style={styles.text}>{text[1] ? 'Funded' : 'Looking for Funding'}</Text>
              </View>
              <Text style={styles.dateText}>{dateTime}</Text>
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
      height : 115,
      flexDirection: 'row',
      borderRadius : 15,
      marginBottom : 15,
      overflow : 'hidden',
      backgroundColor: 'rgba(0,0,0,.8)'
  },
  image : {
      width : '100%',
      height : '100%',
  },
  main: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'space-between',
    padding: 10
  },
  textContainer : {
    flex : 1,
  },
  title : {
    fontWeight : 'bold',
    fontSize : 18,
    color: '#FFF',
    marginVertical: 5,
    
  },
  text : {
    fontSize : 13, 
    color: '#F5F5F5',
  },
  dateText : {
    fontSize : 9, 
    color: '#BBC5C9',
    textAlign: 'right'
  },
});

export default Card