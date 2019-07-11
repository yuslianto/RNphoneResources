import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import ContactComponents from './contact';

class App extends Component {
  render() {
    return (
      <ContactComponents/>
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