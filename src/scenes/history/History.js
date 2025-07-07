import React from "react";  
import { View, Text, StyleSheet ,TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { fontSize } from "../../theme";

export default function History() {
    const navigation = useNavigation();
    const onButtonPress = (num) => {
        navigation.navigate("Lyrics",{pressedNum: num})
    }

    return (
        <View style={styles.container}>
            <Text>これは履歴画面です。</Text>
            <TouchableOpacity
            onPress={() => onButtonPress(1)}
            >
                <Text style={styles.buttonTitle}>私は１を押しました</Text>
            </TouchableOpacity>
                        <TouchableOpacity
            onPress={() => onButtonPress(2)}
            >
                <Text style={styles.buttonTitle}>私は2を押しました</Text>
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
    buttonTitle: {
        fontSize: fontSize.xxxLarge,
        color: "#000",
    }

});
