import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity  } from 'react-native';
import { FaceDetector } from 'expo';
import { Camera } from 'expo';

export default class MyCamera extends React.Component {
    constructor(props){
      super(props)
  
      this.state = {
        type: Camera.Constants.Type.front,
        faceDetected : false
      }
    }

  
    navigateToStartQuiz(faces){
      if(faces.faces.length && !this.state.faceDetected){
        this.setState({
          faceDetected : true
        })
        this.props.navigation.navigate('startQuiz')
      }
    }
  
    render() {
      const { hasCameraPermission } = this.state;
      if (hasCameraPermission === false) {
        return <Text>No access to camera</Text>;
      } else {
        return (
          <View style={{ flex: 1 }}>
            
            <Camera 
              style={{ flex: 1 }} 
              type={this.state.type}  
              onFacesDetected={this.navigateToStartQuiz.bind(this)}
              faceDetectorSettings= {{
                mode: FaceDetector.Constants.Mode.fast,
                detectLandmarks: FaceDetector.Constants.Mode.none,
                runClassifications: FaceDetector.Constants.Mode.none }}
              >
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'transparent',
                  flexDirection: 'row',
                }}>
                <TouchableOpacity
                  style={{
                    flex: 0.5,
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    this.setState({
                      type: this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back,
                    });
                  }}>
                  <Text
                    style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                    {this.state.type === Camera.Constants.Type.back ? "Switch To Front Camera" : "Switch To Back Camera" }
                  </Text>
                </TouchableOpacity>
                {/* <TouchableOpacity
                  style={{
                    flex: 0.5,
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    this.setState({
                      type: this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back,
                    });
                  }}>
                  <Text
                    style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                    {this.state.type === Camera.Constants.Type.back ? "Switch To Front Camera" : "Switch To Back Camera" }
                  </Text>
                </TouchableOpacity> */}
              </View>
            </Camera>
            
          </View>
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
  