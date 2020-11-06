import React, {useState} from "react";
import Button from "react-native-button";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { AppStyles } from "./AppStyles";
import { AsyncStorage, ActivityIndicator } from "react-native";
import {AuthContext} from "./context"


const Profile = ({navigation}) => {
  const { signOut } = React.useContext(AuthContext);
 const [isLoading] = useState(false)
 
return (
      <View style={styles.container}>
      <Text style={styles.title}>Your Profile</Text>
        <Image style={styles.avatar} source={require('../assets/avatar-2.jpg')} />

        <Text style={styles.medium}>Full Name</Text>
        <Text style={styles.subTitle}>John Doe</Text>

        <Text style={styles.medium}>Email</Text>
        <Text style={styles.subTitle}>johndoe@gmail.com</Text>

        <Text style={styles.medium}>Phone</Text>
        <Text style={styles.subTitle}>080345646763</Text>
        
        <TouchableOpacity style={styles.button} onPress={() => signOut()}>
          <Text style={styles.signoutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
  )

    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
    marginBottom: 150
  },
  avatar: {
    width: 160,
    height: 165,
    borderRadius: 75
  },
  button: {
    marginTop: 100
  },
  signoutText: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: 20,
    marginRight: 20
  },
  title: {
    fontSize: AppStyles.fontSize.title,
    fontWeight: "bold",
    color: AppStyles.color.tint,
    marginTop: 20,
    textAlign: "center",
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20
  },
  subTitle: {
    fontSize: AppStyles.fontSize.content,
    fontWeight: "bold",
    color: AppStyles.color.tint,
    marginTop: 10,
    textAlign: "center",
    marginBottom: 15,
    marginLeft: 20,
    marginRight: 20
  },
  medium: {
    fontSize: AppStyles.fontSize.normal,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
    marginLeft: 20,
    marginRight: 20
  }
  
});

export default Profile;
