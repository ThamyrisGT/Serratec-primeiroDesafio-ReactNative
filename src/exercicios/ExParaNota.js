import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';

const ExParaNota = () => {
  return (
    <View style={styles.containerPrincipal}>
      <StatusBar hidden={true} />
      <View style={styles.containerSuperior}>
        <View style={styles.header} />
        <View style={styles.box2} />
        <View style={styles.box3} />
      </View>
      <View style={styles.containerMeio}>
        <View style={styles.box4} />
        <View style={styles.box5} />
        <View style={styles.boxMeio} />
      </View>
      <View style={styles.containerBoxes}>
        <View style={styles.box2} />
        <View style={styles.box2} />
        <View style={styles.box2} />
        <View style={styles.box2} />
        <View style={styles.box2} />
        <View style={styles.box2} />
      </View>
      <View style={styles.containerFooter}/>
    </View>
  );
};

const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
  },
  containerSuperior: {
    flex: 1,
  },
  header: {
    width: '100%',
    height: 25,
    backgroundColor: '#50E3C2',
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: '#F5A623',
    marginTop: 55,
    alignSelf: 'center',
  },
  box3: {
    width: 160,
    height: 38,
    backgroundColor: '#F5A623',
    marginTop: 30,
    alignSelf: 'center',
  },
  containerMeio: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  box5: {
    width: '50%',
    height: 78,
    backgroundColor: '#4A90E2',
  },
  box4: {
    width: '50%',
    height: 78,
    backgroundColor: '#9013FE',
  },
  boxMeio: {
    width: '100%',
    height: 13,
    backgroundColor: '#50E3C2',
  },
  containerBoxes: {
    width: '90%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  containerFooter: {
    width: '100%',
    height: 60,
    backgroundColor: '#4A90E2',
    marginTop: 25,
    alignSelf: 'center',
  },
});

export default ExParaNota;
