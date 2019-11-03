import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import * as Progress from 'react-native-progress'
import Colors from '../../constants/Colors'
import { getTimeDiff } from '../../utils/helper'

export default function CountDownBar({ timestamp, unit, duration }) {
  let millisecondsOfDuration = 0

  switch (unit) {
    case 'd':
      millisecondsOfDuration = duration * 864e5
      break
    default:
      millisecondsOfDuration = duration * 864e5
      break
  }

  const now = Date.now() + 36e5 * 9 //Timezone: + 9:00 (Seoul)
  const expiryDateTime = timestamp + millisecondsOfDuration
  const remainingTime = expiryDateTime - now
  const isExpired = remainingTime <= 0
  const remainingDateTime = getTimeDiff(expiryDateTime)

  return (
    <View style={styles.expContainer}>
      <View style={styles.expAreaLeft}>
        <Progress.Bar
          progress={isExpired ? 1 : remainingTime / millisecondsOfDuration}
          height={8}
          width={null}
          color={isExpired ? Colors.red : Colors.orange}
          unfilledColor={'#eeeeee'}
          borderWidth={0}
        />
      </View>
      <View style={styles.expAreaRight}>
        <Text style={[styles.expText, { color: isExpired ? Colors.red : Colors.orange }]}>{`${remainingDateTime.toString()} ${isExpired ? '초과' : '남음'}`}</Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  expContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  expAreaLeft: {
    flex: 3,
  },
  expAreaRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  expText: {
    marginLeft: '10%',
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0,
  },
})