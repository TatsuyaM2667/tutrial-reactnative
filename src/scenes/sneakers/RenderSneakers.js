import React from "react";
import { View, Text ,StyleSheet, Image } from "react-native";
import { fontSize ,colors } from "../../theme";

export default function RenderSneakers(props) {
    const { sneakers } = props
    const { id, brand, colorway, gender, media, releaseDate, retailPrice, styledId, title, year } = sneakers
    
    return (
        <View>
            <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text>{colorway}</Text>
            <Text>{brand}</Text>
            </View>
            <View style={{width: '100%', backgroundColor: colors.gray, paddingVertical:1}}></View>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 10

    },
    title: {
        fontSize: fontSize.xxxLarge,
        color: colors.black,
        fontWeight: 'bold',

    }
}
)
