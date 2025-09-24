import {View, Text, ActivityIndicator} from 'react-native';
import RNP from '../../RNP';

const Loader = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color={RNP.colors.blue166bc6} />
      <Text style={styles.loadingText}>Loading Products...</Text>
    </View>
  );
};

const styles = {
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: RNP.colors.graydbe0e2,
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: RNP.colors.grey647982,
    fontWeight: '500',
  },
};

export default Loader;
