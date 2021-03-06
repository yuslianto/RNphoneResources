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
    TouchableOpacity
} from "react-native";
import Contacts from 'react-native-contacts';
import Icon from 'react-native-vector-icons/Ionicons';
import ButtonSuper from "./ButtonSuper";

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
                            <View style={styles.navTectContactStyle} key={i}>
                                <Text style={styles.tectContactStyle} key={i}>{item.givenName} {item.familyName}</Text>
                            </View>
                        ))
                    }
                </ScrollView>
                <View style={styles.navTitleStyle}>
                    <Text style={styles.textTitleStyle}>Contact Components</Text>
                </View>

                <TouchableOpacity
                    onPress={this.getContacts}
                    style={styles.buttonStyle}
                >
                    <Icon name="ios-refresh-circle" 
                        color="white"
                        size={20}
                    />
                    <Text style={styles.textButtonStyle}>
                        Load Contacts
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={this.addContacts}
                    style={styles.buttonStyle}
                >
                    <Icon name="ios-add-circle"
                        color="white"
                        size={20}
                    />
                    <Text style={styles.textButtonStyle}>
                        Add Contacts
                    </Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    onPress={this.openContactsForm}
                    style={styles.buttonStyle}
                >
                    <Icon name="md-contacts" 
                        color="white"
                        size={20}
                    />
                    <Text style={styles.textButtonStyle}>
                        Open Form Contacts
                    </Text>
                </TouchableOpacity>

                <ButtonSuper
                    onPress={()=>this.getContacts()}
                    style={[styles.buttonStyle,{backgroundColor: 'red'}]}
                >
                    Load Contacts
                </ButtonSuper>

                <ButtonSuper
                    onPress={()=>this.addContacts()}
                    style={[styles.buttonStyle,]}
                >
                    Add Contacts
                </ButtonSuper>

                <ButtonSuper
                    onPress={()=>this.openContactsForm()}
                    style={[styles.buttonStyle,{backgroundColor: 'green', marginBottom:5}]}
                >
                    Open Form Contacts
                </ButtonSuper>
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
    },
    navTectContactStyle:{
        flex: 1,
        height: 30,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 7
    },
    tectContactStyle:{
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'arial'
    },
    navTitleStyle:{
        alignItems: 'center',
        height: 50,
        backgroundColor: 'grey',
        justifyContent: 'center',
    },
    textTitleStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    },
    buttonStyle: {
        alignItems: 'center',
        height: 50,
        marginTop: 5,
        backgroundColor:"#3b5998",
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 5
        
    },
    textButtonStyle: { 
        fontFamily: 'Arial', 
        fontSize: 15, 
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: 5
    },
});