import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity  } from 'react-native';
import { FaceDetector } from 'expo';
import { Camera, Permissions } from 'expo';



export default class HomeScreen extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      hasCameraPermission: null,
    }
  }
  async cameraPermission() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return (
        <View style={{ flex : 1 , alignItems : "center", justifyContent : "center" }} >
          <Text>We need to scan your face in order to confirm that you are not a robot</Text>
          <Text>Allow Camera Permission To Scan your face and start the quiz</Text>
          <Button
            onPress={this.cameraPermission.bind(this)}
            title = "Open Camera"  
            color = "#01579B"
          />

        </View>
        )
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        this.props.navigation.navigate('Camera')
      );
    }
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
