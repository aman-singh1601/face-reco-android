import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomCamera from '../components/CustomCamera'

export default function Home() {
    return (
        <View style = {styles.container}>
            <CustomCamera/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "#f8beca"
    }
})