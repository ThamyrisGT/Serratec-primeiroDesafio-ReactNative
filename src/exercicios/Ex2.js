import React from 'react';
import {View, StyleSheet} from 'react-native';

const Ex2 =() => {

  return (
    <View style={styles.container}>
    <View style={styles.box}/>
    </View>
  );
}


const styles = StyleSheet.create ({
    container:{
        flex:1,
        alignItems: 'center',
        flexDirection:'row',
      },
      box:{
        flex:1,
        height:150,
        backgroundColor: '#50E3C2', 
      }
    });


export default Ex2;