import React, { Component } from 'react';
import { View, StyleSheet, Button, Image } from 'react-native';
import imagePicker from 'react-native-image-picker';

class TakeImgPicker extends Component {
    state = { 
        avatar: '',
    }

    addAvatar=()=>{
    /**
     * if you want just launch camera replace showImagePicker with launchCamera
     * and if you want just launch image library replace showImagePicker with launchImageLibrary
     */

    imagePicker.showImagePicker({
        title: 'Select an avatar',
        takePhotoButtonTitle: 'Take a photo from camera',
        chooseFromLibraryButtonTitle: 'Choose photo from galery'
    }, response=>{
        if (response.didCancel) {
            console.warn("really?");
        } else if (response.error) {
            console.warn(response.error);
        }else{
            this.setState({
            avatar:response.uri
            })
        }
    })
  }
  render() {
        return (
            <View>
                
                <Image 
                    source={{uri:this.state.avatar}} 
                    style={styles.avatar}
                />
                <Button
                    title= "Add an avatar"
                    onPress={()=>this.addAvatar()}
                />
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    avatar:{
        height: 300,
        width: '100%'
    },
});

export default TakeImgPicker;