import React, { useState, useEffect } from 'react'
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
import axios from 'axios';
  import { FontAwesome } from '@expo/vector-icons';
  import { useNavigation } from '@react-navigation/native';
  import AsyncStorage from '@react-native-async-storage/async-storage';

export default function NotificationSettings() {
const [isPushNotification, setPushNotification] = useState(false);
const [isSmsNotification, setSmsNotification] = useState(false);
const [isEmailNotification, setEmailNotification] = useState(false);
const [loading, setLoading] = useState(true);
const navigation = useNavigation();

useEffect(() => {
  const fetchNotificationSettings = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      const response = await axios.get(
        'http://subacapitalappwebapi-dev.eba-m4gwjsvp.us-east-1.elasticbeanstalk.com/api/settings/get-notification-setting',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(response.data.data)
      const { pushNotification, smsNotification, emailNotification } = response.data.data;
      setPushNotification(pushNotification);
      setSmsNotification(smsNotification);
      setEmailNotification(emailNotification);
    } catch (error) {
      console.log('Error fetching notification settings:', error);
    } finally {
      setLoading(false);
    }
  };

  fetchNotificationSettings();
}, []);

const updateNotificationSettings = async (type, value) => {
  try {
    const token = await AsyncStorage.getItem('userToken');
    const response = await axios.post(
      'http://subacapitalappwebapi-dev.eba-m4gwjsvp.us-east-1.elasticbeanstalk.com/api/settings/add-or-update-notification-setting',
      {
        pushNotification: type === 'pushNotification' ? value : isPushNotification,
        smsNotification: type === 'smsNotification' ? value : isSmsNotification,
        emailNotification: type === 'emailNotification' ? value : isEmailNotification,
      },
      { 
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log('Notification settings updated:', response.data.data);
  } catch (error) {
    console.log('Error updating notification settings:', error);
  }
};

const togglePushNotification = () => {
  const newValue = !isPushNotification;
  setPushNotification(newValue);
  updateNotificationSettings('pushNotification', newValue);
};

const toggleSmsNotification = () => {
  const newValue = !isSmsNotification;
  setSmsNotification(newValue);
  updateNotificationSettings('smsNotification', newValue);
};

const toggleEmailNotification = () => {
  const newValue = !isEmailNotification;
  setEmailNotification(newValue);
  updateNotificationSettings('emailNotification', newValue);
};

if (loading) {
  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator size="large" color="#7538EC" style={{flex: 1}}/>
    </SafeAreaView>
  );
}

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
  
