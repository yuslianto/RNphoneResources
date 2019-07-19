import React, { Component } from "react";
import { 
    View,
    Text,
    Animated,
    Easing,
    StyleSheet,
    Button,
} from "react-native";

class AnimOne extends Component {

    constructor() {
        super();
        this.state = {
            redSquare: new Animated.ValueXY(0, 0),
            blueSquare: new Animated.ValueXY(0, 0),
            greenSquare: new Animated.Value(0),
            yellowSquare: new Animated.Value(1),
        }
        //this.redSquare = new Animated.ValueXY(0, 0)
        //this.blueSquare = new Animated.ValueXY(0, 0)
    }

    runYellowSquare = () => {
        Animated.timing(this.state.yellowSquare,{
            toValue: 0,
            duration: 5000,
            //delay: 1000,
            //easing: Easing.elastic(4)
        }).start();
    }

    runGreenSquare = () => {
        Animated.timing(this.state.greenSquare,{
            toValue: 1,
            duration: 5000,
            delay: 1000,
            //easing: Easing.elastic(4)
        }).start();
    }

    runRedSquare = () => {
        Animated.timing(this.state.redSquare,{
            toValue: {
                x: 100,
                y: 300
            },
            duration: 5000,
            delay: 1000,
            easing: Easing.elastic(4)
        }).start();
    }

    runBlueSquare = () => {
        Animated.spring(this.state.blueSquare,{
            toValue: {
                x: -100,
                y: 400
            },
        }).start();
    }

    /**

    componentDidMount() {
        Animated.timing(this.redSquare,{
            toValue: {
                x: 100,
                y: 300
            },
            duration: 2000,
            delay: 1000,
            easing: Easing.elastic(4)
        }).start();
        Animated.spring(this.blueSquare,{
            toValue: {
                x: 300,
                y: 500
            },
        }).start();
    }
     */

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.navSquare}>
                    <Animated.View
                        style={{
                            opacity: this.state.yellowSquare,
                            //left: this.state.yellowSquare.interpolate({
                            //    inputRange:[0,1],
                            //    outputRange:[300,0]
                            //}),
                            transform:[{
                                rotateX: this.state.yellowSquare.interpolate({
                                    inputRange: [0,0.5,1],
                                    outputRange:['0deg','180deg','0deg']
                                })
                            }]
                        }}
                    >
                        <View style={styles.yellowSq}>
                            <Text style={styles.textStyle}>
                                Yellow
                            </Text>
                        </View>
                    </Animated.View>

                    <Animated.View
                        style={{
                            opacity: this.state.greenSquare
                        }}
                    >
                        <View style={styles.greenSq}>
                            <Text style={styles.textStyle}>
                                Green
                            </Text>
                        </View>
                    </Animated.View>

                    <Animated.View
                        style={this.state.redSquare.getLayout()}
                        /**
                        style={{
                            left: this.redSquare.x,
                            top: this.redSquare.y
                        }}
                        */
                    >
                        <View style={styles.redSq}>
                            <Text style={styles.textStyle}>
                                Red
                            </Text>
                        </View> 
                    </Animated.View>

                    <Animated.View
                        style={this.state.blueSquare.getLayout()}
                    >
                        <View style={styles.blueSq}>
                            <Text style={styles.textStyle}>
                                Blue
                            </Text>
                        </View>
                    </Animated.View>
                </View>

                <View style={styles.navTextStyle}>
                    <Animated.Text
                        style={{
                            fontSize: this.state.yellowSquare.interpolate({
                                inputRange:[0,0.5,1],
                                outputRange:[50,0,100]
                            }),
                            color: this.state.yellowSquare.interpolate({
                                inputRange:[0,1],
                                outputRange:['blue','red']
                            }),
                            transform:[{
                                rotateX: this.state.yellowSquare.interpolate({
                                    inputRange: [0,0.5,1],
                                    outputRange:['0deg','180deg','0deg']
                                })
                            }]
                        }}
                    >
                        <Text>Yellow</Text>
                    </Animated.Text>
                </View>
                
                <View sttyle={styles.navButtonStyle}>
                    <Button
                        title="run animation red square"
                        onPress={this.runRedSquare}
                        color='red'
                    />
                    <Button
                        title="run animation blue square"
                        onPress={this.runBlueSquare}
                        color='blue'
                    />
                    <Button
                        title="run animation green square"
                        onPress={this.runGreenSquare}
                        color='green'
                    />
                    <Button
                        title="run animation yellow square"
                        onPress={this.runYellowSquare}
                        color='yellow'
                    />
                </View>

            </View>
        );
    }
}
export default AnimOne;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    navSquare: {
        flex: 1,
        flexDirection: 'row'
    },
    redSq: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },
    blueSq:{
        height: 100,
        width: 100,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center'
    },
    navButtonStyle:{
        margin: 10,
        paddingVertical: 5,
        flex: 1
    },
    greenSq:{
        height: 100,
        width: 100,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center'
    },
    yellowSq:{
        width:100,
        height:100,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center'
    },
    navTextStyle:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle:{
        color: 'black',
        fontFamily: 'arial',
        fontSize: 20,
        fontWeight: 'bold'
    }
});