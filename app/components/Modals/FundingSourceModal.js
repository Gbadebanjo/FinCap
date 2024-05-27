import { useState, Navigation } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import StyledButton from '../StyledButton';
import FundSourceOption from '../FundSourceOption';
import { useNavigation } from '@react-navigation/native';

const FundingSource = ({
  visible,
  isSuccess,
  onDismiss,
  isSelected,
  buttonTitle,
}) => {
  const [isActive, setIsActive] = useState(false);
  const iconName = isSuccess ? 'check' : 'times';
  const iconColor = 'black';
  const backgroundColor = isActive ? '#7538EC' : '#fff';
  const navigation = useNavigation();

  const handleCardSelect = () => {
    setIsActive(!isActive);
    onPress && onPress(isActive);
  };
  const handlePress = () => {
    alert('Create Saving Plans');
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.modalView}>
        <View>
          <View style={styles.selectCancel}>
            <Text style={styles.modalTitle}>Select funding source</Text>
            <FontAwesome
              name={iconName}
              size={22}
              color={iconColor}
              onPress={onDismiss}
            />
          </View>
          <Text style={styles.modalMessage}>
            You can auto-save from your cash wallet or your bank
          </Text>
          <FundSourceOption title="Wallet" balance="21,000" isSelected={true} />

          <View style={styles.container}>
            <TouchableOpacity
              style={[styles.circle, { backgroundColor: backgroundColor }]}
              onPress={handleCardSelect}
              backgroundColor={backgroundColor}
              isSelected={true}></TouchableOpacity>

            <View style={styles.iconsNnumbers}>
              <View style={styles.icons}>
                <FontAwesome
                  style={styles.icon2}
                  name="circle"
                  size={20}
                  color="#F9A000"
                />
                <FontAwesome
                  style={styles.icon1}
                  name="circle"
                  size={20}
                  color="#ED0006"
                />
              </View>
              <Text style={styles.CardNumber}>***7463</Text>
            </View>
          </View>
        </View>

        <Text
          style={styles.addCardText}
          onPress={() => navigation.navigate('ChangeCard')}>
          Add card
        </Text>
        <StyledButton title={'Create Saving Plans'} onPress={handlePress} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    alignItems: 'center',
    marginTop: '50%',
    paddingTop: 30,
  },
  selectCancel: {
    marginTop: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalTitle: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'normal',
    color: '#111827',
  },
  modalMessage: {
    marginBottom: 15,
    textAlign: 'center',
    width: '100%',
    justifyContent: 'center',
  },
  addCardText: {
    marginBottom: 15,
    marginLeft: '12%',
    marginTop: 20,
    width: '100%',
    justifyContent: 'center',
    color: '#7538EC',
  },
  button: {
    borderColor: '#7538EC',
    borderWidth: 1,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 2,
  },
  buttonText: {
    color: '#7538EC',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    marginRight: 10,
    borderColor: '#D0D5DD',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginTop: 20,
    width: '100%',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  iconsNnumbers: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  icons: {
    position: 'relative',
    justifyContent: 'center',
  },
  icon1: {
    position: 'absolute',
    left: 0,
  },
  icon2: {
    position: 'absolute',
    left: 9,
  },
  CardNumber: {
    fontSize: 13,
    width: '85%',
    color: '#344054',
    fontWeight: '500px',
  },
});

export default FundingSource;
