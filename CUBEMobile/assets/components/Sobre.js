import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Sobre() {
    return (
        <View style={styles.container}>
            <View style={styles.borda}>
                <Text style={styles.titulo}>Sobre</Text>
                <Text style={styles.textos}>A ideia do projeto saiu do interesse dos membros do projeto, em relação ao cubo mágico. Escolhemos explicar e ensinar como montar o cubo mágico de olhos vendados por conta da falta de informações escritas em português, o que se torna uma barreira para muitos. </Text>
                <Text style={styles.textos}>Para realização, escolhemos explicar o método "Old Pochmann", que é o método de iniciantes para resolução do cubo mágico de olhos vendados. Sendo o site o passo inicial para aqueles que querem montar o cubo 3X3X3 com os olhos vendados.</Text>
                <Text style={styles.textos}>Blindfolded é uma das categorias de montar o cubo, e é quando se resolve o cubo de olhos vendados. A categoria blindfolded existe tanto para o cubo 3X3X3, e tanto para outros tipos de cubo como o 4X4X4, onde é usado o método 4BLD e o 2X2X2, que usa parte do método Old Pochmann. Os dois métodos mais conhecidos para resolver o 3X3X3 são o Old Pochmann, que seria o método básico para montar o cubo de olhos vendados e o 3-Styled Method, também conhecido como 3BLD, que é o método avançado e usado pelos cubers mais rápidos montando o cubo 3X3X3 de olhos vendados. Para aprender o avançado, você precisa primeiro dominar o básico, já que ele é usado como base.</Text>
                <Text style={styles.textos}>O método Old Pochmann, é o método básico para se montar o cubo 3X3X3 de olhos vendados, e foi criado pelo alemão Stefan Pochmann. Esse é o método que ensinaremos atráves do nosso site. Ele consiste em resolver uma peça de cada vez, até que no final você tenha o cubo resolvido. Cada adesivo do cubo tem uma letra e através da memorização das letras e a ordem delas, você realiza algoritmos específicos para que elas fiquem nos lugares corretos. Esses algoritmos se baseiam em dois algoritmos,com variações no começo e no final, e durante cada resolução você pode ter diferenças ou casos específicos, que podem ser mais fáceis ou difíceis de resolver.</Text>

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
        textAlign: "justify",
        padding: 10,
        alignItems: "center",
    },
});

export default Sobre;