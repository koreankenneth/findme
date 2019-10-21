import React from 'react';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native'
import Layout from '../../../constants/Layout'

const width = Layout.window.width * 0.9

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <View style={styles.logoArea}>
          <Image source={require('../../../../assets/images/drawable-xxxhdpi/img_logo.png')} style={styles.logo} />
        </View>
        <TouchableOpacity
          style={styles.goldkeyButton}
        >
          <Image source={require('../../../../assets/images/drawable-xxxhdpi/ico_goldkey.png')} style={styles.goldkey} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.alarmButton}
        >
          <Image source={require('../../../../assets/images/drawable-xxxhdpi/ico_alarm.png')} style={styles.alarm} />
        </TouchableOpacity>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  header: {
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  logoArea: {
    flex: 8,
    
  },
  logo: {
    width: 94,
    height: 16,
  },
  goldkeyButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  goldkey: {
    width: 20,
    height: 20,
  },
  alarmButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  alarm: {
    width: 20,
    height: 20,
  },
});