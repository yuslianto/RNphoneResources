import React, { Component } from "react";
import { 
    View,
    Text,
    Animated,
    StyleSheet
} from "react-native";

class AnimOne extends Component {

    constructor() {
        super();
        this.redSquare = new Animated.ValueXY(0, 0)
    }

    componentDidMount() {
        Animated.spring(this.redSquare,{
            toValue: {
                x: 100,
                y: 300
            }
        }).start();
    }

    render() {
        return (
            <Animated.View
                style={this.redSquare.getLayout()}
                /**
                style={{
                    left: this.redSquare.x,
                    top: this.redSquare.y
                }}
                */
            >
                <View style={styles.squre}>
                </View> 
            </Animated.View>
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