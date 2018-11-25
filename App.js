import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity  } from 'react-native';
import { FaceDetector } from 'expo';
import { Camera, Permissions } from 'expo';
import Navigator from "./navigation/AppNavigator" 


export default class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      
    }
  }


  render() {
      return (
        <View style={{flex: 1}}>
        <Navigator />
      </View>
      )
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
