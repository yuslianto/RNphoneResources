import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button,
    Platform,
    TouchableOpacity
} from "react-native";

import Icon from 'react-native-vector-icons/Ionicons';

const ButtonSuper = (props) => {
    
    return(
        <TouchableOpacity
            onPress={()=>this.onPress}
            style={[styles.buttonStyle, props.style]}
        >
            <Icon name="md-contacts" 
                color="white"
                size={20}
            />
            <Text style={[styles.textButtonStyle, ]}>
                {props.children}
            </Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    textButtonStyle: { 
        fontFamily: 'Arial', 
        fontSize: 15, 
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: 5
    },
});

export default ButtonSuper;