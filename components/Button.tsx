import { StyleSheet, Text, TouchableOpacity } from "react-native";

//Definindo o tipo das props com TypeScript
type ButtonProps = {
    title: string;
    onPress: () => void;
    color?: string; //? Significa que é opcional, caso nenhuma cor seja definida, uma cor padão será assumida
}

export default function Button({title, onPress, color = "#c2a0e5ff",}: ButtonProps) {
    return (
        <TouchableOpacity style = {[styles.button, {backgroundColor: color}]}
        onPress={onPress}
        >
            <Text style = {styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: '60%',
        paddingVertical: 16,
        paddingHorizontal: 50,
        borderRadius: 12,
        margin: 8,
    },
    buttonText: {
        color: "#ffffffff",
        fontSize: 16,
        fontWeight: '600',
        textAlign: "center",
    },
})