import React, { useState, useRef } from 'react';
import { Button, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import {  useRoute } from '@react-navigation/native';

export default function Selfie({ navigation }) {
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef(null);

  const route = useRoute();
  const { bvn, phoneNumber, address, selectedState, selectedCity } = route.params;

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant permission" />
      </View>
    );
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      // console.log(photo);
      // Handle the captured photo
      navigation.navigate('UploadDocument', { photo, bvn, phoneNumber, address, selectedState, selectedCity });
    }
  };

  const toggleCameraFacing = () => {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.overlayContainer}>
        <View style={styles.cameraContainer}>
          <CameraView
            style={styles.captureArea}
            facing={facing}
            ref={cameraRef}
          />
        </View>
        <View style={styles.controlsContainer}>
          <Text style={styles.text}>Take Selfie</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.cancelButton}>
              <AntDesign name="close" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleCameraFacing} style={styles.flipButton}>
              <Text style={styles.flipText}>Flip Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={takePicture} style={styles.captureButton}>
              <AntDesign name="check" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  overlayContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraContainer: {
    position: 'absolute',
    top: '20%', // Capture area in the middle
    left: '50%',
    width: 300,
    height: 450,
    transform: [{ translateX: -150 }], // Half the width of the capture area
    borderRadius: 150, // Ensures the corners are rounded
    overflow: 'hidden',
  },
  captureArea: {
    width: '100%',
    height: '100%',
  },
  text: {
    color: 'white',
    fontSize: 20,
    marginTop: 30,
  },
  controlsContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    position: 'absolute',
    bottom: 40,
  },
  cancelButton: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flipButton: {
    width: 150,
    height: 50,
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flipText: {
    fontSize: 18,
    color: 'white',
  },
  captureButton: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
