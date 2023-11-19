import React from "react";
import { View, Text, Button, Modal } from "react-native";

const TripModal = ({ visible, onClose }) => (
  <Modal visible={visible} animationType="slide">
    <View>
      <Text>Trip Management</Text>
      <Button title="Close" onPress={onClose} />
    </View>
  </Modal>
);

export default TripModal;
