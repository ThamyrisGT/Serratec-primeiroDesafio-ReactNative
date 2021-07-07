import React from 'react';
import {View, StyleSheet} from 'react-native';

const Ex6 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box1} />
      <View style={styles.box1} />
      <View style={styles.box4} />
      <View style={styles.box4} />
      <View style={styles.box4} />
      <View style={styles.box7} />
      <View style={styles.box7} />
      <View style={styles.box7} />
      <View style={styles.box10} />
      <View style={styles.box10} />
      <View style={styles.box10} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'space-around',
    justifyContent: 'space-around',
  },
  box1: {
    width: 116,
    height: 116,
    backgroundColor: '#50E3C2',
  },

  box4: {
    width: 116,
    height: 116,
    backgroundColor: '#4A90E2',
  },

  box7: {
    width: 116,
    height: 116,
    backgroundColor: '#9013FE',
  },
  box10: {
    width: 116,
    height: 116,
    backgroundColor: '#F5A623',
  },
});

export default Ex6;
