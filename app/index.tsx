import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Button from "../components/Button";

export default function Home() {
    const router = useRouter();

    const handlePress = () => {
            console.log("Botão clicado!");
        };
    return (

        <View style={styles.container}>
            <Text style={styles.title}>Bem vindo ao React Native!</Text>
            <Text style={styles.subtitle}>Esta é a tela inicial do nosso app</Text>

            <TouchableOpacity style={styles.button}
            onPress={() => router.push('/detalhes')}>
                <Text style={styles.buttonText}>Ir para detalhes
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}
            onPress={() => router.push('/sobre')}>
                <Text style={styles.buttonText}>Sobre
                </Text>
            </TouchableOpacity>

            <Button title="Salvar" onPress={handlePress} />
            <Button title="Voltar" onPress={() => router.back()} color=  "#c2a0e5ff" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#e3cff8ff"
    },
    title: {
        fontSize: 25,
        fontWeight: '700',
        color: "#8038cdff",
        marginBottom: 12,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 500,
        color: "#8038cdff",
        marginBottom: 28,
    },
    button: {
        backgroundColor: "#c2a0e5ff",
        paddingVertical: 16,
        paddingHorizontal: 50,
        borderRadius: 12, 
        margin: 8,
        width: '60%'
    },
    buttonText: {
        color: "#ffffffff",
        fontSize: 16,
        fontWeight: 600,
        textAlign: "center",
    },
    buttonSobre: {
        backgroundColor: "#c2a0e5ff",
        paddingVertical: 16,
        paddingHorizontal: 50,
        borderRadius: 12, 
    },
})