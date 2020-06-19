import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import ChatWindow from "./windows/ChatWindow"
import LoginWindow from "./windows/LoginWindow"

const AppNavigator = createStackNavigator(

{
  Login: LoginWindow,
  Chat: ChatWindow
},

{
  headerMode: "none"
}
  
);

export default createAppContainer(AppNavigator);