import React ,{Component} from 'react'
import {TouchableOpacity,Text,View} from 'react-native'
const Button = (props) =>{
    const {height} = props
    return(
    <TouchableOpacity
            accessible={true}
            accessibilityLabel={props.accessibilityLabel}
    {...props}
    ><View 
    style={{
        width:"60%",
        borderWidth: props.bordered ? 1 : 0,
        borderColor: "#aab1ed" , 
        backgroundColor: props.bordered ? "white" : "#aab1ed",
        height:height*0.125,
        borderRadius:12,
        marginRight:"auto",
        marginLeft:"auto"
    }}
    >
    <Text style={{
        color: props.bordered ? "#aab1ed" :"white",
        fontSize:18,
        textAlign:"center",
        lineHeight:height*0.125,
        // margin:1
    }}>
        {props.label}
    </Text>
    </View></TouchableOpacity>

)} 
export default Button