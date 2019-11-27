import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Modal } from 'react-native'
import Colors from '../../../constants/Colors'
import { AntDesign } from '@expo/vector-icons'
import ImageUploader from '../../common/ImageUploader'

const textPlaceholder = `예) 2019년, FW, SS 등 제품을 찾을 때 유의사항이 있으면 기재해주세요. 디테일한 정보는 제품을 찾는 데 많은 도움이 될 수있어요.`

export default class Body4 extends Component {
  state = {
    images: ['undefined', 'undefined', 'undefined', 'undefined', 'undefined'],
    curIdx: 0,
    modalVisible: false,
  }

  _setImageUri(uri) {
    _images = this.state.images;
    _images[this.state.curIdx] = uri;
    this.props.setImages(_images);
    this.setState({ images: _images });
  }

  render() {
    const { curIdx, images, isDialogVisiable, text } = this.props

    return (
      <View style={styles.container}>

        <View style={styles.textArea}>
          <Text style={styles.guide}>더 알아야 할 내용이 있나요?</Text>
          <View style={styles.contents}>
            <TextInput
              style={styles.textInput}
              multiline={true}
              placeholder={textPlaceholder}
              placeholderTextColor="#c2c2c2"
              onChangeText={(text) => this.props.setText(text)}
              value={text === 'undefined' ? '' : text}
            />
          </View>
        </View>
        <View style={styles.imageUploadArea}>
          <View style={styles.imageUploadAreaRow}>
            <Text style={styles.imageUploadTitle}>이미지 등록</Text>
            <Text style={styles.imageUploadGuide}>최소 1장의 이미지가 필요해요</Text>
          </View>
          <View style={styles.imageUploadAreaRow}>
            {/* 이미지 썸네일 */}
            <View style={styles.imageUploadButtonArea}>
              <TouchableOpacity style={styles.imageUploadButton}
                onPress={() => { this.setState({ curIdx: 0 }); this.setState({ isDialogVisiable: true }); }}>
                {this.state.images[0] === 'undefined' ?
                  <AntDesign style={styles.plusIcon}
                    name='plus'
                    size={30}
                    color={Colors.orange}
                  />
                  :
                  <Image style={styles.imageArea} source={{ uri: this.state.images[0] }} />
                }
              </TouchableOpacity>
            </View>
            <View style={styles.imageUploadButtonArea}>
              <TouchableOpacity style={styles.imageUploadButton}
                onPress={() => {
                  this.setState({ curIdx: 1 })
                  this.setState({
                    modalVisible: true
                  })
                  console.log('invoked!')
                }}>
                {this.state.images[1] === 'undefined' ?
                  <AntDesign style={styles.plusIcon}
                    name='plus'
                    size={30}
                    color={Colors.orange}
                  />
                  :
                  <Image style={styles.imageArea} source={{ uri: this.state.images[1] }} />
                }
              </TouchableOpacity>
            </View>
            <View style={styles.imageUploadButtonArea}>
              <TouchableOpacity style={styles.imageUploadButton}
                onPress={() => { this.setState({ curIdx: 2 }); this.setState({ isDialogVisiable: true }); }}>
                {this.state.images[2] === 'undefined' ?
                  <AntDesign style={styles.plusIcon}
                    name='plus'
                    size={30}
                    color={Colors.orange}
                  />
                  :
                  <Image style={styles.imageArea} source={{ uri: this.state.images[2] }} />
                }
              </TouchableOpacity>
            </View>
            <View style={styles.imageUploadButtonArea}>
              <TouchableOpacity style={styles.imageUploadButton}
                onPress={() => { this.setState({ curIdx: 3 }); this.setState({ isDialogVisiable: true }); }}>
                {this.state.images[3] === 'undefined' ?
                  <AntDesign style={styles.plusIcon}
                    name='plus'
                    size={30}
                    color={Colors.orange}
                  />
                  :
                  <Image style={styles.imageArea} source={{ uri: this.state.images[3] }} />
                }
              </TouchableOpacity>
            </View>
            <View style={styles.imageUploadButtonArea}>
              <TouchableOpacity
                style={styles.imageUploadButton}
                onPress={() => { this.setState({ curIdx: 4 }); this.setState({ isDialogVisiable: true }); }}>
                {this.state.images[4] === 'undefined' ?
                  <AntDesign style={styles.plusIcon}
                    name='plus'
                    size={30}
                    color={Colors.orange}
                  />
                  :
                  <Image style={styles.imageArea} source={{ uri: this.state.images[4] }} />
                }
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Modal
          animationType='fade'
          transparent={true}
          visible={this.state.modalVisible}
        >
          <View style={styles.modal}>
            <ImageUploader
              onCancel={() => this.setState({ modalVisible: false })}
            />
          </View>
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
  textArea: {
    marginTop: 30,
    marginBottom: 40,
  },
  guide: {
    fontSize: 25,
    fontWeight: '200',
    marginBottom: 40,
  },
  contents: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: '100%',
    height: 200,
    fontSize: 14,
    backgroundColor: Colors.white,
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 15,
    paddingLeft: 15,
  },
  imageUploadAreaRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  imageUploadTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginRight: 10,
  },
  imageUploadGuide: {
    fontSize: 12,
    fontWeight: '200',
  },
  imageUploadButtonArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  imageUploadButton: {
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    width: 55,
    height: 55,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.08,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageArea: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  modal: {
    height: '100%',
    width: '100%',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
})
