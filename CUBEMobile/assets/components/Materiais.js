import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

function Materiais() {
    return (
        <View style={styles.container}>
            <View style={styles.borda}>
                <Text style={styles.titulo}>Materiais</Text>
                <Text style={styles.textos}>Algoritmo para os meios:</Text>
                <Text style={styles.textos}>R U R' U' R' F R2 U' R' U' R U R' F' ou R U R' U' R' F R2 U' R' U' R U R' F'</Text>
                <Text style={styles.textos}>
                    <Image
                        style={styles.imagens} 
                        source={require('./images/algoritmos/AlgMeios.png')}
                    />
                </Text>    
                <Text style={styles.textos}>Algoritmo para os cantos: R U' R' U' R U R' F' R U R' U' R' F R</Text>
                <Text style={styles.textos}>
                    <Image
                        style={styles.imagens} 
                        source={require('./images/algoritmos/AlgCantos.png')}
                    />
                </Text>
                <Text style={styles.textos}>Algoritomo de paridade:</Text> 
                <Text style={styles.textos}>R U' R' U' R U R D R' U' R D' R' U2 R' U' ou  R U R' F' R U2 R' U2 R' F R U R U2 R' U'</Text>
                <Text style={styles.textos}>
                    <Image
                        style={styles.imagens} 
                        source={require('./images/algoritmos/AlgParidade.png')}
                    />
                </Text>
                <Text style={styles.textos}></Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
    imagens: {
        width: 100,
        height:100,
    },
});

export default Materiais;

//<Text style={styles.textos}>O método Old Pochmann funciona substituindo uma peça de cada vez enquanto somente 4 peças se mexem o tempo todo, duas delas sendo quais você está substituindo e as outras duas que ficam trocando entre si ao fim de cada algoritmo.</Text>
//<Text style={styles.textos}>No total de algoritmos você vai precisar saber 3, um que não tem nenhuma modificação, e os outros dois que mudam uma pequena parte dependendo da peça que você irá mover ao lugar certo. Esses são os três algoritmos:</Text>
//<Text style={styles.textos}>Além dos algoritmos, você também precisará aprender o esquema de letras do cubo, porque é através dele que você vai conseguir memorizar todos os movimentos necessários para resolver. Esse é o esquema de letras:</Text>