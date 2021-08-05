import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { Appbar, Avatar } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Feed from './screens/Feed';
import LogIn from './screens/LogIn';
import SignUpUsername from './screens/signup/SignUpUsername';
import SignUpPassword from './screens/signup/SignUpPassword';
import SignUpEmail from './screens/signup/SignUpEmail';
import Profile from './screens/Profile';
import AddProject from './screens/AddProject';

// const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();


function DrawerContent() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Drawer content</Text>
    </View>
  );
}

const Header = ({ scene, previous, navigation }) => {

  return (
    <Appbar.Header style={styles.header}>
      {previous ? (
        <Appbar.BackAction
          onPress={navigation.pop}
          color={theme.colors.primary}
        />
      ) : (
        <TouchableOpacity
          onPress={() => navigation.openDrawer}
          style={{ marginRight: 5 }}
        >
          <Ionicons name="menu" size={30} color={'#333'} />
        </TouchableOpacity>
      )}
    </Appbar.Header>
  );
};


function FeedStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerTitle: 'Inventor',
        headerStyle: {
          height: 90
        }
      }}
    >
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="SignUpUsername" component={SignUpUsername} />
      <Stack.Screen name="SignUpPassword" component={SignUpPassword} />
      <Stack.Screen name="SignUpEmail" component={SignUpEmail} />
    </Stack.Navigator>
   );
 }

 function AddProjectStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerTitle: 'Inventor',
        headerStyle: {
          height: 90
        }
      }}
    >
      <Stack.Screen name="AddProject" component={AddProject} />
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="SignUpUsername" component={SignUpUsername} />
      <Stack.Screen name="SignUpPassword" component={SignUpPassword} />
      <Stack.Screen name="SignUpEmail" component={SignUpEmail} />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      // screenOptions={{
      //   header: ({ scene, previous, navigation }) => (
      //     <Header scene={scene} previous={previous} navigation={navigation} />
      //   ),
      // }}
      screenOptions={{
        headerShown: true,
        headerTitle: 'Inventor',
        headerStyle: {
          height: 90
        },
        headerMode: "screen"
      }}
    >
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="SignUpUsername" component={SignUpUsername} />
      <Stack.Screen name="SignUpPassword" component={SignUpPassword} />
      <Stack.Screen name="SignUpEmail" component={SignUpEmail} />
    </Stack.Navigator>
  );
}


class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName='Profile'
          labeled={false}
          backBehavior='order'
          barStyle={{ 
            backgroundColor: 'transparent',
            justifyContent: 'center',
          }}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              size = 20;
              color = focused ? '#0E8BFF' : '#444';

              if (route.name === 'Feed Stack') {
                iconName = focused
                ? 'home'
                : 'home-outline';
              } else if (route.name === 'Profile Stack') {
                iconName = focused
                ? 'person'
                : 'person-outline';
              } else if (route.name === 'Add Project Stack') {
                iconName = focused
                ? 'add-circle'
                : 'add-circle-outline';
              }

              return (
                <View>
                  <Ionicons name={iconName} size={size} color={color} />
                </View>
              );
            },
          })}
        >
          <Tab.Screen name="Feed Stack" component={FeedStack} />
          <Tab.Screen name="Add Project Stack" component={AddProjectStack} />
          <Tab.Screen name="Profile Stack" component={ProfileStack} />
        </Tab.Navigator>
      </NavigationContainer>      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#F5F5F5',
    justifyContent: 'flex-end'
  }
});

export default App