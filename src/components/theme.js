import { createTheme } from '@material-ui/core';

//const blue = "#0B7289"
//const orange = "#ffB460"

export default createTheme ({
    palette: {
        common:{
            blue: "#0B7289",
            orange: "#ffB460"
        },
    
    primary: {
        main: "#0B7289"
    },
    secondary: {
        main: "#ffB460"
    }
    },
    typography: {
        tab:{
            fontFamily: "Raleway",
            textTransform: "none",
            fontWeight: 700,
            fontSize: "1rem"
        },
        signUp:{
            textTransform:"none",
            fontSize:"1rem",
            color:"white"
        }
    }
})


//import React from "react";
//import { Header } from "react-navigation";
//import { View, Platform, Image, StyleSheet } from "react-native";
//import { SimpleLineIcons } from '@expo/vector-icons'; 
//const CustomHeader = props => {
  //return (
    //<View>
        //<SimpleLineIcons name="menu" size={24} color={tintColor} />
        // <Header headerLeft={<SimpleLineIcons name="menu" size={24} color='#6a1b9a' />} {...props} />
    //</View>
 // );
//};
//export default CustomHeader;