import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Fontisto, AntDesign, EvilIcons, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import StyledButton from '../../components/StyledButton';

export default function VerifyProfile() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.heading}>
                <TouchableOpacity
                    style={styles.icon}
                    onPress={() => navigation.navigate('KycProfile')}>
                    <AntDesign name="left" size={20} color="#96959A" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Verify your identity</Text>
            </View>
            <Text style={styles.subHead}>Take a selfie</Text>
            <Text style={styles.subHeadText}>We will compare the photo in your document with your selfie</Text>
            <View style={styles.textContainer}>
                <FontAwesome name="user-circle" size={24} color="#000" />
                <Text style={styles.textTag}>Please, keep a straight face</Text>
            </View>
            <View style={styles.textContainer}>
                <Fontisto name="sunglasses" size={22} color="#000" />
                <Text style={styles.textTag}>Wearing glasses? make sure we can clearly see your eyes</Text>
            </View>
            <View style={styles.buttonContainer}>
                <StyledButton
                title="Let's Start"
                onPress={() => navigation.navigate('Selfie')}
            />
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
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    subHead: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        paddingHorizontal: 20,
    },
    subHeadText: {
        color: '#888',
        marginBottom: 20,
        paddingLeft: 20,
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    textTag: {
        marginLeft: 10,
        fontSize: 14,
        color: '#78828A',
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 20,
    },
})