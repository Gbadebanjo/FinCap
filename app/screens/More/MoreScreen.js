import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Switch } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import LogoutModal from '../../components/Modals/LogoutModal';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function MoreScreen() {
  const [imageUri, setImageUri] = useState(null);
  const [isFaceIDEnabled, setIsFaceIDEnabled] = useState(false);
  const [success, isSuccess] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalTitle, setModalTitle] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('userToken');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  const toggleFaceIDSwitch = () => setIsFaceIDEnabled(previousState => !previousState);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
    
        <View style={styles.imageContainer}>
          {imageUri ? (
            <Image source={{ uri: imageUri }} style={styles.image} />
          ) : (
            <View style={styles.placeholder}>
              <Text style={styles.placeholderText}>JW</Text>
            </View>
          )}
        </View>
        <Text style={styles.userName}>Jakob Witz</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile')}
          style={styles.viewProfileButton}>
          <Text style={styles.viewProfiletext}>View profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => alert('Upgrade account')}
          style={styles.upgradeButton}>
          <Text style={styles.upgradetext}>Upgrade Account</Text>
        </TouchableOpacity>

        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity style={styles.eachSettingCont} 
            onPress={() => navigation.navigate('Profile')}>
            <View style={styles.iconNtext}>
              <FontAwesome name="user-circle" size={30} color="#808080" />
              <Text style={styles.settingText}>Edit Personal Data</Text>
            </View>
            <FontAwesome name="angle-right" size={22} color="#808080" />
          </TouchableOpacity>

          <View style={styles.faceIDCont}>
            <View style={styles.iconNtext}>
              <AntDesign name="scan1" size={30} color="#808080" />
              <Text style={styles.settingText}>Login With Face ID</Text>
            </View>
            <Switch
              trackColor={{ false: '#E0E0E0', true: '#7538EC' }}
              thumbColor={isFaceIDEnabled ? '#FFFFFF' : '#FFFFFF'}
              ios_backgroundColor="#E0E0E0"
              onValueChange={toggleFaceIDSwitch}
              value={isFaceIDEnabled}
            />
          </View>

          <TouchableOpacity style={styles.eachSettingCont} 
            onPress={() => navigation.navigate('SetNewPassword')}>
            <View style={styles.iconNtext}>
              <MaterialIcons name="password" size={30} color="#808080" />
              <Text style={styles.settingText}>Change Password</Text>
            </View>
            <FontAwesome name="angle-right" size={22} color="#808080" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.eachSettingCont} 
            onPress={() => navigation.navigate('VerifyNewPassword')}>
            <View style={styles.iconNtext}>
              <Feather name="lock" size={30} color="#808080" />
              <Text style={styles.settingText}>Reset pin</Text>
            </View>
            <FontAwesome name="angle-right" size={22} color="#808080" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.eachSettingCont} 
            onPress={() => navigation.navigate('BankAccount')}>
            <View style={styles.iconNtext}>
              <MaterialCommunityIcons name="bank-outline" size={30} color="#808080" />
              <Text style={styles.settingText}>Withdrawal Bank Account</Text>
            </View>
            <FontAwesome name="angle-right" size={22} color="#808080" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.eachSettingCont}         
            onPress={() => navigation.navigate('NotificationSettings')}>
            <View style={styles.iconNtext}>
              <Entypo name="notification" size={30} color="#808080" />
              <Text style={styles.settingText}>Notification Settings</Text>
            </View>
            <FontAwesome name="angle-right" size={22} color="#808080" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.eachSettingCont}          
            onPress={() => navigation.navigate('Profile')}>
            <View style={styles.iconNtext}>
              <MaterialIcons name="support-agent" size={30} color="#808080" />
              <Text style={styles.settingText}>Support</Text>
            </View>
            <FontAwesome name="angle-right" size={22} color="#808080" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.LogOutCont}  
            onPress={() => {
              setModalVisible(true);
            }}>
            <View style={styles.iconNtext}>
              <AntDesign name="logout" size={30} color="#EC2F2F" />
              <Text style={styles.LogOutText}>Log Out</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
        <LogoutModal
          visible={modalVisible}
          title='Logout'
          message='Are you sure you want to logout?'
          isSuccess={success}
          cancelText='No'
          confirmText='Yes'
          onCancel={hideModal}
          onConfirm={() => {
            hideModal();
            handleLogout();
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    width: 48,
    height: 48,
    borderRadius: 50,
    overflow: 'hidden',
    backgroundColor: '#F2F4F7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholder: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F2F4F7',
  },
  placeholderText: {
    color: '#0E0F11',
    fontSize: 16,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  userName: {
    marginTop: 10,
    fontSize: 16,
  },
  viewProfileButton: {
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: '#F2F4F7',
    borderRadius: 6,
  },
  viewProfiletext: {
    fontSize: 12,
    color: '#344054',
  },
  upgradeButton: {
    marginTop: 40,
    width: '100%',
    paddingVertical: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#7538EC',
    alignItems: 'center',
    marginBottom: 10
  },
  upgradetext: {
    fontSize: 16,
    color: '#7538EC',
  },
  eachSettingCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingVertical: 15,
    marginTop: 10,
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
  },
  LogOutCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 15,
    marginTop: 30,
  },
  faceIDCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingVertical: 15,
    // marginTop: 20,
  },
  LogOutText: {
    color: '#EC2F2F',
  }
});
