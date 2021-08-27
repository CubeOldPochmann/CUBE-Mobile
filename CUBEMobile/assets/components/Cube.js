import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import logoImagem from '../imagens/logo.png'

function CUBE() {
    return (
        <View style={styles.container}>
            <View style={styles.borda}>
                <Text style={styles.titulo}>CUBE Old Pochmann</Text>
                <Text style={styles.textos}>Atráves de um site, ajudaremos você á aprender como resolver o cubo mágico 3X3X3 de olhos vendados, utilizando o método Old Pochmann.</Text>
                <Text style={styles.textos}>Mostrando o processo de aprendizagem, exemplos e dicas de como aprender. O site além de tutorial escrito e fórmulas, também irá apresentar um relato sobre como foi aprender, o que foi mais difícil e quais partes foram as mais fáceis.</Text>
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
        backgroundColor: '#ffd900',
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
export default CUBE;