import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Image } from 'react-native'
import {Ionicons} from '@expo/vector-icons'

export default class LoginWindow extends Component {
    state = {
        name: ""
    }

    continue = () => {
        this.props.navigation.navigate("Chat", {name: this.state.name})
    }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.circleRight} />
                <View style={styles.circle} />
                <View style={{marginTop: 64}}>
                    <Image 
                    source={require("../assets/ReactChatAppIcon.png")} 
                    style={{width: 200, height: 200, alignSelf: "center"}}
                    />
                </View>
                <View style={{marginHorizontal: 32}}>
                    <Text style={styles.header}>Username</Text>
                    <TextInput 
                      style={styles.input}
                      placeholder="Please enter username"
                      onChangeText={name => {
                          this.setState({ name });
                        }}
                        value={this.state.name}
                    />
                    <View style={{alignItems: "flex-end", marginTop: 64}}>
                        <TouchableOpacity style= {styles.continue} onPress={this.continue}>
                              <Ionicons name="md-arrow-round-forward" size={24} color="#fff"/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#c4edf5"
  },

  circle: {
      width: 500,
      height: 500,
      borderRadius: 500/2,
      backgroundColor: "#FFF",
      position: "absolute",
      left: -100,
      top: -20
  },

  
  circleRight: {
    width: 300,
    height: 300,
    borderRadius: 300/2,
    backgroundColor: "#3894ff",
    position: "absolute",
    left: 300,
    top: -20
},


 header:{
     fontWeight: "800",
     fontSize: 30,
     color: "#3894ff",
     marginTop: 32
 },

 input: {
    marginTop: 32,
    height: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#BAB7C3",
    borderRadius: 30,
    paddingHorizontal: 16,
    color: "#514E5A",
    fontWeight: "600"
 },
 continue: {
     width:70,
     height: 70,
     borderRadius: 70/2,
     backgroundColor: "#3894ff",
     alignItems: "center",
     justifyContent: "center"
 }

});
