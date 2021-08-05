import React, { Component } from 'react';
import { TouchableOpacity, Image, Text, View, StyleSheet, ImageBackground, Dimensions } from 'react-native';

class Section extends Component {
  render() {
    const { image, title } = this.props;

    return (
      <TouchableOpacity>
        <View style={styles.container}>
          <ImageBackground style={styles.image} source={image} imageStyle={{ opacity: 0.8 }}>
            <View style={styles.main}>
              <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    );
  }
}

const {height, width} = Dimensions.get("window")

const styles = StyleSheet.create({
  container : {
      width : width * 0.45,
      height : width * 0.45,
      flexDirection: 'row',
      borderRadius : 15,
      marginBottom : 15,
      marginStart: width * 0.015,
      marginEnd: width * 0.015,
      overflow : 'hidden',
      backgroundColor: 'rgba(0,0,0,.5)'
  },
  image : {
      width : '100%',
      height : '100%',
  },
  main: {
    flex: 1,
    padding: 10,
  },
  textContainer : {
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title : {
    fontWeight : 'bold',
    fontSize : 18,
    color: '#FFF',
    marginVertical: 5,
    textAlign: 'center'
    
  },
});

export default Section