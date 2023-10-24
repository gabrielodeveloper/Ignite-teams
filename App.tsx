import { ThemeProvider } from 'styled-components/native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Players } from '@screens/Players';

import theme from './src/theme';
import { StatusBar } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isLoaded ] = useFonts({
    Roboto_400Regular, 
    Roboto_700Bold
  })

  if(isLoaded) {
    SplashScreen.hideAsync()
    return (
      <ThemeProvider theme={theme}>
        <StatusBar 
          barStyle='light-content' 
          backgroundColor='transparent'
          translucent
          />
        <Players />
      </ThemeProvider>
    );
  }


}

