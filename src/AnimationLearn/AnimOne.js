import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class AnimOne extends Component {
    render() {
        return (
            <View style={styles.squre}>
            </View>
        );
    }
}
export default AnimOne;

const styles = StyleSheet.create({
    squre: {
        width: 100,
        height: 100,
        backgroundColor: 'red'
    }
});