import React from "react";  
import { View, Text, StyleSheet } from "react-native";

export default function Lyrics() {
    return (
        <View style={styles.container}>
            <Text>これは歌詞画面です。</Text>
        </View>
    );
    }
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});
