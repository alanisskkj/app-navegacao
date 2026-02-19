import { useRouter } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Card } from "../components/Card";

export default function Detalhes() {
    const router = useRouter();

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={require('../assets/images/logo.png')}
                style={styles.logo}
            />
            
            <Text style={styles.title}>Tela de Detalhes</Text>

            {}
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
                <Image style={styles.image} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
            </View>

            {}
            <Card 
                title="Informações do App" 
                content="Este é um componente reutilizável que agora faz parte da tela de detalhes." 
            />

            <Text style={styles.description}>Aqui você pode adicionar mais informações</Text>

            <TouchableOpacity style={styles.button} onPress={() => router.back()}>
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
    
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#e3cff8ff"
    },
    logo: {
        width: 360,
        height: 80,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    title: {
        fontSize: 25,
        fontWeight: '700',
        color: "#8038cdff",
        marginBottom: 12,
    },
    imageContainer: {
        flexDirection: 'row',
        gap: 15,
        marginBottom: 20,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    description: {
        fontSize: 16,
        color: "#8038cdff",
        textAlign: "center",
        marginVertical: 20,
    },
    button: {
        backgroundColor: "#c2a0e5ff",
        paddingVertical: 16,
        paddingHorizontal: 50,
        borderRadius: 12,
        marginTop: 10,
    },
    buttonText: {
        color: "#ffffffff",
        fontSize: 16,
        fontWeight: '600',
    }
});