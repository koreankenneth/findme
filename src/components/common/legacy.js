import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Dialog, { DialogTitle, SlideAnimation, DialogContent, DialogFooter, DialogButton } from 'react-native-popup-dialog'
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import {Constants} from 'expo';
import * as ImagePicker from 'expo-image-picker'

class CameraDialog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasCameraPermission: null,
            type: Camera.Constants.Type.back,
        }
    }


    componentDidMount() {
        this.getPermissionAsync();
    }
    
    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
            this.setState({ hasCameraPermission: status === 'granted' });
        }
    }

    _tackPicture = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
        });

        console.log(result);

        if (!result.cancelled) {
            this.setState({ image: result.uri });
            this.props.pictureSelected(result.uri);
            this.props.dismissDialog();
        }
    }


    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({

            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
        });

        console.log(result);

        if (!result.cancelled) {
            this.setState({ image: result.uri });
            this.props.pictureSelected(result.uri);
            this.props.dismissDialog();
        }
    };



    render() {
        return (
        <View>
        <Dialog
            width={200}
            visible={this.props.visible}
            dialogAnimation={new SlideAnimation({
                slideFrom: 'bottom',
            })}
            onTouchOutside={this.props.dismissDialog}
            dialogTitle={<DialogTitle title="사진 올리기" />}
            footer={
                <DialogFooter>
                {<DialogButton
                    text="취소"
                    onPress={this.props.dismissDialog}
                />}
                {/*<DialogButton
                    text="OK"
                    onPress={() => {}}
                />*/}
                </DialogFooter>
            }
        >
            <DialogContent>
                <TouchableOpacity style={styles.button}
                    onPress={this._tackPicture}>
                    <Text style={styles.text}>카메라</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={this._pickImage}>   
                    <Text style={styles.text}>갤러리</Text>
                </TouchableOpacity>
            </DialogContent>
        </Dialog>
        </View>
        )
    };
}

export default CameraDialog


const styles = StyleSheet.create({
    button: {
        paddingTop: 13,
    },
    text:{
        fontSize: 18,
        textAlign: 'center',
    }
});