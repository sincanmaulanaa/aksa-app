import React, {Component} from "react";
import { View, Text, Pressable } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons"

class Navbar extends Component {
  render() {
    return (
      <TailwindProvider>
        <View className="Flex p-1 flex-row justify-around items-center absolute bottom-0 left-0 w-full bg-white shadow-sm">
            
        <Buttons icons="home" color="#000" name="Home" active={true}/>
        <Buttons icons="clock" color="#000" name="History" />
        <Buttons icons="user" color="#000" name="Akun" />
            
        </View>
      </TailwindProvider>
    );
  }
}

function Buttons(props){
    let classes = "flex-1 px-2 py-2 rounded-md bg-white shadow-sm items-center justify-center";

    if(props.active){
        classes += " bg-blue-100";
    }

    return(

        <Pressable className={classes}>
            <Icon name={props.icons} size={24} color={props.active ? "#3784DE" : "#000"}/>
            <Text className={props.active ? "text-[#3784DE]" : "text-[#000]"}>{props.name}</Text>
        </Pressable>
    )
}

export default Navbar;
