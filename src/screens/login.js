import React ,{Component} from 'react'
import {View,Text,TouchableOpacity,Image,ImageBackground,ScrollView,TextInput,Dimensions} from 'react-native'
import  DeviceInfo from 'react-native-device-info';
import Background from '../images/background.png'
import Logo from '../images/logo.png'
import Button from '../components/button'
const {height,width} = Dimensions.get("window")
class Login extends Component{
    constructor(){
        super();
        this.state={
            width:width,
            height:height > width ? height : width
        }
    }
    componentDidMount(){
        console.log(DeviceInfo.getUniqueID())
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
            <View
            style={{
                width:width*0.8,
                marginLeft:"auto",
                marginRight:"auto",
                height:height*0.60,
                backgroundColor:"white",
                borderRadius:15,
                marginTop:15
            }}
            >
            <Image source={Logo} style={{width:width*0.80,margin:10}}/>
            <View style={{borderBottomColor:"#7068AB",borderBottomWidth:1,width:"80%",marginRight:"auto",marginLeft:"auto"}}>
            <Text style={{textAlign:"center",fontSize:18,color:"#7068AB"}}>
                Valkommen till Mina Resor
            </Text>
            <Text style={{textAlign:"center",fontSize:12,color:"#7068AB"}}>
                Sarskild kollektivtradik i Uppsala karmmun
            </Text>
            <Text></Text>
            </View>
            <View style={{width:"90%",marginLeft:"auto",marginRight:"auto"}}>
            <Text></Text>
                <Text style={{fontSize:18,fontWeight:"bold",textAlign:"center"}}>
                    Logga in genom att ange ditt personnummer ,12 siffor
                </Text>
                <Text></Text>
                <TextInput placeholder="AAAAMMDDXXXX" style={{width:"75%",
                marginRight:"auto",textAlign:"center",marginLeft:"auto",fontSize:22}} underlineColorAndroid="transparent"/>
            </View>
            <Button
            accessibilityLabel="press to continue"
            height={height}
            label="FORTSATT"
            onPress={()=>this.props.navigation.navigate("alert")}
            bordered = {false}
            />
            </View>
            </ImageBackground>
            </ScrollView>
        )
    }
}
export default Login