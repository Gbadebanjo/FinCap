import { Text, StyleSheet, View, Image, ActivityIndicator, TouchableOpacity, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';

function HomeScreen(props) {
    const userImage = props.userImage || 'https://via.placeholder.com/150'; // Placeholder image URL

    const navigation = useNavigation();
    const [isAmountVisible, setIsAmountVisible] = useState(true);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const toggleAmountVisibility = () => {
        setIsAmountVisible(!isAmountVisible);
    };

    // if (loading) {
    //     return (
    //         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //             <ActivityIndicator size="large" color="#7538EC" />
    //         </View>
    //     );
    // }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.Heading}>
                <View style={styles.HeadingLeft}>
                    <Image
                        source={{ uri: userImage }}
                        style={styles.userImage}
                    />
                    <Text style={styles.welcome}>Welcome</Text>
                </View>
                <FontAwesome name="bell-o" size={24} color="#000" />
            </View>
            <View style={styles.PlanBox}>
                <Text style={styles.PlanName}>Total balance</Text>
                {isAmountVisible ? (
                    data && data.data ? (
                        <Text style={styles.PlanAmount}>
                            {/* {formatAmount(data.data.totalAccruedEarningsAllSavingPlans)} */}
                        </Text>
                    ) : (
                        <Text style={styles.PlanAmount}>Loading...</Text>
                    )
                ) : (
                    <Text style={styles.PlanAmount}>****</Text>
                )}
                <TouchableOpacity
                    onPress={toggleAmountVisibility}
                    style={styles.EyeIcon}>
                    <Icon
                        name={isAmountVisible ? 'eye' : 'eye-off'}
                        size={20}
                        color="#fff"
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    Heading: {
        marginTop: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    userImage: {
        width: 35,
        height: 35,
        borderRadius: 50,
        backgroundColor: '#000',
    },
    HeadingLeft: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
    },
    welcome: {
        fontSize: 18,
        fontWeight: '600',
        color: '#111827',
    },
    PlanBox: {
        backgroundColor: '#4e2873',
        paddingVertical: 26,
        paddingHorizontal: 30,
        width: '100%',
        height: 110,
        borderRadius: 25,
        marginTop: 10,
        position: 'relative',
      },
      PlanName: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '400',
      },
      PlanAmount: {
        color: '#fff',
        fontSize: 24,
        marginTop: 10,
        fontWeight: '700',
      },
      EyeIcon: {
        position: 'absolute',
        right: 20,
        bottom: '80%',
      },
})

export default HomeScreen;