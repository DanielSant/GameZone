import React, { useState } from 'react';
import * as Font from 'expo-font';
import Home from './screens/home';
import About from './screens/about';
import ReviewDetails from './screens/reviewDetails';
import { AppLoading } from 'expo';

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'ninuto-bold': require('./assets/fonts/Nunito-Bold.ttf')
});



export default function App() {
  const [fontsLoaded, setFonstLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <Home />
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFonstLoaded(true)}
      />
    );
  }

}
