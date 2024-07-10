import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { AntDesign, Ionicons } from '@expo/vector-icons';

export default function UploadDocument({navigate}) {
    return (
        <SafeAreaView>
            <View style={styles.heading}>
                <TouchableOpacity
                    style={styles.icon}
                    onPress={() => navigation.navigate('Savings')}>
                    <AntDesign name="left" size={16} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Upload your identity document</Text>
            </View>
            <Text style={styles.headerText2}>Work ID, government-issued means of identification.</Text>
            <View style={styles.uploadContainer}>
                <View style={styles.upload}>
                    <Ionicons name="cloud-upload-outline" size={20} color="#111827" />
                </View>
                <Text style={styles.texthead}>
                    <Text style={styles.uploadText1}>Click to upload</Text>
                    <Text style={styles.uploadText}> or drag and drop</Text>
                </Text>
                <Text style={styles.text}>SVG, PNG, JPG or GIF(max.800x400px)</Text>
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
        display: 'flex',
        flexDirection: 'row',
        marginTop: 50,
        paddingHorizontal: 20,
        gap: 15,
    },
    icon: {
        color: '#96959A',
        marginTop: 4,

    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#111827',
    },
    headerText2: {
        fontSize: 14,
        color: '#3F4654',
        marginBottom: 20,
        paddingHorizontal: 50,
    },
    uploadContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        marginHorizontal: 20,
        borderWidth: 1,
        borderColor: '#96959A',
        borderStyle: 'dashed',
        borderRadius: 10,
        paddingVertical: 50,
        width: '90%',
    },
    upload: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#96959A',
    },
    texthead: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20,
    },
    uploadText1: {
        color: '#111827',
    },
    uploadText: {
        color: '#96959A',
    },
    text: {
        color: '#96959A',
        marginTop: 20,
    },
})