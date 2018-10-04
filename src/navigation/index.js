import React ,{Component} from 'react'
import {createStackNavigator} from 'react-navigation'
import Splash from '../screens/splash'
import Login from '../screens/login'
import AlertPage from '../screens/alert'
const Nav  = createStackNavigator({
    home:{
        screen:Splash
    },
    login:{
        screen:Login
    },
    alert:{
        screen:AlertPage
    }
},{
    initialRouteKey : "home",
    headerMode:"none"
})
export default Nav