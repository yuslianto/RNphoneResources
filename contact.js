import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button,
    PermissionsAndroid,
    Platform,
    requestMultiple,
} from "react-native";
import Contacts from 'react-native-contacts';

class ContactComponents extends Component {

    async requestCOnatctPermission(){
        if (Platform.OS === "ios") {
            return true
        }else{
            //console.warn("android");
            const granted = await PermissionsAndroid.requestMultiple([
                PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
                PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,
            ]);
            if (
                granted['android.permission.READ_CONTACTS'] === PermissionsAndroid.RESULTS.GRANTED &&
                granted['android.permission.WRITE_CONTACTS'] === PermissionsAndroid.RESULTS.GRANTED
            ) {
                return true
            } else {
                return false                
            }
        }
    }
    
    getContacts= () => {
        this.requestCOnatctPermission()
        .then((didGetPermission)=>{
            if (didGetPermission) {
                Contacts.getAll((err, contacts) => {
                    if (err) {
                      throw err;
                    }
                    // contacts returned
                    console.warn(contacts);
                  })
            } else {
                alert("No Permission")
            }
        })
    }
    

    render() {
        return (
            <View style={styles.container}>
                <Text>contact Components</Text>
                <Button
                    title="Load Contacts"
                    onPress={this.getContacts}
                />
            </View>
        );
    }
}
export default ContactComponents;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});