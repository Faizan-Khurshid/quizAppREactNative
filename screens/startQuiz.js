import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity  } from 'react-native';


export default class Quiz extends React.Component {
    constructor(props){
      super(props)

      this.state ={}
    }
    startQuiz(data){
        this.props.navigation.navigate('QuizQuestions')
        
    }
    render(){
        const { data } = this.state
        return(
            <View style={{flex : 1 , alignItems : "center", justifyContent : "center" }}>
                <Button 
                    onPress={this.startQuiz.bind(this, data)}
                    title = "Start Quiz"
                    color = "#01579B"
                />
            </View>
        )
    }

}

