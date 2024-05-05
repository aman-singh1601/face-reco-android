import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Dispatch, SetStateAction, useRef } from 'react'
import { RNCamera } from 'react-native-camera';
import faceRecoImg from "../assets/face-reco.png"


interface CustomCameraProps {
    setVisible?: Dispatch<SetStateAction<boolean | undefined>>,
    setImageUrl?: Dispatch<SetStateAction<string | null>>,
}
export default function CustomCamera({setVisible, setImageUrl}: CustomCameraProps) {
    const camRef: any = useRef(null);

    const takePicture = async () => {
        if (camRef && camRef.current) {
            const options = { quality: 0.5};
            const data = await camRef.current?.takePictureAsync(options);
            if(setImageUrl) setImageUrl(data.uri);
            if(setVisible)  setVisible(true);
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
        backgroundColor: "#f8beca",
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
        left: 30,
        shadowRadius: 15 ,
        shadowOffset : { width: 56, height: 13},
    },
    buttonText: {
        fontSize: 24,
    },
    buttonContainerCircle: {
        width: "100%",
        height: 200,
        backgroundColor: "#f8beca",
        borderRadius: 100,
        position: "absolute",
        top: -90,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    image: {

        textShadowColor: "#000000",
        height: 180,
        width: 180,

    }
})