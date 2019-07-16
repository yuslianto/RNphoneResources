import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import ContactComponents from './src/contact';
import AnimOne from './src/AnimationLearn/AnimOne';


class App extends Component {
  render() {
    return (
      //<ContactComponents/>
      <AnimOne/>
    );
  }
}

const styles = StyleSheet.create({
  avatar:{
    height: 300,
    width: '100%'
  },
});

export default App;