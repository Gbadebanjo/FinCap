import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Platform, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';
import * as Permissions from 'expo-permissions';
import axios from 'axios';
import StyledButton from '../../components/StyledButton';
import { useRoute } from '@react-navigation/native';
import ResponseModal from '../../components/Modals/ResponseModal';

export default function UploadDocument({ navigation }) {
    const [selectedFile, setSelectedFile] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalMessage, setModalMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [loading, setLoading] = useState(false);  // State for loading

    const route = useRoute();
    const { bvn, phoneNumber, address, selectedState, selectedCity, photo } = route.params;

    useEffect(() => {
        if (Platform.OS !== 'web') {
            const requestPermission = async () => {
                const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
                if (status !== 'granted') {
                    Alert.alert('Permission needed', 'Permission to access media library is required.');
                }
            };
            requestPermission();
        }
    }, []);

    const pickDocument = async () => {
        try {
            let result = await DocumentPicker.getDocumentAsync({});
            if (!result.canceled) {
                setSelectedFile(result);
            }
        } catch (error) {
            Alert.alert('Error', 'There was an error picking the document. Please try again.');
        }
    };

    const handleSubmit = async () => {
        if (!selectedFile) {
            Alert.alert('Error', 'Please upload a document before submitting.');
            return;
        }

        setLoading(true);  // Start loading

        const formData = new FormData();
        formData.append('BVN', bvn);
        formData.append('MobileNumber', phoneNumber);
        formData.append('FullAddress', address);
        formData.append('City', selectedCity);
        formData.append('State', selectedState);
        formData.append('identityDocument', {
            uri: selectedFile.uri,
            name: selectedFile.name,
            type: selectedFile.mimeType || 'application/octet-stream',
        });
        formData.append('profilePicture', {
            uri: photo.uri,
            name: 'selfie.jpg',
            type: 'image/jpeg',
        });

        try {
            const token = await AsyncStorage.getItem('userToken');
            const response = await axios.post(
                'http://subacapitalappwebapi-dev.eba-m4gwjsvp.us-east-1.elasticbeanstalk.com/api/kyc/createt-kyc-profile',
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setModalTitle('Success');
            setModalMessage('Document submitted successfully!');
            setIsSuccess(true);
            setModalVisible(true);
        } catch (error) {
            console.error('Error submitting document:', error);
            setModalTitle('Error');
            setModalMessage('There was an error submitting the document. Please try again.');
            setIsSuccess(false);
            setModalVisible(true);
        } finally {
            setLoading(false);  // Stop loading
        }
    };

    const handleDismissModal = () => {
        setModalVisible(false);
        navigation.navigate('Home');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.heading}>
                <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
                    <AntDesign name="left" size={16} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Upload your identity document</Text>
            </View>
            <Text style={styles.headerText2}>Work ID, government-issued means of identification.</Text>
            <TouchableOpacity style={styles.uploadContainer} onPress={pickDocument}>
                <View style={styles.upload}>
                    <Ionicons name="cloud-upload-outline" size={20} color="#111827" />
                </View>
                <Text style={styles.texthead}>
                    <Text style={styles.uploadText1}>Click to upload</Text>
                    <Text style={styles.uploadText}> or drag and drop</Text>
                </Text>
                <Text style={styles.text}>SVG, PNG, JPG or GIF (max.800x400px)</Text>
            </TouchableOpacity>

            {selectedFile && (
                <View style={styles.fileContainer}>
                    <View style={styles.fileIcon}>
                        <Ionicons name="document-outline" size={24} color="#FF0000" />
                    </View>
                    <View style={styles.fileDetails}>
                        <Text style={styles.fileName}>{selectedFile.name || "Document Uploaded"}</Text>
                        <Text style={styles.fileStatus}>Uploaded</Text>
                    </View>
                    <Ionicons name="checkmark-circle-outline" size={24} color="#7538EC" />
                </View>
            )}

            <View style={styles.buttons}>
                <StyledButton
                    title={loading ? <ActivityIndicator color="#fff" /> : 'Submit' }
                    onPress={handleSubmit}
                    width="90%"
                    marginLeft="5%"
                    marginTop={20}
                />
                <StyledButton
                    title="Re-upload"
                    onPress={pickDocument}
                    width="90%"
                    marginLeft="5%"
                    marginTop={20}
                    BackColor="#F5F5F5"
                    borderWidth={1}
                    borderColor="#7538EC"
                    TextColor="#7538EC"
                />
            </View>

            <ResponseModal
                visible={modalVisible}
                title={modalTitle}
                message={modalMessage}
                isSuccess={isSuccess}
                onDismiss={handleDismissModal}
                buttonTitle="OK"
            />
        </SafeAreaView>
    );
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
        paddingVertical: 40,
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
    fileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F9FAFB',
        borderRadius: 8,
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 20,
    },
    fileIcon: {
        marginRight: 10,
    },
    fileDetails: {
        flex: 1,
    },
    fileName: {
        fontSize: 16,
        color: '#111827',
    },
    fileStatus: {
        color: '#6B7280',
    },
    buttons: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 20,
    },
});
