import { StyleSheet, Text, StatusBar, SafeAreaView, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
export default function SavingsScreen() {
    const colors = ['red', 'green', 'black']; // Array of colors

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="transparent" barStyle="dark-content" />
            <Text style={styles.heading}>Savings plan</Text>
            <View style={styles.box}>
                <TouchableOpacity style={[styles.eachbox, { backgroundColor: '#F6F8FF' }]}>
                    <View style={styles.iconbackground} >
                        <FontAwesome name="flag" size={24} color="#1146FF" borderRadius='0' />
                    </View>
                    <Text style={styles.boxHead}>Flex save</Text>
                    <Text>10% intrest p.a</Text>
                    <Text style={styles.boxAmount}>{'\u20A6'}0</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.eachbox, { backgroundColor: '#fef1ef' }]}>
                <View style={styles.iconbackground} >
                    <FontAwesome name="flag" size={24} color="#F9A699" borderRadius='0' />
                </View>
                    <Text style={styles.boxHead}>Goals</Text>
                    <Text>10% intrest p.a</Text>
                    <Text style={styles.boxAmount}>{'\u20A6'}0</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.eachbox, { backgroundColor: '#ebf8f1' }]}>
                <View style={styles.iconbackground} >
                    <FontAwesome name="flag" size={24} color="#1146FF" borderRadius='0' />
                </View>
                    <Text style={styles.boxHead}>Fixed</Text>
                    <Text>10% intrest p.a</Text>
                    <Text style={styles.boxAmount}>{'\u20A6'}0</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    heading: {
        fontSize: 22,
        fontWeight: '500',
        textAlign: 'center',
        paddingTop: 40,
    },
    box: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        padding: 15,
    },
    eachbox: {
        height: 145,
        width: '42%',
        backgroundColor: '#F6F8FF',
        margin: 10,
        borderRadius: 7,
        padding: 15,
        justifyContent: 'space-between',
    },
    boxHead: {
        fontSize: 14,
        fontWeight: '700',
        paddingVertical: 5,
    },
    boxAmount: {
        fontSize: 20,
        fontWeight: '700',
        paddingVertical: 5,
    },
    iconbackground: {
        borderRadius: 50,
        backgroundColor: '#fff',
        width: 34,
        height: 34,
        alignItems: 'center',
        justifyContent: 'center'
    }

})