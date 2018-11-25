import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity  } from 'react-native';

export default class QuizQuestion extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            questionNo : 0
        }
    }

    componentWillMount(){
        const quest = fetch("https://opentdb.com/api.php?amount=10")
        .then(res => res.json())
        .then(data => this.setState({ data : data.results }))
    }

    nextQuestion(){
        console.log(this.state.data)
        if(this.state.questionNo < 10 ){
            this.setState({ 
                questionNo : ++this.state.questionNo 
            })
        }else{
            this.props.navigation.navigate("Total Score")
        }

    }

        render(){
            const { data, questionNo } = this.state
            return(
                <View style={{flex : 1, alignItems : "center", justifyContent : "center"}}>
                    { data !== undefined ? 
                        <View>
                            <Text>{data[questionNo].question}</Text>
                            <Button 
                                onPress = {() => this.nextQuestion()}
                                title = "Next Question"
                                color = "#01579B"
                            />
                        </View>
                        :
                        <View style={{flex : 1, alignItems : "center", justifyContent : "center"}}>
                            <Text>Wait A Minute</Text>
                        </View>
                     }
                </View>
            )
        }
        
    }