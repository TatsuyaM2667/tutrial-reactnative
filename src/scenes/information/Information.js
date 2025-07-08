import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { fontSize } from "../../theme";
import ScreenTemplate from "../../components/ScreenTemplate";
import { title } from "process";

export default function Information() {
return (
    <ScreenTemplate>
        <Text style={styles.title}>これはinformation画面です。</Text>
    </ScreenTemplate>
)
}
const styles = StyleSheet.create({
    title:{
        fontSize: fontSize.xxxLarge
    }
}
)


