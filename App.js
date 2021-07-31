import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import Login from './src/Screens/Login/Login';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import FlashMessage from 'react-native-flash-message';
import { moderateScale, textScale } from './src/styles/responsiveSize';
import fontFamily from './src/styles/fontFamily';
import SignUp from './src/Screens/SignUp/SignUp';
import Routes from './src/Navigation/Routes';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Otp from './src/Screens/Otp/Otp';

const {dispatch} = store



const App = () =>{

  return (
    <Provider store={store}>
    <SafeAreaProvider>
     <Routes />
        <FlashMessage
          titleStyle={{
            marginRight: moderateScale(5),
            fontFamily: fontFamily.medium,
            fontSize: textScale(16)
          }}
          position="top"
        />
      </SafeAreaProvider>
      </Provider>
  )
}

export default App;
