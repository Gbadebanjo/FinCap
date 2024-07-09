// import React, { useState, useRef, useEffect } from 'react';
// import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
// import { Camera } from 'expo-camera';
// import { AntDesign } from '@expo/vector-icons';

// export default function Selfie({ navigation }) {
//   const [hasPermission, setHasPermission] = useState(null);
//   const cameraRef = useRef(null);

//   useEffect(() => {
//     (async () => {
//       const { status } = await Camera.requestCameraPermissionsAsync();
//       setHasPermission(status === 'granted');
//     })();
//   }, []);

//   const takePicture = async () => {
//     if (cameraRef.current) {
//       const photo = await cameraRef.current.takePictureAsync();
//       console.log(photo);
//       // Handle the captured photo
//     }
//   };

//   if (hasPermission === null) {
//     return <View />;
//   }
//   if (hasPermission === false) {
//     return <Text>No access to camera</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       <Camera style={StyleSheet.absoluteFill} type={Camera.Constants.Type.front} ref={cameraRef} />
//       <View style={styles.overlayContainer}>
//         <Text style={styles.text}>Take Selfie</Text>
//         <View style={styles.captureArea}></View>
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity onPress={() => navigation.goBack()} style={styles.cancelButton}>
//             <AntDesign name="close" size={24} color="white" />
//           </TouchableOpacity>
//           <TouchableOpacity onPress={takePicture} style={styles.captureButton}>
//             <AntDesign name="check" size={24} color="white" />
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'black',
//   },
//   overlayContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     color: 'white',
//     fontSize: 20,
//     marginTop: 40,
//   },
//   captureArea: {
//     width: 200,
//     height: 300,
//     borderWidth: 2,
//     borderColor: 'white',
//     borderRadius: 100,
//     backgroundColor: 'rgba(0,0,0,0.3)',
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '80%',
//     position: 'absolute',
//     bottom: 40,
//   },
//   cancelButton: {
//     width: 60,
//     height: 60,
//     backgroundColor: 'red',
//     borderRadius: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   captureButton: {
//     width: 60,
//     height: 60,
//     backgroundColor: 'green',
//     borderRadius: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
