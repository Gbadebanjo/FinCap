import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
    Text,
    View,
    TouchableOpacity,
    StatusBar,
    Image,
    StyleSheet,
    Switch,
    ScrollView,
    ActivityIndicator,
  } from 'react-native';
  import { FontAwesome } from '@expo/vector-icons';
  import { useNavigation } from '@react-navigation/native';

export default function NotificationSettings() {
const [isPushNotification, setPushNotification] = useState(false);
const [isSmsNotification, setSmsNotification] = useState(false);
const [isEmailNotification, setEmailNotification] = useState(false);
const navigation = useNavigation();

const togglePushNotification = () => setPushNotification(previousState => !previousState);
const toggleSmsNotification = () => setSmsNotification(previousState => !previousState);
const toggleEmailNotification = () => setEmailNotification(previousState => !previousState);

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.content}>
            <View style={styles.titleContainer}>
            <TouchableOpacity
                style={styles.angleLeft}
                onPress={() => navigation.navigate('MoreScreen')}
            >
                <FontAwesome name="angle-left" size={22} color="#808080" />
            </TouchableOpacity>
            <Text style={styles.welcomeText}>Notification Settings</Text>
            </View>

            <View>
                <View style={styles.faceIDCont}>
                    <View style={styles.iconNtext}>
                    <Text style={styles.settingText}>Push Notification</Text>
                    </View>
                    <Switch
                    trackColor={{ false: '#E0E0E0', true: '#7538EC' }}
                    thumbColor={isPushNotification ? '#FFFFFF' : '#FFFFFF'}
                    ios_backgroundColor="#E0E0E0"
                    onValueChange={togglePushNotification}
                    value={isPushNotification}
                    />
                </View>

                <View style={styles.faceIDCont}>
                    <View style={styles.iconNtext}>
                    <Text style={styles.settingText}>Sms Notification</Text>
                    </View>
                    <Switch
                    trackColor={{ false: '#E0E0E0', true: '#7538EC' }}
                    thumbColor={isSmsNotification ? '#FFFFFF' : '#FFFFFF'}
                    ios_backgroundColor="#E0E0E0"
                    onValueChange={toggleSmsNotification}
                    value={isSmsNotification}
                    />
                </View>

                <View style={styles.faceIDCont}>
                    <View style={styles.iconNtext}>
                    <Text style={styles.settingText}>Email Notification</Text>
                    </View>
                    <Switch
                    trackColor={{ false: '#E0E0E0', true: '#7538EC' }}
                    thumbColor={isEmailNotification ? '#FFFFFF' : '#FFFFFF'}
                    ios_backgroundColor="#E0E0E0"
                    onValueChange={toggleEmailNotification}
                    value={isEmailNotification}
                    />
                </View>
            </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      backgroundColor: '#fff',
    },
    content:{
      flex: 1,
      width: '100%',
      marginTop: 40,
      paddingHorizontal: 20,
    },
    titleContainer: {
      flexDirection: 'row',
    },
    angleLeft: {
      marginBottom: 30,
    },
    welcomeText: {
      fontSize: 16,
      fontWeight: '700',
      width: '80%',
      marginLeft: '8%',
      color: '#101828',
      textAlign: 'center',
    },
    faceIDCont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 15,
      },
      iconNtext: {
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
        width: '70%',
      },
      settingText: {
        fontSize: 14,
        color: '#0E0F11'
      }
  });
  
