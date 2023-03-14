import { StyleSheet, Text, View } from 'react-native';
import Qr from './src/Components/Qr';
import Scan from './src/Components/Scan';

export default function App() {
  return (
    <View style={styles.container}>
      <Scan/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
