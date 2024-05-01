import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef } from 'react'
import { RNCamera } from 'react-native-camera';
import faceRecoImg from "../assets/face-reco.png"
export default function CustomCamera() {
    const camRef: any = useRef(null);

    const takePicture = async () => {
        if (camRef && camRef.current) {
            const options = { quality: 0.5};
            const data = await camRef.current?.takePictureAsync(options);
            console.log(data.uri);
        }
    };
    return (
        <View style = {styles.cameraContainer}>
            <RNCamera
                style = {styles.camera}
                ref = {camRef}
                type={RNCamera.Constants.Type.front}
            />
            <View style = {styles.buttonContainer}>
                <View style = {styles.buttonContainerCircle}>
                    <Image
                        style = {styles.image}
                        source= {faceRecoImg}
                    />
                </View>
                <TouchableOpacity 
                    style = {styles.camButton}
                    onPress={takePicture}
                >
                    <Text style = {styles.buttonText}>Verify By Face</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cameraContainer: {
        alignItems: "center",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    camera: {
        height: 550,
        width: "100%"
    },
    buttonContainer: {
        backgroundColor: "#ffffff",
        height: 200,
        width: "100%",
        // display: "flex",
        // justifyContent: "flex-end",
        // alignItems: "center"
        position: "relative"
    },
    camButton: {
        backgroundColor: "#ec4b6e",
        width: "80%",
        height: 45,
        borderRadius: 24,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
        position: "absolute",
        bottom: 10,
        left: 30
    },
    buttonText: {
        fontSize: 24,
    },
    buttonContainerCircle: {
        width: "100%",
        height: 200,
        backgroundColor: "#ffffff",
        borderRadius: 100,
        position: "absolute",
        top: -90,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        backgroundColor: "#ec4b6e",
        textShadowColor: "#000000",
        height: 180,
        width: 180,
        // mixBlendMode: "multiply"
    }
})