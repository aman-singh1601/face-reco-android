import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import CustomCamera from '../components/CustomCamera';
import { NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../App"; 
import CustomDialog from '../components/CustomDialog';


type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">
export default function Home({navigation}: HomeProps) {
    const [visible, setVisible] = useState<boolean | undefined>(false);
    const [imageUrl, setImageUrl]= useState<string | null>(null);
    return (
        <View style = {styles.container}>
            <CustomDialog setVisible = {setVisible} visible = {visible} imageUrl = {imageUrl}/>
            <CustomCamera setVisible = {setVisible} setImageUrl = {setImageUrl}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "#f8beca"
    }
})