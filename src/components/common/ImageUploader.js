import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import * as Permissions from 'expo-permissions'
import Constants from 'expo'
import * as ImagePicker from 'expo-image-picker'

export default class ImageUploader extends Component {
  componentDidMount() {
    this.getPermissionAsync()
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const cameraRoll = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (cameraRoll.status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
      const camera = await Permissions.askAsync(Permissions.CAMERA);
      if (camera.status !== 'granted') {
        alert('Sorry, we need camera permissions to make this work!');
      }
    }
  }

  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
    })

    if (!result.cancelled) {
      this.props.setImageURI(result.uri)
      this.props.dismissDialog()
    }
  }

  takePicture = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
    })

    if (!result.cancelled) {
      this.props.setImageURI(result.uri)
      this.props.dismissDialog()
    }
  }

  render() {

    return (
      <View style={styles.imageUploadDialog}>
        <View style={styles.dialogHeader}>
          <Text style={styles.dialogText}>
            사진올리기
          </Text>
        </View>
        <View style={styles.dialogBody}>
          <TouchableOpacity
            style={styles.dialogBtn}
            onPress={this.takePicture}
          >
            <Text style={styles.dialogText}>
              카메라
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.dialogBtn}
            onPress={this.pickImage}
          >
            <Text style={styles.dialogText}>
              갤러리
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.dialogFooter}
          onPress={() => this.props.dismissDialog()}
        >
          <Text style={[styles.dialogText, { color: 'blue', fontWeight: '200', }]}>
            취소
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  imageUploadDialog: {
    height: '20%',
    width: '40%',
    borderWidth: 0.5,
    borderColor: '#f8f8f8',
    backgroundColor: '#ffffff',
    borderRadius: 20,
  },
  dialogHeader: {
    flex: 1,
    borderBottomWidth: 0.5,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomColor: '#fafafa',
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialogBody: {
    flex: 3,
    borderBottomWidth: 0.5,
    borderBottomColor: '#fafafa',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialogFooter: {
    flex: 1,
    borderBottomWidth: 0.5,
    borderBottomColor: '#fafafa',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialogText: {
    fontSize: 15,
  },
  dialogBtn: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#f1f1f1',
  },
})