import React from 'react';
import { View } from 'react-native';
import ResponseModal from '../components/ResponseModal';

const Text = () => {
  return (
    <View>
      <ResponseModal
        visible={true}
        title="Error"
        message="Operation completed successfully"
        isSuccess={false}
        onDismiss={() => {}}
        buttonTitle="Dismiss"
      />
    </View>
  );
};

export default Text;
