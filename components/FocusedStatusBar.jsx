import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { COLORS } from '../constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight,
  },
});


function AppBar() {
  return (
    <View style={styles.container} />
  );
}

export default AppBar