import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { fontSize,colors } from "../../theme";
import ScreenTemplate from "../../components/ScreenTemplate";
import Button from "../../components/Button";

export default function Search() {
    const onButtonPress = () =>{
        console.log("on button press")

    }
return (
    <ScreenTemplate>
        <View style={styles.container}>
            <Text style={styles.title}>これはサーチ画面です。</Text>
            <Button
            label="Sneaker一覧へ"
            onPress={onButtonPress}
            color={colors.purple}
            disable={false}
            labelColor={colors.while } 
            labelBold={false}
            />
        </View>
    </ScreenTemplate>
)
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: "center",
        justifyContent:"center"
    },
    title:{
        fontSize: fontSize.xxxLarge
    }

}
)



