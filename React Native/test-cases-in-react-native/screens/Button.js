import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
function AppButton({ onPress }) {

  const printName = () => {
    return "SIddharth"
  }
  return (
    <TouchableOpacity
      style={[styles.button,
      {}]}
      onPress={onPress} >
      <Text style={styles.text}>Register</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: 'dodgerblue',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    padding: 10
  }
})
export default AppButton;
