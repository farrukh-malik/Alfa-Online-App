import React ,{Component} from 'react';
import {View,Text,Image,Dimensions,TouchableOpacity,toufe} from 'react-native';
import Background from '../images/background.png'

const {height,width} = Dimensions.get('window')
class Splash extends Component{
    constructor(){
        super();
        this.state={
            width:width,
            height:height > width ? height : width,
        }

        setTimeout(()=>
        this.props.navigation.navigate("login")
        ,1500)
    }
    render(){console.log(this.props,"@@@@@@@@@@")
    const {width,height} =this.state        
        return(
            <View
            onLayout={(event)=>{
                console.log(event.nativeEvent.layout.width);
                this.setState({
                    width:event.nativeEvent.layout.width,
                })
            }}            
            >
                <Image source={Background} style={{width:width,height:height}}/>
                {/* <TouchableOpacity
                    accessible={true}
                    accessibilityLabel="Tap me!">
                        <Text accessibilityLiveRegion="polite">Press me!</Text>
                </TouchableOpacity> */}
            </View>
        )
    }
}
export default Splash