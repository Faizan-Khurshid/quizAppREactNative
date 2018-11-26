import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity  } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
var radio_props = [
    {label: 'param1', value: 0 },
    {label: 'param2', value: 1 }
  ];
   
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

    radioPropsFunc(){
        const { data } = this.state
        const a = []
        data[questionNo].incorrect_answers.map((value, index) => {
            a.push({ label : value, value : index })
       })
       return  a
    }
    

        render(){
            const { data, questionNo } = this.state
            data && console.log( "s" )
            
            return(
                <View style={{flex : 1, alignItems : "center", justifyContent : "center"}}>
                    { data !== undefined ? 
                        <View>
                            <Text>{data[questionNo].question}</Text>
                            <RadioForm
                                radio_props={[
                                    {label : data[questionNo].incorrect_answers[0], value : 0},
                                    {label : data[questionNo].incorrect_answers[1], value : 1 },
                                    {label : data[questionNo].incorrect_answers[2], value : 3},
                                    {label : data[questionNo].correct_answer, value : 4}
                                ]}
                                initial={0}
                                onPress={(value) => {this.setState({value:value})}}
                                />
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