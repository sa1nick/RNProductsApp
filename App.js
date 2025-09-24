import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import store from './src/redux/store';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

const App = () => {
return (
    <Provider store={store}>
        <SafeAreaProvider>
            <AppNavigator />
            <Toast />
        </SafeAreaProvider>
    </Provider>
  );

};
export default App;
