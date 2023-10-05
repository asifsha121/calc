import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,TextInput } from 'react-native';

export default function App() {
  const [expression, setExpression] = useState('');

  const handlebutton=(value)=>{
    setExpression((pvex)=>pvex+value);
  }
  const handleClear=()=>{
    setExpression('')
  }
  const handleval=()=>{
    try {
      setExpression(eval(expression).toString());
    } catch (error) {
      setExpression('Error');
  }
}

   

  return (
    <View style={styles.contain}>
      <View style= {styles.asc}><TextInput
          style={styles.textbox}
          value={expression}
          editable={false}
          placeholder="0"
          placeholderTextColor="#BBBBBB"
        />
        <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
          <Text style={styles.clearButtonText}>C</Text>
        </TouchableOpacity></View>
        <View style={styles.buttonsview}>
        <TouchableOpacity
        onPress={()=>handlebutton("1")}
           >
          <Text style={styles.button}> 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>handlebutton("2")}>
          <Text style={styles.button}> 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>handlebutton("3")}>
          <Text style={styles.button}> 3</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>handlebutton("+")}>
          <Text style={styles.button}> +</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.buttonsview}>
        <TouchableOpacity
        onPress={()=>handlebutton("4")}>
          <Text style={styles.button}> 4</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>handlebutton("5")}>
          <Text style={styles.button}> 5</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>handlebutton("6")}>
          <Text style={styles.button}> 6</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>handlebutton("-")}>
          <Text style={styles.button}> -  </Text>
        </TouchableOpacity>
        </View>
        <View style={styles.buttonsview}>
        <TouchableOpacity
        onPress={()=>handlebutton("7")}>
          <Text style={styles.button}> 7</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>handlebutton("8")}>
          <Text style={styles.button}> 8</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>handlebutton("9")}>
          <Text style={styles.button}> 9</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>handlebutton("/")}>
          <Text style={styles.button}> / </Text>
        </TouchableOpacity>
        </View>
        <View style={styles.buttonsview}>
        <TouchableOpacity
        onPress={()=>handlebutton(".")}>
          <Text style={styles.buttonl}> . </Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>handlebutton("0")}>
          <Text style={styles.button}> 0</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>handlebutton("*")}>
          <Text style={styles.buttonx}>x</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>handleval("=")}>
          <Text style={styles.buttons}>= </Text>
        </TouchableOpacity>
        </View>
      </View>
  );
}
const styles = StyleSheet.create({
 contain:{
  flex:1,
  backgroundColor:"#FFCC4D",
  marginTop:200
 },
 textbox:{
  height: 70,
  borderColor: 'gray',
  borderWidth: 1,
  textAlign: 'right',
  fontSize: 18,
  backgroundColor: 'white',
  paddingHorizontal: 10,
  color: 'black',
  flex: 1,
 },
 buttonsview:{
  flexDirection:"row",
  
 },
 button:{
  backgroundColor:"#BB9E75",
  alignItems:"center",
  fontSize:30,
  padding:38.133,
  borderWidth:1,
  justifyContent:"center"
 },
 buttons:{
    backgroundColor:"#BB9E75",
    alignItems:"center",
    fontSize:30,
    padding:38.133,
    borderWidth:1,
    justifyContent:"center",
    paddingRight:47.8
 },
 buttonl:{
    backgroundColor:"#BB9E75",
    alignItems:"center",
    fontSize:30,
    padding:38.133,
    paddingRight:39,
    borderWidth:1,
    justifyContent:"center"
  },
  buttonc:{
   backgroundColor:"grey",
   alignItems:"center",
   fontSize:10,
   borderWidth:1,
   color:"blue"
  },
  asc:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      marginTop: 60,
      marginBottom: 10,
  },
  clearButton:{
  backgroundColor: '#BB9E75',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 5,},
    clearButtonText:{
      color: 'white',
    fontSize: 18,
    },
    buttonx:{
      backgroundColor:"#BB9E75",
  alignItems:"center",
  fontSize:30,
  padding:38.133,
  borderWidth:1,
  justifyContent:"center",
  paddingRight:47.8

      
    }
});