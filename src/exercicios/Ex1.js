import React from 'react';
import {View, StyleSheet} from 'react-native';

const Ex1 =() => {

  return (
    <View style={styles.container}>
    <View style={styles.box}/>
    </View>
  );
}


const styles = StyleSheet.create ({
  container:{
    flex:1,
  },
  box:{
    flex:1,
    width:'20%',
    backgroundColor: '#50E3C2',
    alignSelf: 'center'
  }
});


export default Ex1;