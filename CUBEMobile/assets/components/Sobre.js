import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Sobre() {
    return (
        <View style={styles.container}>
            <View style={styles.borda}>
                <Text style={styles.titulo}>Sobre</Text>
                <Text style={styles.textos}>A ideia do projeto saiu do interesse dos membros do projeto, em relação ao cubo mágico. Escolhemos explicar e ensinar como montar o cubo mágico de olhos vendados por conta da falta de informações escritas em português, o que se torna uma barreira para muitos.</Text>
                <Text style={styles.textos}>Para realização, escolhemos esplicar o método "Old Pochmann", que é o método de iniciantes para resolução do cubo mágico de olhos vendados. Sendo o site o passo inicial para aqueles que querem montar o cubo 3X3X3 com os olhos vendados.</Text>
                
                <Text style={styles.titulo}>Membros da equipe:</Text>
                <Text style={styles.textos}>Gabriel Martins Ezequiel</Text>
                <Text style={styles.textos}>Paola Toledo Rampazzo</Text>
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
        backgroundColor: '#30c413',
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

export default Sobre;