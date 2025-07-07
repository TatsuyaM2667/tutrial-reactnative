import React from "react";  
import { useRoute } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";
import { fontSize } from "../../theme";

export default function Lyrics() {
    const route = useRoute()
    const  params  = route.params
    const { pressedNum } = params

    return (
        <View style={styles.container}>
            <Text>これは歌詞画面です。</Text>
            <Text style={styles.title}>前の画面では{pressedNum}を押しました。</Text>
        </View>
    );
    }
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: fontSize.xxxLarge,
        color: "#000",
    }
});
