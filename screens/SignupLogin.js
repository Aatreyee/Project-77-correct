import React , {Component} from 'react';
import {View,Text, TextInput,StyleSheet,TouchableOpacity,Alert,Modal,KeyboardAvoidingView ,ScrollView} from 'react-native';
import db from '../config';
import firebase from'firebase';

export default class SignupLogin extends Component{
    constructor(){
        super();
        this.state={
            emailid:'',
            password:'',
        }
    }

    userLogin = (emailId, password)=>{ 
        firebase.auth().signInWithEmailAndPassword(emailId, password) .then(()=>{
             return Alert.alert("Successfully Login") })
               .catch((error)=> { var errorCode = error.code; 
                var errorMessage = error.message; 
                return Alert.alert(errorMessage) })
             }
    userSignUp = (emailId, password)=>{ 
                firebase.auth().createUserWithEmailAndPassword(emailId, password) .then((response)=>{
                    return Alert.alert("User added Successfully") })
                       .catch((error)=> { var errorCode = error.code; 
                        var errorMessage = error.message; 
                        return Alert.alert(errorMessage) })
                     }
                     render()
             {
                 return(
                     <View>
                         <TextInput style={styles.loginBox} placeholder='abc@example.com'keyboardType='email-address'
                          onChangeText={(text)=>{
                            this.setState({
                               emailid:text
                        })
                    }}
                />
                         <TextInput style={styles.loginBox}  secureTextEntry={true} placeholder='Enter password'
                            onChangeText={(text)=>{
                             this.setState({
                                password:text
                                })
                            }}
                        />
                        <View>
                        <TouchableOpacity style={[styles.button,{marginBottom:20,marginTop:20}]}
                           onPress={()=>{
                             this.userLogin(this.state.emailid,this.state.password)
                    }}
               >
                            <Text style={styles.buttonText}> Login </Text>
                        </TouchableOpacity>
                
                        <TouchableOpacity  style={styles.button}
                          onPress={()=>{
                            this.userSignUp(this.state.emailid,this.state.password)
                        }}
                   >
                   
                        <Text style={styles.buttonText}> SignUp </Text>
                

                        </TouchableOpacity>
                        </View>
                     </View>
                 )
             }

}
const styles=StyleSheet.create({
    button:{
        width:300,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        borderColor:'black',
        shadowColor:'white',
        shadowOffset:{width:0,height:8}
    },
    buttonText:{
        color:'white',
        fontWeight:'200',
        fontSize:20,
    },
    loginBox:{
        width:300,
        height:40,
        borderBottomWidth:1.5,
        fontSize:20,
        margin:10,
        paddingLeft:10,
        borderColor:'black'
    },
});