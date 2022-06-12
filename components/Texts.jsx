import React from 'react';
import {Text} from "react-native";
import {TailwindProvider} from "tailwindcss-react-native";
import { AppLoading } from 'expo-app-loading';
import {useFonts} from "@expo-google-fonts/poppins";

function Texts(props) {


    return (
        <Text style={{fontFamily: "Poppins"}} className={this.props.className}>
            {this.props.children}
        </Text>
    );
}

export default Texts;