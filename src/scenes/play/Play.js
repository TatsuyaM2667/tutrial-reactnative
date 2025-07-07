import React from "react";  
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

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
                <Text>History画面へ</Text>
            </TouchableOpacity>
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
