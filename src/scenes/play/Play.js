import React from "react";  
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { fontSize,colors } from "../../theme";
import { title } from "process";

export default function Play() {
    const navigation = useNavigation();
    const onButtonPress = () => {
        navigation.navigate("History");
    };

    return (
        <View style={styles.container}>
            <Text>これはプレイ画面です。</Text>
            <TouchableOpacity 
            onPress={onButtonPress}>
                <Text style={styles.title}>History画面へ</Text>
            </TouchableOpacity>
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
        color: colors.purple,
        fontWeight: "700",
    }
});
