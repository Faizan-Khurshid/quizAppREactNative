import * as screens from "../screens"
import { createStackNavigator, createAppContainer } from "react-navigation";

const stackNavigator = createStackNavigator({
    home : {
        screen : screens.HomeScreen
    },

    Camera : {
        screen : screens.Camera
    },

    startQuiz : {
        screen : screens.startQuiz
    },

    QuizQuestions : {
        screen : screens.QuizQuestion
    }


})


const Navigator = createAppContainer(stackNavigator);

export default Navigator;