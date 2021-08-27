import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Materiais() {
    return (
        <View style={styles.container}>
            <View style={styles.borda}>
                <Text style={styles.titulo}>Materiais</Text>
                <Text style={styles.textos}>...</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
    },
    borda: {
        backgroundColor: '#00a2ff',
        width: '95%',
        height: '95%',
        borderRadius: 10,
    },
    titulo: {
        fontsize: 20,
        color: '#000000',
        textAlign: "center",
        padding: 10,
        alignItems: "center",
        fontWeight: 'bold',
    },
    textos: {
        fontsize: 15,
        color: '#000000',
        textAlign: "center",
        padding: 10,
        alignItems: "center",
    },
});

export default Materiais;