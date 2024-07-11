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
  import StyledButton from '../../components/StyledButton';

export default function BankAccount() {
const [loading, setLoading] = useState(false);
const navigation = useNavigation();



const bankList = [
    // {
    //     bankName: 'Access Bank',
    //     accountNumber: '123456778',
    //     accountName: 'John Doe'
    // },
    // {
    //     bankName: 'Zenith Bank',
    //     accountNumber: '7781224214',
    //     accountName: 'Jack Robbinson'
    // }
];

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
                <Text style={styles.welcomeText}>Bank Account</Text>
            </View>

            <View>
                {/* Conditional rendering based on bankList's length */}
                {bankList && bankList.length > 0 ? (
                    <>
                        {/* Show this button only when there are bank accounts */}
                        <TouchableOpacity style={styles.addABank}>
                            <View style={styles.addABankFirst}>
                                <View style={styles.AddBankIcon}>
                                    <FontAwesome name="plus" size={18} color="#000" />
                                </View>
                                <Text style={styles.settingText}>Add Bank Account</Text>
                            </View>
                            <FontAwesome name="angle-right" size={22} color="#808080" />
                        </TouchableOpacity>

                        {/* Map through bankList to display each bank account */}
                        {bankList.map((bank, index) => (
                            <TouchableOpacity key={index} style={styles.bankAccount}>
                                <View style={styles.addABankFirst}>
                                    <View style={styles.bankAccountIcon}>
                                        <FontAwesome name="bank" size={18} color="#000" />
                                    </View>
                                    <View>
                                        <Text style={styles.settingText}>{bank.accountName}</Text>
                                        <Text style={styles.settingText}>{bank.bankName} {bank.accountNumber}</Text>
                                    </View>
                                </View>
                                <FontAwesome name="angle-right" size={22} color="#808080" />
                            </TouchableOpacity>
                        ))}
                    </>
                ) : (
                    <View>
                        <View style={styles.noBanksIcon}>
                            <FontAwesome name="bank" size={30} color="#000" />
                        </View>
                        <Text style={styles.noBanksText}>You have not added any banks</Text>

                        <StyledButton
                            title={loading ? <ActivityIndicator color="#fff" /> : 'Add new bank'}
                            onPress={() => navigation.navigate('AddBankForm')}
                            width="100%"
                            marginTop={10}
                        />
                    </View>
                )}
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
    addABank: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 15,
        paddingHorizontal: 10,
      },
      addABankFirst: {
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
        width: '100%',
      },
      AddBankIcon: {
        paddingHorizontal: 8,
        paddingVertical: 7,
        backgroundColor: '#F7F7F7',
        borderRadius: '50%',
      },
      bankAccountIcon: {
        paddingHorizontal: 8,
        paddingVertical: 8,
        backgroundColor: '#fff',
        borderRadius: '50%',
      },
      settingText: {
        fontSize: 14,
        color: '#000'
      },
      bankAccount: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor: '#F7F7F7',
        borderRadius: 10,
      },
      noBanksIcon: {
        marginTop: 20,
        marginBottom: 20,
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: '#627D931A',
        borderRadius: '50%',
        alignSelf   : 'center',
        alignContent : 'center',
        justifyContent : 'center',
      },
      noBanksText: {
        fontSize: 14,
        color: '#475467',
        textAlign: 'center',
        marginBottom: 20,
      },
  });
  
