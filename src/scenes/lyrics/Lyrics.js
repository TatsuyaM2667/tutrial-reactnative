import React from "react";  
import { useRoute ,useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet ,TouchableOpacity } from "react-native";
import { fontSize } from "../../theme";

export default function Lyrics() {
    const route = useRoute()
    const navigation = useNavigation();
    const  params  = route.params
    const { pressedNum } = params

    const onBackPress = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text>これは歌詞画面です。</Text>
            <Text style={styles.title}>前の画面では{pressedNum}を押しました。</Text>
            <TouchableOpacity 
            onPress={onBackPress}>
                <Text style={styles.title}>戻る</Text>
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
        color: "#000",
    }
});
