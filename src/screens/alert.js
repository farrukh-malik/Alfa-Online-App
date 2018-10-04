import React ,{Component} from 'react';
import {Text,Image,View,Dimensions,TouchableOpacity,ImageBackground,ScrollView} from 'react-native'
import Background from '../images/background.png'
import Excalimation from '../images/info.png'
import Button from '../components/button'
const {height,width} = Dimensions.get("window")

class AlertPage extends Component{
    constructor(){
        super();
        this.state={
            width:width,
            height:height > width ? height : width
        }
    }
    render(){
        const {width,height} =this.state                
        return(
            <ScrollView style={{height:height*1}}
            onLayout={(event)=>{
                console.log(event.nativeEvent.layout.width);
                this.setState({
                    width:event.nativeEvent.layout.width,
                })
            }}            
            >
            <ImageBackground source={Background} style={{width:width,height:height}}>
            <View style={{
                backgroundColor:'white',
                height:height*0.4,
                width:width*0.8,
                marginTop:height*0.3,
                // marginBottom:height*0.3,
                marginLeft:"auto",
                marginRight:"auto",
                borderRadius:15
            }}>
            <Text>
            {'\n'}
            {'\n'}
            {'\n'}
            </Text>
                <Text style={{
                    textAlign:"center",
                    fontWeight:"bold",
                    fontSize:20,
                    color:"black"
                }}>
                    Vanta medan vi kontaktar servern...
                </Text>
                <Text>
                    {'\n'}
                </Text>
                <Button
                accessibilityLabel="User not found"
                 height={height}
                 label="AVBRYT"
                 onPress={()=>alert("user not found")}
                 bordered = {true}
                />
            </View>
            <Image source={Excalimation}
                style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop:-(height*0.48)
                }}
            />

            </ImageBackground>
            </ScrollView>

        )
    }
}
export default AlertPage