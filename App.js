import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
import ContactComponents from './src/contact';
import AnimOne from './src/AnimationLearn/AnimOne';
import TakeImgPicker from './src/examImagesPic';


class App extends Component {
  render() {
    return (
      <ContactComponents/>
      //<AnimOne/>
      //<TakeImgPicker/>
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