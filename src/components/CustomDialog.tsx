import React, { Dispatch, SetStateAction, useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import Dialog from "react-native-dialog";

import { handleRegisterUser } from "../facebackend/userBackend";

export default function CustomDialog({
    setVisible, 
    visible, 
    imageUrl
    }: {
    visible: boolean | undefined,
    setVisible: Dispatch<SetStateAction<boolean | undefined>>,
    imageUrl: string | null
    }) {

    const [userName, setUserName] = useState<string>("");

    const handleRegister = () => {
        handleRegisterUser({imageUrl, userName})
        setVisible(false);
    }

    return (
        <View style={styles.container}>
        <Dialog.Container visible = {visible}>
            <Dialog.Title>User Name</Dialog.Title>
            <Dialog.Description>
                Please Enter Your UserName
            </Dialog.Description>
            <Dialog.Input
                style = {{width: "80%", height: 10}}
                placeholder="Type Here"
                onChangeText={(text) => setUserName(text)}
            />
            <Dialog.Button label="register" onPress={handleRegister} />
        </Dialog.Container>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8beca",
        alignItems: "center",
        justifyContent: "center",
    },
});
