import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button,
    PermissionsAndroid,
    Platform,
    requestMultiple,
    ScrollView,
} from "react-native";
import Contacts from 'react-native-contacts';

class ContactComponents extends Component {

    state = {
        myContact : []
    }

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
    
    addContacts = () => {
        this.requestCOnatctPermission()
        .then((didGetPermission)=>{
            if (didGetPermission) {

                const newContact = {
                    emailAddresses: [{
                        label: "work",
                        email: "carl-jung@example.com",
                    }],
                    familyName: "Jung",
                    givenName: "Carl",
                    phoneNumbers: [{
                        label: "mobile",
                        number: "(555) 555-5555",
                    }],
                    
                }
                Contacts.addContact(newContact, (err) => {
                    if (err) throw err;
                    // save successful
                    this.getContacts();
                })


            } else {
                alert("No Permission")
            }
        })
    }

    openContactsForm = () => {

        const newContact = {
            emailAddresses: [{
                label: "work",
                email: "carl-jung@example.com",
            }],
            familyName: "Jung",
            givenName: "Carl",
            phoneNumbers: [{
                label: "mobile",
                number: "(555) 555-5555",
            }],
            
        }

        Contacts.openContactForm(newContact, (err)=>{
            if (err) {
                console.warn(err);
            }
        })
    }

    getContacts = () => {
        this.requestCOnatctPermission()
        .then((didGetPermission)=>{
            if (didGetPermission) {
                Contacts.getAll((err, contacts) => {
                    if (err) {
                      throw err;
                    }
                    // contacts returned
                    //console.warn(contacts);
                    this.setState({
                        myContact:contacts
                    })
                  })
            } else {
                alert("No Permission")
            }
        })
    }
    

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    {
                        this.state.myContact.map((item, i)=>(
                            <Text key={i}>{item.givenName} {item.familyName}</Text>
                        ))
                    }
                </ScrollView>
                <Text>contact Components</Text>
                <Button
                    title="Load Contacts"
                    onPress={this.getContacts}
                />
                <Button
                    title="Add Contacts"
                    onPress={this.addContacts}
                />
                <Button
                    title="Open Form Contacts"
                    onPress={this.openContactsForm}
                />
            </View>
        );
    }
}
export default ContactComponents;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        //alignItems: 'center'
        alignContent: 'center'
    }
});