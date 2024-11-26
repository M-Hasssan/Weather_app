import { StyleSheet, Text, View } from 'react-native';
import Whether from './src/Whether';

export default function App() {
  return (
    <View style={styles.container}>
      <Whether />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
  