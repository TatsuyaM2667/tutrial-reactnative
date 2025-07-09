import React ,{ useEffect,useState} from "react";
import { ScrollView, Text, StyleSheet,View } from "react-native";
import { fontSize } from "../../theme";
import ScreenTemplate from "../../components/ScreenTemplate";
import { title } from "process";
import axios from "axios";
import RenderSneakers from "./RenderSneakers";

export default function Sneakers() {
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [sneakers, setSneakers] = useState([])
    useEffect(() => {
        const fetchSneakers = async () => {
            try{
                setIsError(false)
                setIsLoading(true)
                const { data } = await axios.get('https://example-data.draftbit.com/sneakers?_limit=40');
                setSneakers(data)
            }catch(e){
                console.error("Error fetching sneakers:", e)
                setIsError(true)
            }finally {
                setIsLoading(false)
            }
    }
    fetchSneakers();
}, []);
return (
    <ScreenTemplate isLoading={isLoading} isError={isError}>
        <ScrollView style={styles.container}>
        {sneakers.map((sneakers, i) => {
            return (
                <RenderSneakers key={i} 
                sneakers={sneakers} />
            )
        })}
        </ScrollView>
    </ScreenTemplate>

)
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    title:{
        fontSize: fontSize.xxxLarge
    }
}
)


