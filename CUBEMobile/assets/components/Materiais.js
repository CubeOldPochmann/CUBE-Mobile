import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

function Materiais() {
    return (
        <View style={styles.container}>
            <View style={styles.borda}>
                <Text style={styles.titulo}>Materiais</Text>
                <Text style={styles.textos}>
                    <Image
                        style={styles.imagens} 
                        source={require('./images/cubo.png')}
                    />
                    <Image
                        style={styles.imagens} 
                        source={require('./images/logo.gif')}
                    />
                </Text>
                <Text style={styles.textos}>...</Text>

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