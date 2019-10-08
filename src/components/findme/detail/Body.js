import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import ProfileHeader from '../../common/ProfileHeader'
import SwipableImages from '../../common/SwipableImages'
import { Feather, Ionicons } from '@expo/vector-icons'

export default function Body({ authorInfo, prodInfo, postInfo }) {
  return (
    <View style={styles.container}>

      {/* 프로필 */}
      <ProfileHeader
        height={50}
        author={authorInfo.name}
        authorPhoto={authorInfo.photo}
        timestamp={postInfo.timestamp}
      />

      {/* 제품사진(최대 5개까지 가능) */}
      <SwipableImages
        height={350}
        images={prodInfo.images}
      />

      {/* 구분선 */}
      <View style={styles.grayLine} />

      {/* 제품 상세 내용 */}
      <View style={styles.itemInfo}>
        <View style={styles.itemSummary}>
          <Text style={styles.brand}>
            {prodInfo.brand}
          </Text>
          <View style={styles.itemTitleArea}>
            <Text style={styles.itemName}>
              {postInfo.title}
            </Text>
            {postInfo.isSecret && <Text>Secret</Text>}
          </View>
        </View>
        <View style={styles.itemDetail}>
          <View style={styles.itemDetailRow}>
            <Text style={styles.itemDetailKey}>
              카테고리
              </Text>
            <Text style={styles.itemDetailValue}>
              {prodInfo.category}
            </Text>
          </View>
          <View style={styles.itemDetailRow}>
            <Text style={styles.itemDetailKey}>
              컬러
              </Text>
            <Text style={styles.itemDetailValue}>
              {prodInfo.color}
            </Text>
          </View>
          <View style={styles.itemDetailRow}>
            <Text style={styles.itemDetailKey}>
              사이즈
              </Text>
            <Text style={styles.itemDetailValue}>
              {prodInfo.size}
            </Text>
          </View>
          <Text style={styles.text}>
            {postInfo.content}
          </Text>
        </View>
      </View>

      {/* 리액션 영역 */}
      <View style={styles.reactionArea}>
        <View style={styles.founder}>
          <Feather
            name='alert-circle'
            size={18}
            color='#c0c0c0'
          />
          <Text style={styles.founderNum}>
            {postInfo.offerCount}
          </Text>
          <Text style={styles.founderText}>
            명이 가격을 찾았어요!
              </Text>
        </View>
        <View style={styles.follower}>
          <Ionicons
            name='md-hand'
            size={18}
            color='#c0c0c0'
          />
          <Text style={styles.followerNum}>
            {postInfo.findTooCount}
          </Text>
          <Text style={styles.followerText}>
            명도  상품을 찾아요!
              </Text>
        </View>
      </View>

      {/* 구분선 */}
      <View style={styles.grayLine} />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  grayLine: {
    paddingBottom: 8,
    backgroundColor: '#efefef',
  },
  itemInfo: {
  },
  itemSummary: {
    padding: 18,
    borderBottomWidth: 0.5,
    backgroundColor: '#ffffff',
    borderColor: '#c8c8c8',
  },
  brand: {
    fontSize: 16,
    color: '#ea9c0c',
    fontWeight: '600',
  },
  itemTitleArea: {
    flexDirection: 'row',
    margin: 5,
    alignItems: 'center',
  },
  secretIcon: {
    width: 14,
    height: 14,
    marginLeft: 5.7,
  },
  itemName: {
    fontSize: 20,
    fontWeight: '400',
  },
  itemDetail: {
    padding: 18,
    backgroundColor: '#ffffff',
    borderBottomWidth: 0.5,
    borderColor: '#c8c8c8',
  },
  itemDetailRow: {
    flexDirection: 'row',
    marginTop: 2,
    marginBottom: 2,
  },
  itemDetailKey: {
    flex: 1,
    fontSize: 13,
  },
  itemDetailValue: {
    flex: 2,
    color: '#7e7e7e',
    fontSize: 13,
  },
  text: {
    marginTop: 15,
    color: '#7e7e7e',
  },
  reactionArea: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#ffffff',
  },
  founder: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 0.5,
    borderColor: '#c8c8c8',
  },
  founderNum: {
    marginLeft: 8,
    fontSize: 12,
    fontWeight: '600',
    color: 'red',
  },
  founderText: {
    marginLeft: 2,
    fontSize: 12,
    marginRight: 15,
  },
  follower: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  followerNum: {
    marginLeft: 8,
    fontSize: 12,
    fontWeight: '600',
    color: 'red',
  },
  followerText: {
    marginLeft: 2,
    fontSize: 12,
  },
})